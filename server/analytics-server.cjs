const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const fs = require('fs');
const useragent = require('useragent');
const initSqlJs = require('sql.js');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

// CORS setup to allow incoming telemetry from Vite dev frontend
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

const DB_PATH = path.join(__dirname, 'analytics.db');
let db;

// SQL Database Wrapper for sql.js (WebAssembly SQLite)
class SqlJsDatabase {
  constructor(SQL, dbPath) {
    this.SQL = SQL;
    this.dbPath = dbPath;
    if (fs.existsSync(dbPath)) {
      try {
        const filebuffer = fs.readFileSync(dbPath);
        this.db = new SQL.Database(filebuffer);
      } catch (err) {
        console.warn("Could not read binary SQLite file, starting fresh in-memory:", err.message);
        this.db = new SQL.Database();
      }
    } else {
      this.db = new SQL.Database();
    }
  }

  save() {
    try {
      const data = this.db.export();
      fs.writeFileSync(this.dbPath, Buffer.from(data));
    } catch (err) {
      console.error("Failed to save SQLite file to disk:", err);
    }
  }

  all(query, params = [], callback) {
    try {
      const stmt = this.db.prepare(query);
      stmt.bind(params);
      const rows = [];
      while (stmt.step()) {
        rows.push(stmt.getAsObject());
      }
      stmt.free();
      if (callback) callback(null, rows);
      return rows;
    } catch (err) {
      if (callback) callback(err);
      throw err;
    }
  }

  get(query, params = [], callback) {
    try {
      const stmt = this.db.prepare(query);
      stmt.bind(params);
      let row = null;
      if (stmt.step()) {
        row = stmt.getAsObject();
      }
      stmt.free();
      if (callback) callback(null, row);
      return row;
    } catch (err) {
      if (callback) callback(err);
      throw err;
    }
  }

  run(query, params = [], callback) {
    try {
      const stmt = this.db.prepare(query);
      stmt.run(params);
      stmt.free();
      this.save(); // Persist changes immediately to the binary db file
      if (callback) callback(null);
    } catch (err) {
      if (callback) callback(err);
      throw err;
    }
  }

  serialize(callback) {
    callback();
  }

  close(callback) {
    this.save();
    try {
      this.db.close();
    } catch (err) {
      console.error("Error closing db:", err);
    }
    if (callback) callback();
  }
}

// List of African countries for realistic local simulation
const AFRICAN_COUNTRIES = [
  { code: 'NG', name: 'Nigeria' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'KE', name: 'Kenya' },
  { code: 'SN', name: 'Senegal' },
  { code: 'EG', name: 'Egypt' },
  { code: 'GH', name: 'Ghana' },
  { code: 'MA', name: 'Morocco' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'CI', name: 'Ivory Coast' }
];

const REFERRERS = ['Direct', 'Google Search', 'LinkedIn', 'Twitter/X', 'GitHub', 'AWI Newsletter'];
const BROWSERS = ['Chrome', 'Safari', 'Firefox', 'Edge'];
const OS_LIST = ['Android', 'iOS', 'Windows', 'MacOS', 'Linux'];
const PAGES = ['/', '/about', '/awpii', '/country-tracker', '/publications', '/enforcement-watch'];

let sseConnections = [];

// Seed function to pre-populate database for immediate Tableau analysis
function seedHistoricalData() {
  const now = new Date();
  
  db.serialize(() => {
    // Generate 40 simulated historical sessions
    for (let i = 0; i < 40; i++) {
      const sessionId = 'seed_' + Math.random().toString(36).substring(2, 10);
      const hoursAgo = Math.floor(Math.random() * 24);
      const sessionStart = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000 - Math.random() * 45 * 60 * 1000);
      
      const countryObj = AFRICAN_COUNTRIES[Math.floor(Math.random() * AFRICAN_COUNTRIES.length)];
      const browser = BROWSERS[Math.floor(Math.random() * BROWSERS.length)];
      const os = OS_LIST[Math.floor(Math.random() * OS_LIST.length)];
      const referrer = REFERRERS[Math.floor(Math.random() * REFERRERS.length)];
      const pageviewsCount = Math.floor(Math.random() * 5) + 1;
      const durationSec = pageviewsCount * (Math.floor(Math.random() * 120) + 30);
      const sessionEnd = new Date(sessionStart.getTime() + durationSec * 1000);
      const lastPage = PAGES[Math.floor(Math.random() * PAGES.length)];

      db.run(`
        INSERT INTO sessions (sessionId, startedAt, lastHeartbeat, duration, pageviews, browser, os, country, countryCode, referrer, currentPage)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        sessionId,
        sessionStart.toISOString(),
        sessionEnd.toISOString(),
        durationSec,
        pageviewsCount,
        browser,
        os,
        countryObj.name,
        countryObj.code,
        referrer,
        lastPage
      ]);

      // Insert Pageview events
      let currentEventTime = new Date(sessionStart);
      for (let pv = 0; pv < pageviewsCount; pv++) {
        const eventId = 'evt_' + Math.random().toString(36).substring(2, 10);
        const path = PAGES[Math.floor(Math.random() * PAGES.length)];
        
        db.run(`
          INSERT INTO events (id, sessionId, timestamp, eventName, path, country, browser, os, eventData)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          eventId,
          sessionId,
          currentEventTime.toISOString(),
          'pageview',
          path,
          countryObj.name,
          browser,
          os,
          null
        ]);

        // Add random spacing between views
        currentEventTime = new Date(currentEventTime.getTime() + (durationSec / pageviewsCount) * 1000);
      }
    }

    console.log("✅ Seeding complete. 40 sessions and matching event logs added to SQLite database.");
  });
}

// SQL Query Helpers wrapped in Promises for cleaner async/await pipeline
function dbGet(query, params = []) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function dbAll(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function dbRun(query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

// Global Diagnostics Cache
const diagnostics = {
  bytesIngested: 0,
  eventsProcessed: 0,
  processingTimeSumMs: 0
};

// Main Ingestion and SQL Aggregate Calculator
async function computeAggregatedStats() {
  const now = new Date();
  // Active threshold: heartbeats received in the last 30 seconds
  const activeThreshold = new Date(now.getTime() - 30 * 1000).toISOString();

  try {
    // 1. Active Users
    const activeUsersRow = await dbGet(
      "SELECT COUNT(DISTINCT sessionId) as count FROM sessions WHERE lastHeartbeat >= ?",
      [activeThreshold]
    );

    // 2. Global Counters
    const countersRow = await dbGet(`
      SELECT 
        COUNT(*) as totalPageViews,
        (SELECT COUNT(DISTINCT sessionId) FROM sessions) as totalSessions,
        (SELECT SUM(duration) FROM sessions) as totalDuration
      FROM events 
      WHERE eventName = 'pageview'
    `);

    // 3. Bounce calculations (sessions with only 1 pageview, and have elapsed > 30s)
    const bounceRow = await dbGet(`
      SELECT COUNT(*) as count FROM sessions 
      WHERE pageviews = 1 AND lastHeartbeat < ?
    `, [activeThreshold]);

    // 4. Pageviews breakdown
    const pageviewsRows = await dbAll(`
      SELECT path, COUNT(*) as count FROM events 
      WHERE eventName = 'pageview' 
      GROUP BY path 
      ORDER BY count DESC
    `);
    const pageViewsObj = {};
    pageviewsRows.forEach(r => pageViewsObj[r.path] = r.count);

    // 5. Referrers breakdown
    const referrerRows = await dbAll(`
      SELECT referrer, COUNT(*) as count FROM sessions 
      GROUP BY referrer 
      ORDER BY count DESC
    `);
    const referrersObj = {};
    referrerRows.forEach(r => referrersObj[r.referrer] = r.count);

    // 6. Browser breakdown
    const browserRows = await dbAll(`
      SELECT browser, COUNT(*) as count FROM sessions 
      GROUP BY browser 
      ORDER BY count DESC
    `);
    const browsersObj = {};
    browserRows.forEach(r => browsersObj[r.browser] = r.count);

    // 7. OS breakdown
    const osRows = await dbAll(`
      SELECT os, COUNT(*) as count FROM sessions 
      GROUP BY os 
      ORDER BY count DESC
    `);
    const osObj = {};
    osRows.forEach(r => osObj[r.os] = r.count);

    // 8. Country breakdown
    const countryRows = await dbAll(`
      SELECT country, COUNT(*) as count FROM sessions 
      GROUP BY country 
      ORDER BY count DESC
    `);
    const countriesObj = {};
    countryRows.forEach(r => countriesObj[r.country] = r.count);

    // 9. Hourly stats for timeline chart
    const hourlyRows = await dbAll(`
      SELECT strftime('%H', timestamp) as hr, COUNT(*) as count 
      FROM events 
      WHERE eventName = 'pageview'
      GROUP BY hr
      ORDER BY hr ASC
    `);

    // Reconstruct 24 hours format matching frontend expectancy
    const hourlyStats = Array.from({ length: 24 }, (_, i) => {
      const targetHour = (now.getHours() - (23 - i) + 24) % 24;
      const targetHourStr = targetHour.toString().padStart(2, '0');
      const match = hourlyRows.find(h => h.hr === targetHourStr);
      return {
        hour: targetHour,
        count: match ? match.count : 0
      };
    });

    const totalSessions = countersRow.totalSessions || 0;
    const avgDuration = totalSessions > 0 ? Math.round((countersRow.totalDuration || 0) / totalSessions) : 0;
    const bounceRate = totalSessions > 0 ? Math.round((bounceRow.count / totalSessions) * 100) : 0;

    return {
      activeUsers: activeUsersRow.count,
      totalPageViews: countersRow.totalPageViews || 0,
      totalSessions,
      avgSessionDuration: avgDuration,
      bounceRate: Math.min(100, Math.max(0, bounceRate)),
      pageViews: pageViewsObj,
      referrers: referrersObj,
      browsers: browsersObj,
      os: osObj,
      countries: countriesObj,
      hourlyStats,
      diagnostics: {
        ...diagnostics,
        avgProcessingTimeMs: diagnostics.eventsProcessed > 0
          ? (diagnostics.processingTimeSumMs / diagnostics.eventsProcessed).toFixed(3)
          : 0
      }
    };
  } catch (err) {
    console.error("SQL aggregate computation failed:", err);
    return null;
  }
}

// Ingestion Pipeline Logic
async function processIncomingTelemetry(rawEvent, ip, userAgentHeader) {
  const startTime = process.hrtime();
  const payloadSize = Buffer.byteLength(JSON.stringify(rawEvent));
  
  diagnostics.bytesIngested += payloadSize;
  diagnostics.eventsProcessed += 1;

  const { sessionId, eventName, path, referrer, eventData, simulatedGeo, simulatedAgent } = rawEvent;
  if (!sessionId) return null;

  let browser, os, geo;

  // Resolve client browser metadata
  if (simulatedAgent) {
    browser = simulatedAgent.browser || 'Chrome';
    os = simulatedAgent.os || 'Android';
  } else {
    const agent = useragent.parse(userAgentHeader);
    browser = agent.family;
    os = agent.os.family;
  }

  // Resolve client geography
  if (simulatedGeo) {
    geo = AFRICAN_COUNTRIES.find(c => c.code === simulatedGeo) || AFRICAN_COUNTRIES[0];
  } else {
    // Fallback stable geo hashing based on sessionId
    let hash = 0;
    for (let i = 0; i < sessionId.length; i++) {
      hash = sessionId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % AFRICAN_COUNTRIES.length;
    geo = AFRICAN_COUNTRIES[index];
  }

  const now = new Date();
  const nowStr = now.toISOString();

  try {
    // Check if session already exists in SQL Database
    const existingSession = await dbGet("SELECT * FROM sessions WHERE sessionId = ?", [sessionId]);

    if (!existingSession) {
      // Create new session row
      await dbRun(`
        INSERT INTO sessions (sessionId, startedAt, lastHeartbeat, duration, pageviews, browser, os, country, countryCode, referrer, currentPage)
        VALUES (?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?)
      `, [
        sessionId, nowStr, nowStr, 
        eventName === 'pageview' ? 1 : 0,
        browser, os, geo.name, geo.code, 
        referrer || 'Direct', path || '/'
      ]);
    } else {
      // Session exists, update it
      const updatedPageviews = existingSession.pageviews + (eventName === 'pageview' ? 1 : 0);
      const newDuration = Math.round((now - new Date(existingSession.startedAt)) / 1000);
      
      await dbRun(`
        UPDATE sessions 
        SET lastHeartbeat = ?, duration = ?, pageviews = ?, currentPage = ? 
        WHERE sessionId = ?
      `, [nowStr, newDuration, updatedPageviews, path || existingSession.currentPage, sessionId]);
    }

    // Insert the Event raw log
    const eventId = Math.random().toString(36).substring(2, 9);
    await dbRun(`
      INSERT INTO events (id, sessionId, timestamp, eventName, path, country, browser, os, eventData)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      eventId, sessionId, nowStr, eventName, 
      path || '/', geo.name, browser, os, 
      eventData ? JSON.stringify(eventData) : null
    ]);

    const processedEvent = {
      id: eventId,
      timestamp: nowStr,
      sessionId,
      eventName,
      path: path || '/',
      country: geo.name,
      countryCode: geo.code,
      browser,
      os,
      eventData: eventData || null
    };

    // Keep diagnostics
    const diff = process.hrtime(startTime);
    const durationMs = (diff[0] * 1e9 + diff[1]) / 1e6;
    diagnostics.processingTimeSumMs += durationMs;

    return processedEvent;
  } catch (err) {
    console.error("Database ingestion transaction failed:", err);
    return null;
  }
}

// Broadcasting SSE Utility
function broadcast(type, data) {
  const payload = JSON.stringify({ type, data });
  sseConnections.forEach(res => {
    res.write(`data: ${payload}\n\n`);
  });
}

async function broadcastMetrics() {
  const stats = await computeAggregatedStats();
  if (stats) broadcast('metrics', stats);
}

// Redirect root or /analytics requests to the Vite frontend dev server
app.get(['/', '/analytics'], (req, res) => {
  res.redirect('http://localhost:5173/analytics');
});

// Ingestion API Route GET (friendly placeholder for browser visits)
app.get('/api/event', (req, res) => {
  res.status(200).json({
    status: "online",
    service: "Africa Web Institute Telemetry Ingestion API",
    message: "This endpoint expects POST requests from the tracker SDK. View the analytics dashboard at http://localhost:5173/analytics (or your active frontend port).",
    dbEngine: "SQLite WASM (sql.js)",
    dbFilePath: DB_PATH,
    timestamp: new Date().toISOString()
  });
});

// Ingestion API Route POST
app.post('/api/event', async (req, res) => {
  const rawEvent = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];

  if (!rawEvent || !rawEvent.sessionId || !rawEvent.eventName) {
    return res.status(400).json({ error: 'Invalid event payload' });
  }

  const processedEvent = await processIncomingTelemetry(rawEvent, ip, userAgent);

  if (processedEvent) {
    broadcast('event', processedEvent);
    await broadcastMetrics();
    res.status(200).json({ success: true, eventId: processedEvent.id });
  } else {
    res.status(500).json({ error: 'Failed to ingest event into database' });
  }
});

// SSE Streaming Route for Dashboard
app.get('/api/live', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  try {
    // Get recent 30 events for initial stream load
    const recentEvents = await dbAll(`
      SELECT id, sessionId, timestamp, eventName, path, country, browser, os, eventData 
      FROM events 
      ORDER BY timestamp DESC 
      LIMIT 30
    `);
    
    // Parse JSON data objects
    const history = recentEvents.map(e => ({
      ...e,
      eventData: e.eventData ? JSON.parse(e.eventData) : null
    }));

    const metrics = await computeAggregatedStats();

    const initialState = { metrics, history };
    res.write(`data: ${JSON.stringify({ type: 'init', data: initialState })}\n\n`);
  } catch (err) {
    console.error("SSE initial payload assembly failed:", err);
  }

  sseConnections.push(res);

  req.on('close', () => {
    sseConnections = sseConnections.filter(c => c !== res);
  });
});

// Export Database Endpoint for Tableau Web Data Connector or CSV imports
app.get('/api/export', async (req, res) => {
  try {
    const events = await dbAll(`
      SELECT id, sessionId, timestamp, eventName, path, country, browser, os 
      FROM events 
      ORDER BY timestamp DESC
    `);

    // Convert to CSV string format
    const csvHeaders = 'id,sessionId,timestamp,eventName,path,country,browser,os\n';
    const csvRows = events.map(e => 
      `"${e.id}","${e.sessionId}","${e.timestamp}","${e.eventName}","${e.path}","${e.country}","${e.browser}","${e.os}"`
    ).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=telemetry_export.csv');
    res.status(200).send(csvHeaders + csvRows);
  } catch (err) {
    res.status(500).json({ error: "Failed to export CSV telemetry logs" });
  }
});

// Close database on server shutdown
process.on('SIGINT', () => {
  if (db) {
    db.close(() => {
      console.log('Database connection closed.');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

// Initialize Database and Start Server
initSqlJs().then(SQL => {
  db = new SqlJsDatabase(SQL, DB_PATH);
  
  // Setup tables
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS sessions (
        sessionId TEXT PRIMARY KEY,
        startedAt TEXT,
        lastHeartbeat TEXT,
        duration INTEGER,
        pageviews INTEGER,
        browser TEXT,
        os TEXT,
        country TEXT,
        countryCode TEXT,
        referrer TEXT,
        currentPage TEXT
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        sessionId TEXT,
        timestamp TEXT,
        eventName TEXT,
        path TEXT,
        country TEXT,
        browser TEXT,
        os TEXT,
        eventData TEXT,
        FOREIGN KEY (sessionId) REFERENCES sessions (sessionId)
      )
    `, [], () => {
      // Check if database needs seeding
      db.get("SELECT COUNT(*) as count FROM events", [], (err, row) => {
        if (!err && row.count === 0) {
          console.log("🌱 Database is empty. Seeding 24 hours of historical analytics...");
          seedHistoricalData();
        }
      });
    });
  });

  // Start Server on 3001
  server.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`📡 Africa Web Institute Telemetry Server Running`);
    console.log(`🔌 Listening on port ${PORT}`);
    console.log(`💾 DB Engine: SQLite WASM (analytics.db)`);
    console.log(`🔗 Ingestion Endpoint: http://localhost:${PORT}/api/event`);
    console.log(`📊 Tableau CSV Feed: http://localhost:${PORT}/api/export`);
    console.log(`=================================================`);
  });
}).catch(err => {
  console.error("Failed to initialize WebAssembly SQLite driver:", err);
});

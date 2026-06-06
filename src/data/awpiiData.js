// src/data/awpiiData.js
// Official May 2026 Snapshot data for the Africa Web3 Policy & Innovation Index (AWPII)

const awpiiData = [
  {
    id: "ZAF",
    key: "southafrica",
    name: "South Africa",
    flag: "🇿🇦",
    rank: 1,
    overall_score: 88.7,
    grade: "AA+",
    tier_color: "Green",
    momentum: "Strong Upward",
    key_update: "CARF live; capital flow draft regs",
    pillars: {
      clarity: 93,
      policy_support: 88,
      innovation: 89,
      adoption: 87
    },
    swot: {
      strengths: "World-class regulatory clarity (300+ FSCA CASPs, CARF live since March 1, 2026), strong TradFi integration, robust enforcement, and institutional maturity.",
      weaknesses: "Transitional uncertainties around capital controls and relatively high compliance burden for smaller players.",
      opportunities: "Finalize stablecoin framework (rand-pegged focus) and expand tokenized asset pilots in supply chains/public services.",
      threats: "The proposed Capital Flow Management Regulations could introduce stricter reporting or approval requirements for crypto-related outflows, potentially slowing cross-border innovation."
    }
  },
  {
    id: "KEN",
    key: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    rank: 2,
    overall_score: 87.4,
    grade: "AA+",
    tier_color: "Green",
    momentum: "Very Strong Upward",
    key_update: "Draft VASP Regs 2026 released",
    pillars: {
      clarity: 91,
      policy_support: 86,
      innovation: 88,
      adoption: 88
    },
    swot: {
      strengths: "Africa’s first standalone VASP Act (2025) + Draft VASP Regulations 2026 provide comprehensive structure; excellent mobile money synergy (M-Pesa).",
      weaknesses: "High proposed capital thresholds (e.g., KES 500M for some licenses) may exclude local startups.",
      opportunities: "Rapid licensing rollout post-draft regulations; expand stablecoin/remittance use cases.",
      threats: "Potential regulatory overlap or coordination friction between CBK and CMA could slow implementation; high compliance costs might favor foreign players."
    }
  },
  {
    id: "MUS",
    key: "mauritius",
    name: "Mauritius",
    flag: "🇲🇺",
    rank: 3,
    overall_score: 85.8,
    grade: "AA-",
    tier_color: "Green",
    momentum: "Stable",
    key_update: "Stable mature framework",
    pillars: {
      clarity: 89,
      policy_support: 86,
      innovation: 87,
      adoption: 80
    },
    swot: {
      strengths: "Mature VAITOS framework, clear licensing classes, FATF alignment, and attractive tax environment.",
      weaknesses: "Smaller domestic market limits raw adoption volume.",
      opportunities: "Deepen linkages with mainland African markets as a gateway.",
      threats: "Global shifts in offshore regulations or increased scrutiny on tax-friendly jurisdictions could reduce appeal for international VASPs."
    }
  },
  {
    id: "GHA",
    key: "ghana",
    name: "Ghana",
    flag: "🇬🇭",
    rank: 4,
    overall_score: 84.2,
    grade: "A+",
    tier_color: "Green",
    momentum: "Very Strong Upward",
    key_update: "Sandbox pilots active",
    pillars: {
      clarity: 85,
      policy_support: 86,
      innovation: 87,
      adoption: 84
    },
    swot: {
      strengths: "VASP Act enforced + active regulatory sandbox (11 firms in pilots); gold-backed stablecoin exploration adds unique innovation angle.",
      weaknesses: "Early-stage implementation — full licensing still scaling.",
      opportunities: "Convert successful sandbox pilots into mainstream licenses; integrate gold-backed tokens with cedi ecosystem.",
      threats: "Execution risks in sandbox-to-full regime transition; potential BoG/SEC coordination challenges."
    }
  },
  {
    id: "NGA",
    key: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    rank: 5,
    overall_score: 82.5,
    grade: "A",
    tier_color: "Green",
    momentum: "Steady Upward",
    key_update: "Strong SEC enforcement + volume leader",
    pillars: {
      clarity: 83,
      policy_support: 77,
      innovation: 79,
      adoption: 93
    },
    swot: {
      strengths: "Massive adoption scale (#6 global Chainalysis); ISA 2025 + SEC licensing/tax enforcement provide legal foundation.",
      weaknesses: "High compliance costs and capital requirements disadvantage smaller VASPs.",
      opportunities: "Streamline licensing to boost local innovation; expand institutional on-ramps.",
      threats: "FX controls and CBN monetary policy caution could trigger sudden restrictions; macroeconomic volatility (inflation) drives usage but adds uncertainty."
    }
  },
  {
    id: "RWA",
    key: "rwanda",
    name: "Rwanda",
    flag: "🇷🇼",
    rank: 6,
    overall_score: 83.1,
    grade: "A",
    tier_color: "Green",
    momentum: "Strong Upward",
    key_update: "Draft law advancing; digital hub focus",
    pillars: {
      clarity: 80,
      policy_support: 85,
      innovation: 85,
      adoption: 82
    },
    swot: {
      strengths: "Proactive national blockchain strategy and digital economy vision.",
      weaknesses: "Smaller market size limits scale.",
      opportunities: "Finalize and implement draft virtual assets law; position as East Africa’s innovation testbed.",
      threats: "Over-reliance on government-led initiatives may slow private-sector dynamism if private investment lags."
    }
  },
  {
    id: "MAR",
    key: "morocco",
    name: "Morocco",
    flag: "🇲🇦",
    rank: 7,
    overall_score: 82.0,
    grade: "A",
    tier_color: "Green",
    momentum: "Upward",
    key_update: "Draft Bill 42.25 progressing",
    pillars: {
      clarity: 80,
      policy_support: 82,
      innovation: 83,
      adoption: 83
    },
    swot: {
      strengths: "Rapid shift from 2017 ban via advancing Draft Bill 42.25.",
      weaknesses: "Licensing framework still in transition.",
      opportunities: "Formalize underground adoption into regulated channels.",
      threats: "Political or regional delays in passing the final bill could stall momentum."
    }
  },
  {
    id: "SYC",
    key: "seychelles",
    name: "Seychelles",
    flag: "🇸🇨",
    rank: 8,
    overall_score: 80.2,
    grade: "A-",
    tier_color: "Green",
    momentum: "Stable",
    key_update: "Offshore licensing appeal",
    pillars: {
      clarity: 83,
      policy_support: 80,
      innovation: 80,
      adoption: 77
    },
    swot: {
      strengths: "Flexible VASP licensing and offshore appeal.",
      weaknesses: "Limited domestic market.",
      opportunities: "Serve as bridge for African and Indian Ocean Web3 flows.",
      threats: "Global crackdowns on offshore jurisdictions could impact attractiveness."
    }
  },
  {
    id: "NAM",
    key: "namibia",
    name: "Namibia",
    flag: "🇳🇦",
    rank: 9,
    overall_score: 76.8,
    grade: "A-",
    tier_color: "Green",
    momentum: "Steady Upward",
    key_update: "Licensing + FATF alignment",
    pillars: {
      clarity: 77,
      policy_support: 76,
      innovation: 78,
      adoption: 76
    },
    swot: {
      strengths: "Solid licensing regime and FATF alignment.",
      weaknesses: "Smaller ecosystem scale.",
      opportunities: "Leverage Southern Africa regional integration.",
      threats: "Slow implementation pace compared to faster-moving peers."
    }
  },
  {
    id: "BWA",
    key: "botswana",
    name: "Botswana",
    flag: "🇧🇼",
    rank: 10,
    overall_score: 75.6,
    grade: "A-",
    tier_color: "Green",
    momentum: "Steady Upward",
    key_update: "Virtual Assets Act updates",
    pillars: {
      clarity: 75,
      policy_support: 76,
      innovation: 76,
      adoption: 75
    },
    swot: {
      strengths: "Updated Virtual Assets Act aligned with FATF.",
      weaknesses: "Early-stage ecosystem development.",
      opportunities: "Build on Southern Africa momentum.",
      threats: "Resource constraints may slow full rollout of framework."
    }
  },
  {
    id: "UGA",
    key: "uganda",
    name: "Uganda",
    flag: "🇺🇬",
    rank: 11,
    overall_score: 74.2,
    grade: "A-",
    tier_color: "Green",
    momentum: "Steady Upward",
    key_update: "Grassroots strength"
  },
  {
    id: "ETH",
    key: "ethiopia",
    name: "Ethiopia",
    flag: "🇪🇹",
    rank: 12,
    overall_score: 71.8,
    grade: "BBB+",
    tier_color: "Yellow",
    momentum: "Steady Upward",
    key_update: "High adoption despite limited formal regs"
  },
  {
    id: "TZA",
    key: "tanzania",
    name: "Tanzania",
    flag: "🇹🇿",
    rank: 13,
    overall_score: 71.5,
    grade: "BBB+",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "Cautious but active underground use"
  },
  {
    id: "ZMB",
    key: "zambia",
    name: "Zambia",
    flag: "🇿🇲",
    rank: 14,
    overall_score: 69.4,
    grade: "BBB-",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "Draft discussions ongoing"
  },
  {
    id: "SEN",
    key: "senegal",
    name: "Senegal",
    flag: "🇸🇳",
    rank: 15,
    overall_score: 64.5,
    grade: "BB+",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "ECOWAS fintech influence"
  },
  {
    id: "CIV",
    key: "cotedivoire",
    name: "Côte d'Ivoire",
    flag: "🇨🇮",
    rank: 16,
    overall_score: 64.3,
    grade: "BB+",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "Mobile money potential"
  },
  {
    id: "TUN",
    key: "tunisia",
    name: "Tunisia",
    flag: "🇹🇳",
    rank: 17,
    overall_score: 63.5,
    grade: "BB",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "Underground active"
  },
  {
    id: "CMR",
    key: "cameroon",
    name: "Cameroon",
    flag: "🇨🇲",
    rank: 18,
    overall_score: 58.5,
    grade: "BB",
    tier_color: "Yellow",
    momentum: "Stable",
    key_update: "CEMAC restrictions persist"
  },
  {
    id: "DZA",
    key: "algeria",
    name: "Algeria",
    flag: "🇩🇿",
    rank: 19,
    overall_score: 52.5,
    grade: "BB-",
    tier_color: "Red",
    momentum: "Stable",
    key_update: "Explicit ban"
  },
  {
    id: "EGY",
    key: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    rank: 20,
    overall_score: 41.3,
    grade: "B-",
    tier_color: "Red",
    momentum: "Stable",
    key_update: "Strict prohibition (Law 194/2020)"
  }
];

export default awpiiData;

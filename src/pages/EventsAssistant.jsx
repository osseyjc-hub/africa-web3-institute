import React, { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { MessageSquare, Sparkles, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const FunctionDisplay = ({ toolCall }) => {
  const [expanded, setExpanded] = useState(false);
  const projection = toolCall.display_projection || {};
  const hideDetails = projection.hide_details && projection.details_redacted;

  const getStatusLabel = () => {
    if (hideDetails) {
      if (toolCall.status === "pending" || toolCall.status === "running" || toolCall.status === "in_progress") return projection.active_label || "Working...";
      if (toolCall.status === "failed" || toolCall.status === "error") return projection.error_label || "Failed";
      return projection.label || "Done";
    }
    return toolCall.name.replace(/_/g, " ");
  };

  const getStatusColor = () => {
    if (toolCall.status === "failed" || toolCall.status === "error") return "text-red-500";
    if (toolCall.status === "completed" || toolCall.status === "success") return "text-green-600";
    return "text-amber-500";
  };

  let parsedArgs = {};
  try { parsedArgs = JSON.parse(toolCall.arguments_string); } catch (e) {}
  let parsedResult = null;
  try { parsedResult = typeof toolCall.results === "string" ? JSON.parse(toolCall.results) : toolCall.results; } catch (e) {}

  return (
    <div className="mt-2 text-xs">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted transition-colors ${getStatusColor()}`}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "currentColor" }} />
        <span className="font-medium capitalize">{getStatusLabel()}</span>
      </button>
      {expanded && !hideDetails && (
        <div className="mt-2 ml-2 pl-3 border-l-2 border-muted space-y-2">
          {Object.keys(parsedArgs).length > 0 && (
            <div>
              <span className="font-semibold text-muted-foreground">Parameters:</span>
              <pre className="mt-1 text-[11px] bg-muted/50 p-2 rounded overflow-x-auto">{JSON.stringify(parsedArgs, null, 2)}</pre>
            </div>
          )}
          {parsedResult && (
            <div>
              <span className="font-semibold text-muted-foreground">Result:</span>
              <pre className="mt-1 text-[11px] bg-muted/50 p-2 rounded overflow-x-auto">{JSON.stringify(parsedResult, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-[80%] ${isUser ? "order-1" : "order-1"}`}>
        {!isUser && (
          <div className="flex items-center gap-2 mb-1 ml-1">
            <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-accent" />
            </div>
            <span className="text-[0.6875rem] font-semibold text-muted-foreground uppercase tracking-wider">Events Assistant</span>
          </div>
        )}
        {message.content && (
          <div className={`rounded-xl px-4 py-3 ${isUser ? "bg-secondary text-white rounded-br-md" : "bg-muted/80 text-foreground rounded-bl-md"}`}>
            {isUser ? (
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            ) : (
              <ReactMarkdown className="text-sm prose prose-sm prose-p:my-1 prose-ul:my-1 prose-li:my-0 max-w-none">{message.content}</ReactMarkdown>
            )}
          </div>
        )}
        {message.tool_calls?.map((tc, idx) => <FunctionDisplay key={idx} toolCall={tc} />)}
      </div>
    </div>
  );
};

export default function EventsAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    startConversation();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!conversationId) return;
    const unsub = base44.agents.subscribeToConversation(conversationId, (data) => {
      setMessages(data.messages || []);
      const lastMsg = data.messages?.[data.messages.length - 1];
      if (lastMsg?.role === "assistant" && !lastMsg.tool_calls?.some(tc => tc.status === "pending" || tc.status === "running" || tc.status === "in_progress")) {
        setLoading(false);
      }
    });
    return () => unsub();
  }, [conversationId]);

  const startConversation = async () => {
    setLoading(true);
    try {
      const conv = await base44.agents.createConversation({
        agent_name: "events_assistant_awi",
        metadata: { name: "Events Assistant", description: "Chat with the AWI Events Assistant" }
      });
      setConversationId(conv.id);
      setMessages(conv.messages || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || !conversationId) return;
    setInput("");
    setLoading(true);
    try {
      const conversation = await base44.agents.getConversation(conversationId);
      await base44.agents.addMessage(conversation, { role: "user", content: text });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-foreground" style={{ animation: "fadeIn 0.4s ease" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <title>Events Assistant | Africa Web3 Institute</title>

      {/* Header */}
      <section style={{ backgroundColor: "#0B1437" }} className="relative overflow-hidden py-8">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#D4A017" }}>AWI Events Assistant</p>
          <h1 className="text-[1.75rem] lg:text-[2rem] font-bold text-white">Ask me about upcoming events</h1>
          <p className="text-sm text-white/70 mt-2">I can tell you about AWI events and register your interest</p>
        </div>
      </section>

      {/* Chat area */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden" style={{ minHeight: "calc(100vh - 340px)" }}>
          <div className="h-[500px] overflow-y-auto p-6">
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <MessageSquare className="w-10 h-10 mb-3 opacity-30" />
                <p className="text-sm font-medium">Starting conversation...</p>
              </div>
            )}
            {messages.length === 0 && loading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            )}
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {loading && messages.length > 0 && messages[messages.length - 1]?.role === "user" && (
              <div className="flex items-center gap-2 ml-1 mb-4">
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t border-border p-4 flex gap-3 bg-muted/30">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about events, workshops, or register your interest..."
              className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#D4A017" }}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
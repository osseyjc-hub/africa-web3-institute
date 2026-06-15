import React, { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { MessageSquare, Sparkles, Send, Loader2, X, Minimize2 } from "lucide-react";
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
    <div className="mt-1.5">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] ${getStatusColor()} bg-muted/40 hover:bg-muted/70 transition-colors`}
      >
        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "currentColor" }} />
        <span className="font-medium capitalize">{getStatusLabel()}</span>
      </button>
      {expanded && !hideDetails && (
        <div className="mt-1.5 ml-2 pl-2 border-l-2 border-muted space-y-1.5">
          {Object.keys(parsedArgs).length > 0 && (
            <div>
              <span className="font-semibold text-muted-foreground text-[10px]">Parameters:</span>
              <pre className="mt-0.5 text-[10px] bg-muted/50 p-1.5 rounded overflow-x-auto">{JSON.stringify(parsedArgs, null, 2)}</pre>
            </div>
          )}
          {parsedResult && (
            <div>
              <span className="font-semibold text-muted-foreground text-[10px]">Result:</span>
              <pre className="mt-0.5 text-[10px] bg-muted/50 p-1.5 rounded overflow-x-auto">{JSON.stringify(parsedResult, null, 2)}</pre>
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
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[85%]`}>
        {!isUser && (
          <div className="flex items-center gap-1.5 mb-0.5 ml-0.5">
            <Sparkles className="w-2.5 h-2.5 text-accent" />
            <span className="text-[0.625rem] font-semibold text-muted-foreground uppercase tracking-wider">Events Assistant</span>
          </div>
        )}
        {message.content && (
          <div className={`rounded-xl px-3 py-2 ${isUser ? "bg-secondary text-white rounded-br-md" : "bg-muted/80 text-foreground rounded-bl-md"}`}>
            {isUser ? (
              <p className="text-[0.8125rem] leading-relaxed whitespace-pre-wrap">{message.content}</p>
            ) : (
              <ReactMarkdown className="text-[0.8125rem] prose prose-sm prose-p:my-0.5 prose-ul:my-0.5 prose-li:my-0 max-w-none">{message.content}</ReactMarkdown>
            )}
          </div>
        )}
        {message.tool_calls?.map((tc, idx) => <FunctionDisplay key={idx} toolCall={tc} />)}
      </div>
    </div>
  );
};

export default function EventsAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open || conversationId) return;
    startConversation();
  }, [open]);

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
        metadata: { name: "Events Widget Chat", description: "Floating widget chat" }
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

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Floating bubble */}
      {!open && (
        <button
          onClick={handleToggle}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
          style={{ backgroundColor: "#D4A017" }}
          aria-label="Open Events Assistant"
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-2rem)] bg-white rounded-xl shadow-2xl border border-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border" style={{ backgroundColor: "#0B1437" }}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: "#D4A017" }} />
              <div>
                <h3 className="text-sm font-bold text-white">Events Assistant</h3>
                <p className="text-[0.625rem] text-white/60">Ask me about AWI events</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleToggle}
                className="w-7 h-7 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <MessageSquare className="w-8 h-8 mb-2 opacity-30" />
                <p className="text-xs font-medium">Starting conversation...</p>
              </div>
            )}
            {messages.length === 0 && loading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
              </div>
            )}
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {loading && messages.length > 0 && messages[messages.length - 1]?.role === "user" && (
              <div className="flex items-center gap-2 ml-1 mb-3">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-muted-foreground" />
                <span className="text-[0.6875rem] text-muted-foreground">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="border-t border-border p-3 flex gap-2 bg-muted/30">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about events..."
              className="flex-1 rounded-lg border border-border bg-white px-3 py-2 text-[0.8125rem] focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-[0.8125rem] font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#D4A017" }}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
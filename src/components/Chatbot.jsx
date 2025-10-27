import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpCircle, Bot, Loader2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function useLocalAssistant() {
  const [typing, setTyping] = useState(false);

  function generate(prompt) {
    setTyping(true);

    const response = (() => {
      const p = prompt.trim().toLowerCase();
      if (!p) return "How can I help today?";
      if (/hello|hi|hey/.test(p)) return "Hello! I'm your glassmorphic AI. What can I do for you?";
      if (/joke/.test(p)) return "Here's one: Why do programmers prefer dark mode? Because light attracts bugs.";
      if (/help|what can you do|features/.test(p)) {
        return "I can brainstorm ideas, draft messages, explain concepts, and guide you around this demo. Ask me about design, code, or anything!";
      }
      if (/weather/.test(p)) return "I can't fetch live weather here, but I can help you plan for any forecast.";
      if (/name/.test(p)) return "I'm GlassChat — sleek, friendly, and here to assist.";
      return (
        "Here’s a thoughtful take: " +
        "I analyzed your message and can help break it into steps, compare options, or draft content. " +
        "Tell me the goal and any constraints, and I’ll propose a plan."
      );
    })();

    return new Promise((resolve) => {
      setTimeout(() => {
        setTyping(false);
        resolve(response);
      }, 700 + Math.min(1800, Math.max(300, prompt.length * 20)));
    });
  }

  return { generate, typing };
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-white">
          <Bot className="h-5 w-5" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl border backdrop-blur px-4 py-3 text-sm leading-relaxed shadow-lg ${
          isUser
            ? "border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 text-white"
            : "border-white/10 bg-white/10 text-white"
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-white">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}

function InputBar({ onSend, disabled }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    onSend(v);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask me anything..."
        className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={disabled || value.trim().length === 0}
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-fuchsia-500/80 to-violet-500/80 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition enabled:hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Send message"
      >
        <ArrowUpCircle className="h-5 w-5 transition-transform group-active:translate-y-px" />
        Send
      </button>
    </form>
  );
}

export default function Chatbot() {
  const { generate, typing } = useLocalAssistant();
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m GlassChat. Ask me anything and enjoy the glassy vibes." },
  ]);
  const containerRef = useRef(null);

  const canSend = useMemo(() => !typing, [typing]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  async function handleSend(text) {
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    const reply = await generate(text);
    setMessages((m) => [...m, { role: "assistant", content: reply }]);
  }

  return (
    <section id="chat" className="relative z-10 mx-auto max-w-5xl px-4 pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold text-white">Your Assistant</h2>
          <p className="mt-2 text-sm text-white/70">Lightweight demo with local intelligence. Replace with your model server when ready.</p>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
          <div
            ref={containerRef}
            className="custom-scrollbar max-h-[50vh] min-h-[40vh] space-y-4 overflow-y-auto p-2 pr-1"
          >
            {messages.map((m, idx) => (
              <Message key={idx} role={m.role} content={m.content} />
            ))}
            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-4">
            <InputBar onSend={handleSend} disabled={!canSend} />
          </div>
        </div>
      </div>
    </section>
  );
}

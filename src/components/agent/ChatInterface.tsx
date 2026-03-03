"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function getTextContent(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text)
    .join("");
}

export default function ChatInterface() {
  const { messages, sendMessage, status, error } = useChat({
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        parts: [
          {
            type: "text" as const,
            text: "你好！我是 Ervin 的数字分身。你可以和我聊聊技术、阅读、生活，或者任何你感兴趣的话题。",
          },
        ],
      },
    ],
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput("");
    await sendMessage({ text });
  };

  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-cream-dark bg-cream shadow-sm">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-6">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            role={msg.role as "user" | "assistant"}
            content={getTextContent(msg.parts as Array<{ type: string; text?: string }>)}
          />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted">
            <Loader2 size={14} className="animate-spin" />
            思考中...
          </div>
        )}
        {error && (
          <p className="text-sm text-red-500">
            出了点问题，请稍后再试。
          </p>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-cream-dark p-4">
        <ChatInput
          input={input}
          handleInputChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

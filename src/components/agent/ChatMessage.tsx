import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-warm-brown text-cream" : "bg-cream-dark text-soft-gold"
        )}
      >
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-warm-brown text-cream"
            : "bg-cream-dark text-ink"
        )}
      >
        <div className="whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
}

import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: ChatInputProps) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        const form = e.currentTarget.form;
        if (form) form.requestSubmit();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea
        value={input}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        placeholder="说点什么..."
        rows={1}
        className="flex-1 resize-none rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-warm-brown focus:outline-none focus:ring-1 focus:ring-warm-brown"
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
          input.trim() && !isLoading
            ? "bg-warm-brown text-cream hover:bg-warm-brown-light"
            : "bg-cream-dark text-muted"
        )}
      >
        <Send size={18} />
      </button>
    </form>
  );
}

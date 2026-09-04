"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const trimmed = value.trim();

    if (!trimmed) return;

    onSend(trimmed);
    setValue("");
  };

  return (
    <div className="border-t border-border p-4">
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 bg-transparent outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <button
          onClick={handleSubmit}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-cyan-500 text-white
            transition-transform hover:scale-105
          "
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}
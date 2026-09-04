"use client";

import { Message } from "./types";

// import type { Message as ChatMessageType } from "./types";

// interface ChatMessageProps {
//   message: ChatMessageType;
// }

export default function ChatMessageComponent(message: Message) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm 
          ${isUser ? `bg-cyan-500 text-white` : `border border-border bg-card text-foreground`} `}
      >
        {message.content}
      </div>
    </div>
  );
}
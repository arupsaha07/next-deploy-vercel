"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import ChatWindow from "./ChatWindow";
import { Message } from "./types";
import { sendMessage } from "@/src/lib/chat/sendMessage";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "Hi 👋 I'm Arup Ask me about my projects, experience or services.",
        },
    ]);

    const handleSend = async (content: string) => {
        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content,
        };

        setMessages((prev) => [...prev, userMessage]);

        const data = await sendMessage(content);

        const assistantMessage: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: data.reply,
        };

        setMessages((prev) => [...prev, assistantMessage]);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <ChatWindow onClose={() => setIsOpen(false)} messages={messages} onSend={handleSend} />
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-cyan-500
          text-white
          shadow-lg shadow-cyan-500/30
          transition-all duration-300
          hover:scale-105
        "
            >
                {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </button>
        </>
    );
}
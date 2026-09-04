"use client";

import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessageComponent from "./ChatMessageComponent";
import type { ChatWindowProps } from "./types";
import QuickActions from "./QuickActions";
import ChatInput from "./ChatInput";



export default function ChatWindow({
    messages, onSend
}: ChatWindowProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="
        fixed bottom-24 right-6 z-50
        h-[620px] w-[380px]
        rounded-3xl
        border-border
        bg-white/90 dark:bg-slate-950/90 
        backdrop-blur-xl
        shadow-2xl
      "
        >
            <div className="flex h-full flex-col">
                <ChatHeader />

                <div className="flex-1 p-5">
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <ChatMessageComponent
                                key={message.id}
                                id={message.id}
                                role={message.role}
                                content={message.content}
                            />
                        ))}
                    </div>
                </div>

                <QuickActions onSelect={(value) => console.log(value)} />

                <ChatInput onSend={onSend} />
            </div>
        </motion.div>
    );
}
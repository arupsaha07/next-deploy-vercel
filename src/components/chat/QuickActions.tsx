"use client";

import { QuickActionsProps } from "./types";

const actions = [
  "Show React Projects",
  "Tell me about Brahmos",
  "What services do you offer?",
  "Hire Arup",
];

export default function QuickActions({ onSelect}: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={action}
          onClick={() => onSelect(action)}
          className="
            rounded-full
            border border-border
            bg-card
            px-4 py-2
            text-sm
            transition-colors
            hover:bg-accent
          "
        >
          {action}
        </button>
      ))}
    </div>
  );
}
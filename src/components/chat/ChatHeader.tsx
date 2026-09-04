"use client";

export default function ChatHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 p-5">
      {/* Avatar */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-semibold text-white">
        AS

        {/* Online indicator */}
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-500" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          Arup AI
        </h3>

        <p className="text-sm text-slate-400">
          Frontend Engineer • Online
        </p>
      </div>
    </div>
  );
}
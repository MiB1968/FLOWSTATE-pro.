export default function Sidebar() {
  return (
    <nav className="h-full border-r border-cyan-500/10 bg-[#020817]/40 backdrop-blur-md flex flex-col p-4 gap-3">
      <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2 px-2">Mission Control</div>
      <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded">
        <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">04. Neural Flow Engine</div>
        <div className="text-[9px] text-cyan-600 mt-1 uppercase tracking-tighter">Status: Active</div>
      </div>
      <div className="p-3 hover:bg-cyan-500/5 rounded border border-transparent hover:border-cyan-500/10 transition-all opacity-60">
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">05. Adaptive Guardian</div>
      </div>
      <div className="p-3 hover:bg-cyan-500/5 rounded border border-transparent hover:border-cyan-500/10 transition-all opacity-60">
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">06. SonicFlow Audio</div>
      </div>
      <div className="p-3 hover:bg-cyan-500/5 rounded border border-transparent hover:border-cyan-500/10 transition-all opacity-60">
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">07. Market Opportunity</div>
      </div>
      <div className="p-3 hover:bg-cyan-500/5 rounded border border-transparent hover:border-cyan-500/10 transition-all opacity-60">
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">08. Business Model</div>
      </div>
      <div className="mt-auto p-4 bg-cyan-950/20 rounded border border-cyan-500/10 hidden md:block">
        <p className="text-[10px] text-cyan-400/70 leading-relaxed uppercase tracking-tight font-mono">
          "Cognitive sovereignty verified // Deployment authorized."
        </p>
      </div>
    </nav>
  );
}

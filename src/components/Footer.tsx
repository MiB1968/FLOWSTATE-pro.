export default function Footer() {
  return (
    <footer className="h-auto sm:h-20 bg-[#020817] border-t border-cyan-500/10 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 sm:gap-12 flex-wrap justify-center">
        <div>
          <div className="text-[8px] sm:text-[9px] text-cyan-600 uppercase font-bold tracking-[0.2em] mb-0.5">Project Intelligence</div>
          <div className="text-xs sm:text-sm text-slate-300 font-bold uppercase tracking-tight">Sarah Chen</div>
        </div>
        <div>
          <div className="text-[8px] sm:text-[9px] text-cyan-600 uppercase font-bold tracking-[0.2em] mb-0.5">Tactical Architecture</div>
          <div className="text-xs sm:text-sm text-slate-300 font-bold uppercase tracking-tight">Marcus Thorne</div>
        </div>
        <div>
          <div className="text-[8px] sm:text-[9px] text-cyan-600 uppercase font-bold tracking-[0.2em] mb-0.5">Strategic UX</div>
          <div className="text-xs sm:text-sm text-slate-300 font-bold uppercase tracking-tight">Elena Rossi</div>
        </div>
      </div>
      <div className="text-center sm:text-right px-4 py-2 border border-cyan-500/20 bg-cyan-500/5 rounded">
        <div className="text-[9px] text-cyan-600 uppercase font-bold tracking-widest mb-0.5">Unit Identifier</div>
        <div className="text-sm font-black text-cyan-400 tracking-[0.3em]">GROUP_07</div>
      </div>
    </footer>
  );
}

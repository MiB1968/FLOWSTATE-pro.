import { Activity, Menu } from 'lucide-react';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-cyan-500/20 bg-[#020817]/80 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="md:hidden text-cyan-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        <div className="w-8 h-8 rounded-lg border border-cyan-400/50 bg-cyan-400/10 flex items-center justify-center">
          <div className="w-4 h-4 bg-cyan-400 blur-[2px] rounded-sm"></div>
        </div>
        <span className="text-xl font-bold tracking-wider text-white uppercase italic">FlowState</span>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden sm:block px-3 py-1 bg-cyan-950/30 rounded border border-cyan-400/30">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Tactical Grid v0.4</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          <span className="hidden sm:block text-[10px] font-bold text-cyan-400/70 uppercase tracking-widest">System Online</span>
        </div>
      </div>
    </header>
  );
}

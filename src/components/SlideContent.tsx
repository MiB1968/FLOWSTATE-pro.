import { Brain, Zap, Shield, Activity } from 'lucide-react';

export default function SlideContent() {
  return (
    <section className="flex-1 relative bg-[#020817]/20 flex flex-col p-6 sm:p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#083344_0%,transparent_70%)] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 sm:mb-8 border-l-2 border-cyan-500 pl-6">
          <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1">Module // Focus Engine</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-2 leading-none uppercase italic">Neural <span className="text-cyan-400">Flow</span></h1>
          <p className="text-sm sm:text-base text-slate-500 font-mono tracking-widest uppercase font-bold">The Core Processing Logic of FlowState OS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 flex-1">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-4 group">
              <div className="shrink-0 w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex-1 border-b border-white/5 pb-4">
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest mb-1">Local Intelligence [Encrypted]</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-mono">On-device neural network processing for absolute data sovereignty. No cloud leakage.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="shrink-0 w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1 border-b border-white/5 pb-4">
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest mb-1">Burnout Prediction Sync</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-mono">Biometric feedback tracking via gaze & cadence. Proactive fatigue mitigation cycles.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="shrink-0 w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1 border-b border-white/5 pb-4">
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest mb-1">Adaptive Firewall v4</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-mono">Intelligent distraction suppression that scales with cognitive throughput intensity.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#020817]/60 rounded border border-cyan-400/20 p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden flex flex-col border-t-4 border-t-cyan-500/50">
             <div className="absolute top-0 right-0 p-2 opacity-20">
               <div className="w-20 h-20 text-cyan-500"><Activity className="w-full h-full" /></div>
             </div>
             <div className="flex justify-between items-center mb-4 sm:mb-6">
               <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">Real-time Telemetry</span>
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
                 <div className="w-1.5 h-1.5 rounded bg-slate-800"></div>
                 <div className="w-1.5 h-1.5 rounded bg-slate-800"></div>
               </div>
             </div>
             <div className="space-y-4 flex-1 flex flex-col">
               <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
               </div>
               <div className="flex justify-between text-[10px] text-cyan-400/70 font-mono font-bold tracking-tighter">
                 <span>COGNITIVE_LOAD // 82%</span>
                 <span>FLOW_DEPTH // 9.4</span>
               </div>
               <div className="aspect-video bg-black/60 rounded border border-cyan-500/20 flex flex-col items-center justify-center relative group overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#22d3ee_0%,transparent_70%)] group-hover:opacity-20 transition-opacity"></div>
                 <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
                   <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping"></div>
                   <div className="absolute inset-2 rounded-full border border-cyan-400/50"></div>
                   <div className="absolute inset-4 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                     <Zap className="w-6 h-6 text-cyan-400" />
                   </div>
                 </div>
                 <div className="mt-4 text-[10px] font-bold text-cyan-400 animate-pulse tracking-[0.2em] font-mono">PROCESSING_STREAM...</div>
               </div>
               <div className="p-3 bg-cyan-500/5 rounded border border-cyan-500/20 mt-auto">
                <div className="text-[9px] font-bold text-cyan-600 uppercase mb-1 font-mono tracking-widest">{"\u003e\u003e"} GUARDIAN_CMD</div>
                 <p className="text-[10px] sm:text-[11px] text-cyan-300 leading-tight italic font-mono">"Adaptive shield deployed. Recovery cycle scheduled in +14:00."</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

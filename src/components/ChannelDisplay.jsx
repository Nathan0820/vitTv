export default function ChannelDisplay({ currentChannel, isOn }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className={`flex items-center gap-3 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] px-5 py-3 rounded-xl border-2 border-[#2a2a2a] shadow-[inset_0_3px_8px_rgba(0,0,0,0.6),0_4px_12px_rgba(0,0,0,0.4)] min-w-[120px] relative overflow-hidden transition-opacity duration-300 ${
        isOn ? 'shadow-[0_0_20px_rgba(0,255,0,0.2)]' : 'opacity-50'
      }`}>
        {/* Glowing background effect - only when on */}
        {isOn && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]"></div>
        )}
        <div className="text-xs text-[#888] font-bold tracking-[0.15em] relative z-10">CH</div>
        <div className={`text-3xl font-bold font-mono min-w-[45px] text-center relative z-10 leading-none transition-all duration-300 text-[#00ff00] ${
          isOn 
            ? 'drop-shadow-[0_0_15px_rgba(0,255,0,0.8),0_0_30px_rgba(0,255,0,0.4)] animate-glow' 
            : 'opacity-30'
        }`}>
          {currentChannel}
        </div>
      </div>
    </div>
  )
}


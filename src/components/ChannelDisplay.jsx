export default function ChannelDisplay({ currentChannel, isOn }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className={`flex items-center gap-3 bg-[#1a0a0a] px-5 py-3 rounded border-2 border-[#2a1515] shadow-[inset_0_4px_15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(80,0,0,0.3)] min-w-[120px] relative overflow-hidden transition-opacity duration-300 ${
        isOn ? 'shadow-[0_0_20px_rgba(255,60,60,0.4),inset_0_0_20px_rgba(255,40,40,0.08)]' : 'opacity-50'
      }`}>
        {/* Red LED glow - VCR style */}
        {isOn && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,60,60,0.15),transparent_70%)]"></div>
        )}
        <div className="text-[10px] text-[#664444] font-bold tracking-[0.25em] relative z-10">CH</div>
        <div className={`text-4xl md:text-5xl min-w-[50px] text-center relative z-10 leading-none transition-all duration-300 text-[#ff3333] font-channel-display ${
          isOn 
            ? 'drop-shadow-[0_0_18px_rgba(255,60,60,0.95),0_0_35px_rgba(255,60,60,0.55)] animate-glow' 
            : 'opacity-30'
        }`}>
          {currentChannel}
        </div>
      </div>
    </div>
  )
}


export default function PowerButton({ isOn, onToggle }) {
  return (
    <button 
      className="flex flex-col items-center gap-1.5 px-5 py-3 bg-gradient-to-br from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a] border-[3px] border-[#555] rounded-xl cursor-pointer transition-all duration-300 shadow-[0_6px_15px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.15)] min-w-[90px] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_3px_8px_rgba(255,255,255,0.25)] group relative overflow-hidden" 
      onClick={onToggle}
    >
      {/* Power button glow effect */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${isOn ? 'rgba(255,107,107,0.2)' : 'rgba(100,100,100,0.1)'},transparent_70%)] transition-opacity duration-300`}></div>
      <span className={`text-2xl leading-none relative z-10 transition-colors duration-300 ${isOn ? 'text-[#ff6b6b] drop-shadow-[0_0_10px_rgba(255,107,107,0.8)]' : 'text-white'}`}>{isOn ? '●' : '○'}</span>
      <span className="text-[10px] text-[#aaa] font-bold tracking-[0.15em] relative z-10">POWER</span>
    </button>
  )
}


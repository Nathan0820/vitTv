export default function PowerButton({ isOn, onToggle }) {
  return (
    <button 
      className="flex flex-col items-center gap-1.5 px-5 py-3 bg-gradient-to-br from-[#3a3a3e] via-[#2a2a2e] to-[#1a1a1e] border-2 border-[#5a5a60] rounded-lg cursor-pointer transition-all duration-300 shadow-[0_6px_15px_rgba(0,0,0,0.6),inset_0_2px_6px_rgba(255,255,255,0.05)] min-w-[90px] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_3px_8px_rgba(255,255,255,0.08)] group relative overflow-hidden" 
      onClick={onToggle}
    >
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${isOn ? 'rgba(255,60,60,0.25)' : 'rgba(100,100,110,0.1)'},transparent_70%)] transition-opacity duration-300`}></div>
      <span className={`text-2xl leading-none relative z-10 transition-colors duration-300 ${isOn ? 'text-[#ff4040] drop-shadow-[0_0_15px_rgba(255,60,60,0.9)]' : 'text-[#6a6a70]'}`}>{isOn ? '●' : '○'}</span>
      <span className="text-[10px] text-[#8a8a90] font-bold tracking-[0.2em] relative z-10">POWER</span>
    </button>
  )
}


export default function TVKnob({ label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 pb-[5px]">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a0a0a8] via-[#707078] to-[#505058] border-2 border-[#404048] shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_3px_10px_rgba(0,0,0,0.5)] relative">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-[#2a2a2e] rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div>
      </div>
      <span className="text-[9px] text-[#7a7a82] font-bold tracking-widest">{label}</span>
    </div>
  )
}


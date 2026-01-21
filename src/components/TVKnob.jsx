export default function TVKnob({ label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 pb-[5px]">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] border-2 border-[#555] shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] relative">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-[#888] rounded-full"></div>
      </div>
      <span className="text-[9px] text-[#666] font-bold tracking-wider">{label}</span>
    </div>
  )
}


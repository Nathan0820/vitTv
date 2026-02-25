export default function TVBrand() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6 mb-1 relative z-[1]">
      <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#505058]"></div>
      <div className="text-center">
        <div className="font-display-80s text-sm md:text-base font-bold tracking-[0.5em] relative">
          <span className="relative z-10 bg-gradient-to-r from-[#8a8a92] via-[#c0c0c8] to-[#8a8a92] bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            vitTV
          </span>
        </div>
      </div>
      <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#505058]"></div>
    </div>
  )
}


export default function ChannelButtons({ videos, currentChannel, isOn, onChannelChange }) {
  return (
    <div className="flex gap-2.5 flex-wrap justify-center my-10">
      {videos.map((video) => {
        const isActive = currentChannel === video.id && isOn
        return (
          <button
            key={video.id}
            disabled={!isOn}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] text-base md:text-lg font-bold text-white transition-all duration-300 font-mono relative p-4 ${
              isActive
                ? 'bg-gradient-to-br from-[#ff6b6b] via-[#ff5252] to-[#ee5a52] border-[#ff3333] shadow-[0_0_25px_rgba(255,107,107,0.8),0_6px_15px_rgba(0,0,0,0.4),inset_0_3px_8px_rgba(255,255,255,0.3)] animate-pulse-custom cursor-pointer' 
                : 'bg-gradient-to-br from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a] border-[#555] shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.15)] cursor-pointer'
            } ${!isOn ? 'cursor-not-allowed opacity-30' : ''}`}
            onClick={() => isOn && onChannelChange(video.id)}
          >
            <span className="relative z-10">{video.id}</span>
            {/* Button inner glow - only when active and on */}
            {isActive && (
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]"></div>
            )}
          </button>
        )
      })}
    </div>
  )
}


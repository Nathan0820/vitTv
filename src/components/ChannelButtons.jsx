const CHANNEL_STYLES = {
  1: { inactive: 'bg-gradient-to-br from-red-600 to-red-800 border-red-500 text-white', active: 'bg-gradient-to-br from-red-500 to-red-600 border-red-400 text-white' },
  2: { inactive: 'bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500 text-white', active: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 text-white' },
  3: { inactive: 'bg-gradient-to-br from-emerald-600 to-emerald-800 border-emerald-500 text-white', active: 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 text-white' },
  4: { inactive: 'bg-gradient-to-br from-amber-500 to-amber-700 border-amber-400 text-gray-900', active: 'bg-gradient-to-br from-amber-400 to-amber-600 border-amber-300 text-gray-900' },
  5: { inactive: 'bg-gradient-to-br from-violet-600 to-violet-800 border-violet-500 text-white', active: 'bg-gradient-to-br from-violet-500 to-violet-600 border-violet-400 text-white' },
  6: { inactive: 'bg-gradient-to-br from-cyan-600 to-cyan-800 border-cyan-500 text-white', active: 'bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-400 text-white' },
  7: { inactive: 'bg-gradient-to-br from-pink-600 to-pink-800 border-pink-500 text-white', active: 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white' },
  8: { inactive: 'bg-gradient-to-br from-orange-500 to-orange-700 border-orange-400 text-white', active: 'bg-gradient-to-br from-orange-400 to-orange-600 border-orange-300 text-white' },
}

export default function ChannelButtons({ videos, currentChannel, isOn, onChannelChange }) {
  return (
    <div className="flex gap-2.5 flex-wrap justify-center my-10">
      {videos.map((video) => {
        const isActive = currentChannel === video.id && isOn
        const style = CHANNEL_STYLES[video.id] || CHANNEL_STYLES[1]
        return (
          <button
            key={video.id}
            disabled={!isOn}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-lg border-2 text-base md:text-lg font-bold transition-all duration-300 relative p-4 font-display-80s ${
              isActive
                ? `${style.active} shadow-[0_0_15px_rgba(0,255,255,0.5),0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_6px_rgba(255,255,255,0.2)] animate-pulse-custom cursor-pointer`
                : `${style.inactive} shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_2px_6px_rgba(255,255,255,0.1)] cursor-pointer opacity-90`
            } ${!isOn ? 'cursor-not-allowed opacity-40 grayscale' : ''}`}
            onClick={() => isOn && onChannelChange(video.id)}
          >
            <span className="relative z-10">{video.id}</span>
            {isActive && (
              <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none"></div>
            )}
          </button>
        )
      })}
    </div>
  )
}


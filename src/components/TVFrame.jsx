import TVScreen from './TVScreen'
import TVControls from './TVControls'

export default function TVFrame({ isOn, isSwitching, videoId, videoTitle, videos, currentChannel, onChannelChange, onPowerToggle }) {
  return (
    <div className="relative">
      {/* Room glow - large diffused light cast onto the wall behind the TV */}
      {/* Room glow - large diffused light cast onto the wall behind the TV */}
      <div
        className="absolute -inset-28 md:-inset-44 rounded-full pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isOn ? 1 : 0,
          background: 'radial-gradient(ellipse at 50% 35%, rgba(100, 180, 220, 0.35) 0%, rgba(70, 140, 200, 0.18) 25%, rgba(50, 100, 160, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className={`relative bg-gradient-to-br from-[#2a2a2e] via-[#1a1a1e] to-[#121216] rounded-[16px] p-5 md:p-8 border-[4px] border-[#4a4a50] max-w-[900px] w-full tv-frame transition-shadow duration-700 ${
        isOn
          ? 'shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(180,190,200,0.2),inset_0_2px_8px_rgba(255,255,255,0.04),0_-20px_80px_rgba(100,180,220,0.2),0_0_120px_rgba(80,160,200,0.12),0_20px_80px_rgba(80,140,200,0.1)]'
          : 'shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(180,190,200,0.2),inset_0_2px_8px_rgba(255,255,255,0.04)]'
      }`}>
        <TVScreen isOn={isOn} isSwitching={isSwitching} videoId={videoId} videoTitle={videoTitle} />
      <TVControls 
        videos={videos}
        currentChannel={currentChannel}
        isOn={isOn}
        onChannelChange={onChannelChange}
        onPowerToggle={onPowerToggle}
      />
      </div>
    </div>
  )
}


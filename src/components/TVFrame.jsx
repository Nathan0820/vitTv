import TVScreen from './TVScreen'
import TVControls from './TVControls'

export default function TVFrame({ isOn, videoId, videoTitle, videos, currentChannel, onChannelChange, onPowerToggle }) {
  return (
    <div className="relative bg-gradient-to-br from-[#9d8568] via-[#7a6b58] to-[#5a4d3f] rounded-[25px] p-5 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_3px_15px_rgba(255,255,255,0.15),inset_0_-3px_15px_rgba(0,0,0,0.4)] border-[8px] border-[#4a3d2e] max-w-[900px] w-full tv-frame">
      <TVScreen isOn={isOn} videoId={videoId} videoTitle={videoTitle} />
      <TVControls 
        videos={videos}
        currentChannel={currentChannel}
        isOn={isOn}
        onChannelChange={onChannelChange}
        onPowerToggle={onPowerToggle}
      />
    </div>
  )
}


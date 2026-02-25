import TVScreen from './TVScreen'
import TVControls from './TVControls'

export default function TVFrame({ isOn, videoId, videoTitle, videos, currentChannel, onChannelChange, onPowerToggle }) {
  return (
    <div className="relative bg-gradient-to-br from-[#2a2a2e] via-[#1a1a1e] to-[#121216] rounded-[16px] p-5 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(180,190,200,0.2),inset_0_2px_8px_rgba(255,255,255,0.04)] border-[4px] border-[#4a4a50] max-w-[900px] w-full tv-frame">
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


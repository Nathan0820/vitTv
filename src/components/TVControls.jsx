import ChannelDisplay from './ChannelDisplay'
import ChannelButtons from './ChannelButtons'
import PowerButton from './PowerButton'
import TVKnob from './TVKnob'

export default function TVControls({ videos, currentChannel, isOn, onChannelChange, onPowerToggle }) {
  return (
    <div className="relative z-[1]">
      <ChannelDisplay currentChannel={currentChannel} isOn={isOn} />
      <ChannelButtons 
        videos={videos} 
        currentChannel={currentChannel}
        isOn={isOn}
        onChannelChange={onChannelChange} 
      />
      
      {/* Power Button and Controls Row */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <TVKnob label="VOL" />
        <PowerButton isOn={isOn} onToggle={onPowerToggle} />
        <TVKnob label="BRT" />
      </div>
    </div>
  )
}


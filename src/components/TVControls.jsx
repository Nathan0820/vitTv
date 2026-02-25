import ChannelDisplay from './ChannelDisplay'
import ChannelButtons from './ChannelButtons'
import PowerButton from './PowerButton'
import TVBrand from './TVBrand'

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
      
      <div className="flex items-center justify-center mt-4">
        <PowerButton isOn={isOn} onToggle={onPowerToggle} />
      </div>

      <TVBrand />
    </div>
  )
}


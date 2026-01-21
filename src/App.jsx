import { useState } from 'react'
import './App.css'
import BackgroundEffects from './components/BackgroundEffects'
import TVFrame from './components/TVFrame'

const videos = [
  { id: 1, title: 'Channel 1', videoId: 'tgoUa2wWvAQ' },
  { id: 2, title: 'Channel 2', videoId: '4xj7QQ7VKtw' },
  { id: 3, title: 'Channel 3', videoId: 'l9kPJrpMsIk' },
  { id: 4, title: 'Channel 4', videoId: 'WaOdnWFH_GU' },
  { id: 5, title: 'Channel 5', videoId: '4q30XrLNkKw' },
  { id: 6, title: 'Channel 6', videoId: '9XQN_0eEFMU' },
  { id: 7, title: 'Channel 7', videoId: 'QAPtRER6YGw' },
  { id: 8, title: 'Channel 8', videoId: 'NAWOdnuDBBU' },
]

function App() {
  const [currentChannel, setCurrentChannel] = useState(1)
  const [isOn, setIsOn] = useState(false)

  // Get the current video ID
  const currentVideo = videos.find(v => v.id === currentChannel)
  const videoId = currentVideo?.videoId || ''

  const handleChannelChange = (channelId) => {
    setCurrentChannel(channelId)
  }

  const togglePower = () => {
    setIsOn(!isOn)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] via-[#16213e] to-[#0f172a] p-4 md:p-8 font-mono relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="perspective-800 w-full max-w-[700px] relative z-10">
        <TVFrame
          isOn={isOn}
          videoId={videoId}
          videoTitle={currentVideo?.title}
          videos={videos}
          currentChannel={currentChannel}
          onChannelChange={handleChannelChange}
          onPowerToggle={togglePower}
        />
      </div>
    </div>
  )
}

export default App

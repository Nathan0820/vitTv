import { useState } from 'react'
import './App.css'
import BackgroundEffects from './components/BackgroundEffects'
import TVFrame from './components/TVFrame'

const videos = [
  { id: 1, title: 'CH 1', videoId: 'tgoUa2wWvAQ' },
  { id: 2, title: 'CH 2', videoId: '4xj7QQ7VKtw' },
  { id: 3, title: 'CH 3', videoId: 'l9kPJrpMsIk' },
  { id: 4, title: 'CH 4', videoId: 'WaOdnWFH_GU' },
  { id: 5, title: 'CH 5', videoId: '4q30XrLNkKw' },
  { id: 6, title: 'CH 6', videoId: '9XQN_0eEFMU' },
  { id: 7, title: 'CH 7', videoId: 'QAPtRER6YGw' },
  { id: 8, title: 'CH 8', videoId: 'NAWOdnuDBBU' },
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden era-80s-room">
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

import { useState, useEffect, useRef } from 'react'
import { getYouTubeEmbedUrl } from '../utils/youtube'

export default function TVScreen({ isOn, isSwitching, videoId, videoTitle }) {
  const [showChannelTitle, setShowChannelTitle] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [flickerOpacity, setFlickerOpacity] = useState(1)
  const flickerTimerRef = useRef(null)

  useEffect(() => {
    if (isOn && videoId && !isSwitching) {
      setFlickerOpacity(0.88)
      flickerTimerRef.current = setTimeout(() => setFlickerOpacity(0.94), 50)
      const restore = setTimeout(() => setFlickerOpacity(1), 120)
      return () => {
        clearTimeout(flickerTimerRef.current)
        clearTimeout(restore)
      }
    }
    if (!isOn) setFlickerOpacity(1)
  }, [isOn, videoId, isSwitching])

  useEffect(() => {
    if (isOn && videoTitle) {
      setShowChannelTitle(true)
      setIsFadingOut(false)
      const fadeTimer = setTimeout(() => setIsFadingOut(true), 1800)
      const hideTimer = setTimeout(() => setShowChannelTitle(false), 2000)
      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    } else {
      setShowChannelTitle(false)
    }
  }, [isOn, videoTitle])

  return (
    <div className="relative mb-5">
      {/* Screen outer frame - 80s black bezel with silver trim */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg p-3 shadow-[inset_0_4px_20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(100,110,120,0.3)] border-2 border-[#3a3a3e]">
        {/* Screen inner frame - CRT with scanlines */}
        <div className="relative bg-black rounded crt-screen p-2.5 shadow-[inset_0_0_50px_rgba(0,0,0,0.95)] border-[1px] border-[#252528] aspect-[4/3] overflow-hidden scanlines" style={{ opacity: flickerOpacity, transition: 'opacity 0.05s' }}>
          {/* Subtle CRT glow when on */}
          {isOn && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,200,255,0.05)] pointer-events-none z-10"></div>
          )}
          
          {/* Channel title overlay - top right, disappears after 2s */}
          {showChannelTitle && videoTitle && (
            <div className={`absolute top-4 right-5 pointer-events-none z-20 transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-2xl md:text-4xl tracking-widest channel-title bg-black/70 px-4 py-2 rounded-sm">
                {(() => {
                  const parts = videoTitle.match(/^(\D+?)(\d+.*)$/)
                  if (parts) {
                    return (
                      <>
                        <span className="text-[#00ff66]">{parts[1]}</span>
                        <span className="text-[#ff3333] font-bold">{parts[2]}</span>
                      </>
                    )
                  }
                  return <span className="text-[#ff3333] font-bold">{videoTitle}</span>
                })()}
              </span>
            </div>
          )}
          
          {isSwitching ? (
            <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 static-lines"></div>
              <div className="absolute inset-0 static-noise opacity-60"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>
            </div>
          ) : isOn && videoId ? (
            <iframe
              src={getYouTubeEmbedUrl(videoId)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 block relative z-0 scale-135"
              title={videoTitle || 'Vintage Video'}
            />
          ) : isOn ? (
            <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-4xl md:text-6xl font-bold text-[#ff5050] drop-shadow-[0_0_20px_rgba(255,80,80,0.9),0_0_40px_rgba(255,80,80,0.5)] z-[2] animate-flicker tracking-[0.3em] font-display-80s">NO SIGNAL</div>
                <div className="absolute top-0 left-0 w-full h-full static-lines"></div>
                {/* Additional static noise */}
                <div className="absolute inset-0 static-noise opacity-30"></div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-black"></div>
          )}
        </div>
      </div>
    </div>
  )
}


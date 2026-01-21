import { getYouTubeEmbedUrl } from '../utils/youtube'

export default function TVScreen({ isOn, videoId, videoTitle }) {
  return (
    <div className="relative mb-5">
      {/* Screen outer frame */}
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-2.5 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_4px_15px_rgba(0,0,0,0.5)] border-3 border-[#1a1a1a]">
        {/* Screen inner frame with glow */}
        <div className="relative bg-black rounded-lg p-2.5 shadow-[inset_0_0_40px_rgba(0,0,0,0.9),0_0_30px_rgba(0,0,0,0.6)] border-[3px] border-[#0a0a0a] aspect-[4/3] overflow-hidden">
          {/* Screen glow effect when on */}
          {isOn && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,255,0,0.03)] pointer-events-none z-10"></div>
          )}
          
          {isOn && videoId ? (
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
                <div className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.3)] z-[2] animate-flicker tracking-[0.3em] font-mono">NO SIGNAL</div>
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


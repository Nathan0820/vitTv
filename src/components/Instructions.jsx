export default function Instructions() {
  return (
    <div className="mt-8 p-6 bg-black/40 backdrop-blur-sm rounded-xl text-[#aaa] text-center max-w-[600px] border border-[#333]/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-10">
      <p className="my-2 leading-relaxed text-sm md:text-base">
        Add your YouTube video links in{' '}
        <code className="bg-black/60 px-2 py-1 rounded text-[#00ff00] font-mono text-xs md:text-sm shadow-[0_0_10px_rgba(0,255,0,0.3)]">
          src/App.jsx
        </code>{' '}
        in the videos array
      </p>
      <p className="my-2 leading-relaxed text-sm md:text-base">
        You can use full YouTube URLs or just the video ID
      </p>
    </div>
  )
}


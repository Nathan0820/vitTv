export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,150,255,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(180,0,255,0.05),transparent_45%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(0,255,200,0.04),transparent_40%)] pointer-events-none"></div>
    </>
  )
}


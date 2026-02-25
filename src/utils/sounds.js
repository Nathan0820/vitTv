let audioCtx = null

function getContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  if (audioCtx.state === 'suspended') audioCtx.resume()
  return audioCtx
}

export function playPowerClick() {
  const ctx = getContext()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'square'
  osc.frequency.setValueAtTime(120, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.08)

  gain.gain.setValueAtTime(0.15, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)

  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.1)
}

export function playChannelSwitch() {
  const ctx = getContext()

  const noise = ctx.createBufferSource()
  const bufferSize = ctx.sampleRate * 0.06
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.3
  }
  noise.buffer = buffer

  const noiseGain = ctx.createGain()
  noiseGain.gain.setValueAtTime(0.12, ctx.currentTime)
  noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06)

  const click = ctx.createOscillator()
  const clickGain = ctx.createGain()
  click.type = 'square'
  click.frequency.setValueAtTime(800, ctx.currentTime)
  click.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.03)
  clickGain.gain.setValueAtTime(0.08, ctx.currentTime)
  clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)

  noise.connect(noiseGain)
  noiseGain.connect(ctx.destination)
  click.connect(clickGain)
  clickGain.connect(ctx.destination)

  noise.start(ctx.currentTime)
  click.start(ctx.currentTime)
  click.stop(ctx.currentTime + 0.04)
}

export function playStaticBurst() {
  const ctx = getContext()
  const bufferSize = ctx.sampleRate * 0.25
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.4
  }

  const source = ctx.createBufferSource()
  source.buffer = buffer

  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.1, ctx.currentTime)
  gain.gain.setValueAtTime(0.1, ctx.currentTime + 0.15)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)

  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 3000
  filter.Q.value = 0.5

  source.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  source.start(ctx.currentTime)
}

let humOsc = null
let humGain = null

export function startHum() {
  if (humOsc) return
  const ctx = getContext()

  humOsc = ctx.createOscillator()
  humGain = ctx.createGain()
  const filter = ctx.createBiquadFilter()

  humOsc.type = 'sawtooth'
  humOsc.frequency.value = 60
  humGain.gain.value = 0
  humGain.gain.linearRampToValueAtTime(0.018, ctx.currentTime + 0.5)

  filter.type = 'lowpass'
  filter.frequency.value = 180

  humOsc.connect(filter)
  filter.connect(humGain)
  humGain.connect(ctx.destination)
  humOsc.start()
}

export function stopHum() {
  if (!humOsc || !humGain) return
  const ctx = getContext()
  humGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3)
  const oscRef = humOsc
  setTimeout(() => {
    try { oscRef.stop() } catch {}
  }, 350)
  humOsc = null
  humGain = null
}

import { useMemo } from 'react'

interface OrbConfig {
  id: number
  top: string
  left: string
  size: number
  delay: string
  duration: string
  color: string
}

export function MagicalBackground() {
  const orbs = useMemo<OrbConfig[]>(() => {
    const configs: Omit<OrbConfig, 'id'>[] = [
      {
        top: '10%',
        left: '5%',
        size: 120,
        delay: '0s',
        duration: '18s',
        color: 'hsl(42 100% 55% / 0.15)',
      },
      {
        top: '60%',
        left: '15%',
        size: 80,
        delay: '2s',
        duration: '22s',
        color: 'hsl(330 80% 60% / 0.12)',
      },
      {
        top: '20%',
        left: '80%',
        size: 150,
        delay: '1s',
        duration: '20s',
        color: 'hsl(280 70% 55% / 0.10)',
      },
      {
        top: '75%',
        left: '70%',
        size: 100,
        delay: '3s',
        duration: '16s',
        color: 'hsl(190 80% 50% / 0.10)',
      },
      {
        top: '40%',
        left: '45%',
        size: 60,
        delay: '4s',
        duration: '25s',
        color: 'hsl(120 60% 50% / 0.08)',
      },
      {
        top: '85%',
        left: '35%',
        size: 90,
        delay: '1.5s',
        duration: '19s',
        color: 'hsl(42 100% 55% / 0.10)',
      },
      {
        top: '5%',
        left: '50%',
        size: 70,
        delay: '5s',
        duration: '23s',
        color: 'hsl(330 80% 60% / 0.08)',
      },
    ]
    return configs.map((c, i) => ({ ...c, id: i }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-magical-gradient" />
      <div className="absolute inset-0 bg-starfield opacity-40" />
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full animate-drift"
          style={{
            top: orb.top,
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent 70%)`,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  )
}

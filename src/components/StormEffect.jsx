import { useEffect, useState } from 'react'

export default function StormEffect() {
  const [rainDrops, setRainDrops] = useState([])

  useEffect(() => {
    const drops = []
    const numDrops = 100
    
    for (let i = 0; i < numDrops; i++) {
      drops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 0.5 + 0.5}s`,
        animationDelay: `${Math.random() * 2}s`,
        opacity: Math.random() * 0.3 + 0.3,
      })
    }
    setRainDrops(drops)
  }, [])

  return (
    <>
      {/* Rain Effect */}
      <div className="rain-container">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="rain"
            style={{
              left: drop.left,
              animationDuration: drop.animationDuration,
              animationDelay: drop.animationDelay,
              opacity: drop.opacity,
            }}
          />
        ))}
      </div>

      {/* Lightning Effect */}
      <div className="lightning" />

      {/* Simple Particles */}
      <div className="fixed inset-0 pointer-events-none z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}

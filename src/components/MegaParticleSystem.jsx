import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MegaParticleSystem() {
  const [particles, setParticles] = useState([])
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate MASSIVE particle system
    const parts = []
    for (let i = 0; i < 100; i++) {
      parts.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }
    setParticles(parts)

    // Generate twinkling stars
    const starArray = []
    for (let i = 0; i < 50; i++) {
      starArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        delay: Math.random() * 3,
      })
    }
    setStars(starArray)
  }, [])

  return (
    <>
      {/* Mega particle system */}
      <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={`mega-particle-${particle.id}`}
            className="absolute particle"
            style={{
              left: particle.left,
              bottom: '0',
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [-200, -window.innerHeight - 200],
              x: [0, Math.random() * 200 - 100],
              scale: [0, 1, 1.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Twinkling stars background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated wave lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="fixed pointer-events-none z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-16 h-16 border-2 border-blue-500/20 rounded-lg" />
          ) : i % 3 === 1 ? (
            <div className="w-16 h-16 border-2 border-purple-500/20 rounded-full" />
          ) : (
            <div className="w-16 h-16 border-2 border-cyan-500/20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          )}
        </motion.div>
      ))}

      {/* Ripple effects from center */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="fixed top-1/2 left-1/2 border-2 border-blue-500/20 rounded-full pointer-events-none"
          style={{
            width: '100px',
            height: '100px',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
          animate={{
            scale: [0, 8],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 6,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  )
}

import { motion } from 'framer-motion'

export default function AnimatedBackground({ variant = 'default' }) {
  const variants = {
    default: {
      orbs: [
        { size: 'w-96 h-96', color: 'bg-ocean-300/40', position: 'top-[10%] left-[10%]', delay: 0 },
        { size: 'w-80 h-80', color: 'bg-accent-emerald/30', position: 'top-[60%] right-[15%]', delay: 2 },
        { size: 'w-64 h-64', color: 'bg-ocean-400/30', position: 'bottom-[10%] left-[45%]', delay: 4 },
      ]
    },
    ocean: {
      orbs: [
        { size: 'w-[500px] h-[500px]', color: 'bg-ocean-400/50', position: 'top-[5%] right-[5%]', delay: 0 },
        { size: 'w-96 h-96', color: 'bg-ocean-300/40', position: 'bottom-[10%] left-[10%]', delay: 2 },
        { size: 'w-72 h-72', color: 'bg-ocean-500/35', position: 'top-[50%] left-[40%]', delay: 3 },
      ]
    },
    crisis: {
      orbs: [
        { size: 'w-96 h-96', color: 'bg-crisis-400/40', position: 'top-[15%] right-[10%]', delay: 0 },
        { size: 'w-80 h-80', color: 'bg-crisis-300/30', position: 'bottom-[20%] left-[15%]', delay: 2 },
        { size: 'w-72 h-72', color: 'bg-accent-gold/25', position: 'top-[60%] right-[25%]', delay: 4 },
      ]
    },
    earth: {
      orbs: [
        { size: 'w-96 h-96', color: 'bg-earth-300/40', position: 'top-[10%] left-[5%]', delay: 0 },
        { size: 'w-80 h-80', color: 'bg-accent-emerald/30', position: 'bottom-[15%] right-[10%]', delay: 2 },
        { size: 'w-72 h-72', color: 'bg-earth-400/35', position: 'top-[55%] left-[50%]', delay: 3 },
      ]
    },
  }

  const selectedVariant = variants[variant] || variants.default

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0" 
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(6, 182, 212, 0.15) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(34, 211, 238, 0.15) 0px, transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating animated orbs */}
      {selectedVariant.orbs.map((orb, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4], 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full`}
          style={{
            filter: 'blur(80px)',
          }}
        />
      ))}

      {/* Subtle gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-50/50 to-earth-100/80" 
      />
    </div>
  )
}

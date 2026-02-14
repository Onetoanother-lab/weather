import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-50 via-ocean-50 to-earth-100">
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-full flex items-center justify-center"
        >
          <span className="text-4xl">🌍</span>
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-earth-600 font-medium"
        >
          Yuklanmoqda...
        </motion.p>
      </div>
    </div>
  )
}

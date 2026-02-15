import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-8xl mb-8">🌍</div>
        
        <p className="text-slate-300 font-medium text-xl mb-6">
          Yuklanmoqda...
        </p>
        
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

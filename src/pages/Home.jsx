import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-container pt-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-ocean-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-crisis-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title with dramatic entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="text-8xl md:text-9xl">🌍</span>
          </motion.div>

          <h1 className="section-title text-6xl md:text-7xl lg:text-8xl mb-8">
            Iqlim o'zgarishi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crisis-600 to-crisis-800">
              kimga qimmatga tushadi?
            </span>
          </h1>

          <p className="section-subtitle text-2xl md:text-3xl max-w-4xl mx-auto">
            Eng ko'p zarar ko'rayotgan davlatlar va nega bu{' '}
            <span className="font-bold text-crisis-600">adolatsiz?</span>
          </p>
        </motion.div>

        {/* Key Question Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-glass p-8"
          >
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-display font-bold mb-3 text-earth-900">
              Faktlar
            </h3>
            <p className="text-earth-600">
              Eng kam emissiya chiqaruvchi davlatlar eng ko'p zarar ko'rmoqda
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-glass p-8"
          >
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-xl font-display font-bold mb-3 text-earth-900">
              Adolat
            </h3>
            <p className="text-earth-600">
              Boy davlatlar ifloslantiradi, kambag'allar azob chekadi
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-glass p-8"
          >
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-display font-bold mb-3 text-earth-900">
              Yechim
            </h3>
            <p className="text-earth-600">
              Global hamkorlik va iqlim adolati zarur
            </p>
          </motion.div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="card-glass p-12 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-earth-900">
            Muammo nima?
          </h2>
          <div className="space-y-4 text-lg text-earth-700 text-left leading-relaxed">
            <p>
              <span className="font-bold text-ocean-700">Iqlim o'zgarishi</span> - bu bizning sayyoramizning o'rtacha harorati oshib borayotgan va ob-havo sharoitlari o'zgarayotgan jarayondir.
            </p>
            <p>
              Asosiy sabab: <span className="font-bold text-crisis-600">karbonat angidrid (CO₂)</span> va boshqa issiqxona gazlarining atmosferaga chiqarilishi.
            </p>
            <p>
              Lekin eng katta muammo shundaki: <span className="font-bold text-crisis-700">eng ko'p ifloslantiruvchi davlatlar eng kam zarar ko'rmoqda</span>, va aksincha.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link to="/tasir" className="btn-primary inline-block text-lg">
            Ta'sirni ko'rish →
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-16 text-earth-400 text-sm"
        >
          <div className="flex flex-col items-center gap-2">
            <span>Davom eting</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

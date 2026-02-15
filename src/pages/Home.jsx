import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-container pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Globe */}
          <div className="inline-block mb-12">
            <div className="text-[10rem] md:text-[14rem] lg:text-[16rem] filter drop-shadow-2xl">
              🌍
            </div>
          </div>

          {/* Main Title */}
          <h1 className="section-title mb-8">
            Iqlim o'zgarishi kimga
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              qimmatga tushadi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="section-subtitle text-center mx-auto">
            Eng ko'p zarar ko'rayotgan davlatlar va nega bu holat{' '}
            <span className="font-bold text-red-400">adolatsiz?</span>
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '📊',
              title: 'Faktlar',
              desc: 'Eng kam emissiya chiqaruvchi davlatlar eng kop zarar kormoqda',
            },
            {
              icon: '⚖️',
              title: 'Adolat',
              desc: 'Boy davlatlar ifloslantiradi, kambagallar azob chekadi',
            },
            {
              icon: '💡',
              title: 'Yechim',
              desc: 'Global hamkorlik va iqlim adolati zarur',
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="card-glass p-10 cursor-pointer"
            >
              <div className="text-7xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">
                {card.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="card-glass p-16 md:p-20 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Muammo nima?
          </h2>
          
          <div className="space-y-6 text-left text-lg leading-relaxed">
            <p className="text-slate-200">
              <span className="font-bold text-cyan-400">Iqlim o'zgarishi</span> - bu bizning sayyoramizning o'rtacha harorati oshib borayotgan va ob-havo sharoitlari o'zgarayotgan jarayondir.
            </p>
            
            <p className="text-slate-200">
              Asosiy sabab: <span className="font-bold text-orange-400">karbonat angidrid (CO₂)</span> va boshqa issiqxona gazlarining atmosferaga chiqarilishi.
            </p>
            
            <div className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-2xl">
              <p className="text-white font-semibold text-xl">
                Lekin eng katta muammo shundaki: <span className="text-red-400">eng ko'p ifloslantiruvchi davlatlar eng kam zarar ko'rmoqda</span>, va aksincha.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-20">
          <Link to="/tasir" className="btn-primary inline-flex items-center gap-3">
            <span>Ta'sirni ko'rish</span>
            <span>→</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="text-slate-500 text-sm">
          <div className="flex flex-col items-center gap-2">
            <span>Davom eting</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

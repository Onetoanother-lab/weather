import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard'

export default function Impact() {
  const impacts = [
    {
      country: 'Bangladesh 🇧🇩',
      icon: '🌊',
      stat: '70%',
      label: 'Suv ostida qolish xavfi',
      description: 'Dengiz sathi 1 metr ko\'tarilsa, Bangladeshning 70% hududi suv ostida qoladi.',
      color: 'ocean'
    },
    {
      country: 'Maldiv orollari 🇲🇻',
      icon: '🏝️',
      stat: '80%',
      label: 'Yo\'qolib ketish xavfi',
      description: '2100-yilga kelib orollarning 80% dengiz ostida qolishi mumkin.',
      color: 'crisis'
    },
    {
      country: 'Pakistan 🇵🇰',
      icon: '💧',
      stat: '33%',
      label: 'Suv toshqini qurbonlari',
      description: '2022-yil toshqinida aholining 1/3 qismi (33 million kishi) zarar ko\'rdi.',
      color: 'ocean'
    },
    {
      country: 'Afrika 🌍',
      icon: '🌾',
      stat: '30%',
      label: 'Qurg\'oqchilik',
      description: 'Afrikaning 30% dan ortig\'i haddan tashqari qurg\'oqchilikka duchor.',
      color: 'crisis'
    }
  ]

  return (
    <div className="page-container pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl md:text-7xl block mb-6">⚠️</span>
          <h1 className="section-title">
            Qaysi davlatlar eng ko'p
            <br />
            <span className="text-crisis-600">zarar ko'rmoqda?</span>
          </h1>
          <p className="section-subtitle">
            Iqlim o'zgarishi barcha mamlakatlarni bir xil darajada emas, balki eng zaif davlatlarni ko'proq zararlaydi
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.country}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card-glass p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl">{impact.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-earth-900 mb-2">
                    {impact.country}
                  </h3>
                  <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-3xl bg-gradient-to-r ${
                    impact.color === 'ocean' 
                      ? 'from-ocean-500 to-ocean-700' 
                      : 'from-crisis-500 to-crisis-700'
                  }`}>
                    {impact.stat}
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-earth-800 mb-3">
                {impact.label}
              </h4>
              
              <p className="text-earth-600 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-glass p-12 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-earth-900">
            Global ta'sir
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard
              number={3.6}
              decimals={1}
              suffix="°C"
              label="Harorat o'sishi"
              description="2100-yilga qadar kutilayotgan global harorat o'sishi"
              color="crisis"
              delay={0.2}
            />
            
            <StatCard
              number={280}
              suffix=" mln"
              label="Ko'chib ketuvchilar"
              description="2050-yilga kelib iqlim o'zgarishi tufayli ko'chib ketadigan odamlar soni"
              color="ocean"
              delay={0.4}
            />
            
            <StatCard
              number={143}
              suffix=" mlrd $"
              label="Iqtisodiy zarar"
              description="Yillik iqtisodiy zarar (rivojlanayotgan mamlakatlarga)"
              color="earth"
              delay={0.6}
            />
          </div>
        </motion.div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-crisis-100 to-crisis-200 rounded-3xl p-12 mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-8 text-crisis-900">
            Zaif davlatlar nima bilan kurashmoqda?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🌊', label: 'Toshqinlar', desc: 'Yillik' },
              { icon: '🌡️', label: 'Issiqlik to\'lqini', desc: 'Haddan tashqari' },
              { icon: '🏜️', label: 'Qurg\'oqchilik', desc: 'Uzoq muddatli' },
              { icon: '🌪️', label: 'Bo\'ronlar', desc: 'Kuchayib bormoqda' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="bg-white/80 rounded-2xl p-6"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg text-earth-900 mb-1">{item.label}</h4>
                <p className="text-sm text-earth-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-between items-center"
        >
          <Link to="/" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/adolatsizlik" className="btn-primary">
            Adolatsizlikni ko'rish →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

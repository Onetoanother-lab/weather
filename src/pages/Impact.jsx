import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Impact() {
  const impacts = [
    {
      country: 'Bangladesh 🇧🇩',
      icon: '🌊',
      stat: '70%',
      label: 'Suv ostida qolish xavfi',
      description: 'Dengiz sathi 1 metr ko\'tarilsa, Bangladeshning 70% hududi suv ostida qoladi.',
      color: 'from-ocean-500 to-ocean-700',
      bgColor: 'from-ocean-50 to-ocean-100'
    },
    {
      country: 'Maldiv orollari 🇲🇻',
      icon: '🏝️',
      stat: '80%',
      label: 'Yo\'qolib ketish xavfi',
      description: '2100-yilga kelib orollarning 80% dengiz ostida qolishi mumkin.',
      color: 'from-crisis-500 to-crisis-700',
      bgColor: 'from-crisis-50 to-crisis-100'
    },
    {
      country: 'Pakistan 🇵🇰',
      icon: '💧',
      stat: '33M',
      label: 'Suv toshqini qurbonlari',
      description: '2022-yil toshqinida 33 million kishi zarar ko\'rdi - aholining 1/3 qismi.',
      color: 'from-ocean-600 to-ocean-800',
      bgColor: 'from-ocean-50 to-ocean-100'
    },
    {
      country: 'Afrika 🌍',
      icon: '🌾',
      stat: '30%',
      label: 'Qurg\'oqchilik',
      description: 'Afrikaning 30% dan ortig\'i haddan tashqari qurg\'oqchilikka duchor.',
      color: 'from-accent-gold to-amber-600',
      bgColor: 'from-yellow-50 to-amber-100'
    }
  ]

  return (
    <div className="page-container">
      <AnimatedBackground variant="ocean" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dramatic header with animated warning icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
            }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <motion.span
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl md:text-9xl inline-block filter drop-shadow-2xl"
            >
              ⚠️
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title mb-6"
          >
            Qaysi davlatlar eng ko'p
            <br/>
            <span className="gradient-text-crisis">zarar ko'rmoqda?</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="section-subtitle text-center mx-auto"
          >
            Iqlim o'zgarishi barcha mamlakatlarni bir xil darajada emas, 
            <br className="hidden md:block" />
            balki <span className="font-bold text-crisis-600">eng zaif davlatlarni ko'proq</span> zararlaydi
          </motion.p>
        </motion.div>

        {/* Impact cards with dramatic staggered entrance */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.country}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 100,
                rotateX: 45,
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
                rotateY: 2,
              }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`card-premium p-10 bg-gradient-to-br ${impact.bgColor} preserve-3d overflow-hidden relative`}
            >
              {/* Animated background glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-20 blur-3xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <motion.span 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="text-7xl filter drop-shadow-lg"
                  >
                    {impact.icon}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-3xl font-display font-bold text-earth-900 mb-4">
                      {impact.country}
                    </h3>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-8 py-4 rounded-2xl text-white font-bold text-4xl md:text-5xl bg-gradient-to-r ${impact.color} shadow-glow`}
                    >
                      {impact.stat}
                    </motion.div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-earth-800 mb-4">
                  {impact.label}
                </h4>
                
                <p className="text-earth-600 leading-relaxed text-lg">
                  {impact.description}
                </p>

                {/* Decorative corner accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${impact.color} opacity-10 blur-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global impact stats with premium glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="card-glass p-14 mb-20 relative overflow-hidden"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-5"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #10b981, #06b6d4)',
              backgroundSize: '200% 200%',
            }}
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-14 text-earth-900 relative z-10"
          >
            Global ta'sir
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            <StatCard
              number={3.6}
              decimals={1}
              suffix="°C"
              label="Harorat o'sishi"
              description="2100-yilga qadar kutilayotgan global harorat o'sishi"
              color="crisis"
              delay={0.3}
            />
            
            <StatCard
              number={280}
              suffix=" mln"
              label="Ko'chib ketuvchilar"
              description="2050-yilga kelib iqlim o'zgarishi tufayli ko'chib ketadigan odamlar soni"
              color="ocean"
              delay={0.5}
            />
            
            <StatCard
              number={143}
              suffix=" mlrd $"
              label="Iqtisodiy zarar"
              description="Yillik iqtisodiy zarar (rivojlanayotgan mamlakatlarga)"
              color="earth"
              delay={0.7}
            />
          </div>
        </motion.div>

        {/* Disaster types grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-premium p-14 mb-16 bg-gradient-to-br from-crisis-50 to-crisis-100 relative overflow-hidden"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-display font-bold text-center mb-12 text-crisis-900"
          >
            Zaif davlatlar nima bilan kurashmoqda?
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🌊', label: 'Toshqinlar', desc: 'Yillik', color: 'from-ocean-400 to-ocean-600' },
              { icon: '🌡️', label: 'Issiqlik to\'lqini', desc: 'Haddan tashqari', color: 'from-crisis-400 to-crisis-600' },
              { icon: '🏜️', label: 'Qurg\'oqchilik', desc: 'Uzoq muddatli', color: 'from-amber-400 to-amber-600' },
              { icon: '🌪️', label: 'Bo\'ronlar', desc: 'Kuchayib bormoqda', color: 'from-violet-400 to-violet-600' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="card-glass p-8 text-center preserve-3d group"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="text-6xl mb-4 filter drop-shadow-lg"
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-bold text-xl text-earth-900 mb-2">{item.label}</h4>
                <p className="text-sm text-earth-600">{item.desc}</p>
                
                {/* Bottom gradient accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className={`h-1 w-full mt-5 rounded-full bg-gradient-to-r ${item.color}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-between items-center"
        >
          <Link to="/" className="btn-secondary group">
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              ←
            </motion.span>
            <span className="ml-2">Orqaga</span>
          </Link>
          <Link to="/adolatsizlik" className="btn-primary group">
            <span>Adolatsizlikni ko'rish</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

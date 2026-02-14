import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'

export default function Responsibility() {
  const actions = [
    {
      who: 'Boy davlatlar 💰',
      color: 'from-ocean-500 to-ocean-700',
      responsibilities: [
        'Emissiyani drastik qisqartirish (2030-yilga qadar 50%)',
        'Iqlim moliyasi: yillik $100 milliard zaif davlatlarga',
        'Texnologiya transferi: toza energiya texnologiyalarini ulashish',
        'Adaptatsiya yordami: infratuzilmani mustahkamlashga yordam'
      ]
    },
    {
      who: 'Rivojlanayotgan davlatlar 🌱',
      color: 'from-earth-500 to-earth-700',
      responsibilities: [
        'Toza energiya rivojlanishi (quyosh, shamol)',
        'O\'rmonlarni saqlash va qayta tiklash',
        'Barqaror qishloq xo\'jaligi',
        'Xalqaro kelishuvlarda ishtirok etish'
      ]
    },
    {
      who: 'Korporatsiyalar 🏭',
      color: 'from-crisis-500 to-crisis-700',
      responsibilities: [
        'Karbonni nolga tushirish rejalari',
        'Shaffof emissiya hisoboti',
        'Barqaror ishlab chiqarish usullari',
        'Zarar ko\'rgan hududlarga investitsiya'
      ]
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
          <span className="text-6xl md:text-7xl block mb-6">⚖️</span>
          <h1 className="section-title">
            Kim
            <br />
            <span className="text-crisis-600">to'lashi kerak?</span>
          </h1>
          <p className="section-subtitle">
            Mas'uliyat va harakat - har kim o'z rolini bilishi kerak
          </p>
        </motion.div>

        {/* Financial Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-12 mb-12 bg-gradient-to-br from-ocean-50 to-ocean-100"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-earth-900">
            Iqlim moliyasi: $100 milliard/yil
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <CountUp 
                  end={100} 
                  suffix=" mlrd"
                  prefix="$"
                  className="text-5xl md:text-6xl font-display font-bold text-ocean-700"
                />
                <p className="text-earth-600 mt-4">Parij kelishuvi va'dasi</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <CountUp 
                  end={83} 
                  suffix=" mlrd"
                  prefix="$"
                  className="text-5xl md:text-6xl font-display font-bold text-yellow-600"
                />
                <p className="text-earth-600 mt-4">Haqiqatda to'langan (2020)</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <CountUp 
                  end={17} 
                  suffix=" mlrd"
                  prefix="$"
                  className="text-5xl md:text-6xl font-display font-bold text-crisis-600"
                />
                <p className="text-earth-600 mt-4">Yetishmayotgan mablag'</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl p-6">
            <p className="text-earth-700 text-center text-lg">
              <strong>Muammo:</strong> Boy davlatlar o'z va'dalarini to'liq bajarmayapti. 
              Bu zaif davlatlarning iqlim bilan kurashish imkoniyatlarini cheklaydi.
            </p>
          </div>
        </motion.div>

        {/* Responsibility by Sector */}
        <div className="space-y-8 mb-12">
          {actions.map((action, index) => (
            <motion.div
              key={action.who}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="card-glass p-10"
            >
              <div className={`inline-block bg-gradient-to-r ${action.color} text-white px-8 py-3 rounded-full mb-6`}>
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  {action.who}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {action.responsibilities.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 bg-earth-50 p-4 rounded-xl"
                  >
                    <span className="text-2xl flex-shrink-0">✓</span>
                    <p className="text-earth-700 font-medium">{resp}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loss and Damage Fund */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="card-glass p-12 mb-12 bg-gradient-to-r from-crisis-600 to-crisis-800 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            "Yo'qotish va zarar" fondi 🆕
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              <strong>COP27 (2022):</strong> Tarixiy qaror - birinchi marta boy davlatlar zaif davlatlarga 
              iqlim zararini qoplash uchun maxsus fond yaratishga rozi bo'ldilar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">📝 Nima?</h3>
                <p>
                  Iqlim o'zgarishi tufayli yo'qotilgan uylar, dehqonchilik, infratuzilma uchun kompensatsiya
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🎯 Kim uchun?</h3>
                <p>
                  Eng zaif davlatlar: kichik orol davlatlari, Afrikaning eng kam rivojlangan davlatlari
                </p>
              </div>
            </div>

            <p className="text-center text-2xl font-bold mt-6">
              Bu katta yutuq, lekin hali amalga oshirilishi kerak! 💪
            </p>
          </div>
        </motion.div>

        {/* What Can We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="card-glass p-12 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-earth-900">
            Biz nima qilishimiz mumkin? 🤝
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-bold mb-3 text-earth-900">Ovozimizni eshittirish</h3>
              <p className="text-earth-600">
                Iqlim adolati haqida gapiring, ijtimoiy tarmoqlarda bo'lishing, ongni oshiring
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🗳️</div>
              <h3 className="text-xl font-bold mb-3 text-earth-900">Bosim o'tkazish</h3>
              <p className="text-earth-600">
                Hukumatlardan va kompaniyalardan mas'uliyat talab qiling
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-earth-900">Shaxsiy harakatlar</h3>
              <p className="text-earth-600">
                Kamroq iste'mol qiling, qayta ishlatang, toza energiyani qo'llab-quvvatlang
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-between items-center"
        >
          <Link to="/axloq" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/kelajak" className="btn-primary">
            Kelajak va yechimlar →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

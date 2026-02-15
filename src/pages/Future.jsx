import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Future() {
  const sdgTargets = [
    {
      number: '13.1',
      text: 'Barcha mamlakatlarda iqlim bilan bog\'liq xavflar va tabiiy ofatlarga qarshi chidamlilikni kuchaytirish'
    },
    {
      number: '13.2',
      text: 'Iqlim o\'zgarishi bo\'yicha choralarni milliy siyosat va strategiyalarga kiritish'
    },
    {
      number: '13.3',
      text: 'Iqlim o\'zgarishi bo\'yicha ta\'lim, xabardorlik va insoniy hamda institutional imkoniyatlarni oshirish'
    },
    {
      number: '13.a',
      text: 'Rivojlanayotgan mamlakatlarga iqlim moliyasida yillik $100 milliard ta\'minlash'
    },
    {
      number: '13.b',
      text: 'Eng kam rivojlangan davlatlarda iqlim rejalashtirish va boshqaruv uchun qobiliyatni oshirish'
    }
  ]

  const solutions = [
    {
      icon: '☀️',
      title: 'Qayta tiklanadigan energiya',
      description: 'Quyosh, shamol, suv energiyasiga o\'tish - 2050-yilga qadar karbon nolini maqsad qilish',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🌳',
      title: 'O\'rmonlarni saqlash',
      description: 'O\'rmonlarni kesishni to\'xtatish va 1 trillion daraxt ekish',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🚗',
      title: 'Toza transport',
      description: 'Elektr avtomobillar, jamoat transporti, velosiped yo\'llari',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🏗️',
      title: 'Yashil infratuzilma',
      description: 'Energiya samaradorligi, yashil binolar, iqlimga chidamli shaharlar',
      color: 'from-teal-400 to-teal-600'
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
          <span className="text-6xl md:text-7xl block mb-6">🌟</span>
          <h1 className="section-title">
            Kelajak:
            <br />
            <span className="text-ocean-600">Umid va yechimlar</span>
          </h1>
          <p className="section-subtitle text-center mx-auto">
            Biz o'zgarish yaratishimiz mumkin - birgalikda
          </p>
        </motion.div>

        {/* SDG 13 Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-12 mb-12 bg-gradient-to-br from-ocean-50 to-ocean-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold">13</div>
                  <div className="text-sm font-medium mt-1">SDG</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-earth-900">
                BMT Barqaror Rivojlanish Maqsadi #13
              </h2>
              <p className="text-xl text-earth-700 mb-4 leading-relaxed">
                <strong>Iqlim harakati:</strong> Iqlim o'zgarishi va uning ta'sirlariga qarshi kurashish uchun zudlik bilan harakat qilish
              </p>
              <p className="text-earth-600">
                193 ta mamlakatlar 2030-yilga qadar iqlim inqiroziga qarshi kurashish va adolatli yechimlarni amalga oshirishga va'da berdi.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SDG 13 Targets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass p-12 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-earth-900">
            SDG 13 ning asosiy maqsadlari
          </h2>

          <div className="space-y-4">
            {sdgTargets.map((target, index) => (
              <motion.div
                key={target.number}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-6 bg-ocean-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-600 to-ocean-800 text-white rounded-xl flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                  {target.number}
                </div>
                <p className="text-earth-700 text-lg leading-relaxed flex-1 pt-3">
                  {target.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-earth-900">
            Amaliy yechimlar
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-glass p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-lg`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-earth-900">
                  {solution.title}
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline to 2030 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="card-glass p-12 mb-12 bg-gradient-to-br from-green-50 to-green-100"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-earth-900">
            2030-yilga qadar yo'l xaritasi
          </h2>

          <div className="space-y-6">
            {[
              { year: '2025', action: 'Emissiyalarning eng yuqori cho\'qqisiga erishish', icon: '📈' },
              { year: '2027', action: 'Qayta tiklanadigan energiya 50% ga yetkazish', icon: '⚡' },
              { year: '2030', action: 'Emissiyalarni 50% ga qisqartirish (2010 ga nisbatan)', icon: '📉' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold">{milestone.year}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{milestone.icon}</span>
                    <h3 className="text-xl font-bold text-earth-900">{milestone.action}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hope Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="card-glass p-12 mb-12 text-center bg-gradient-to-r from-ocean-600 to-ocean-800 text-white"
        >
          <div className="text-7xl mb-6">🌍💚</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Biz o'zgartira olamiz!
          </h2>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
            Iqlim o'zgarishi haqiqiy, lekin bizning harakatlarimiz ham haqiqiy. 
            Har bir ovoz, har bir harakat, har bir qaror muhim.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">Bilim + Harakat = O'zgarish</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-between items-center"
        >
          <Link to="/masuliyat" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/manbalar" className="btn-primary">
            Manbalarni ko'rish →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

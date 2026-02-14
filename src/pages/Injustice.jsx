import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Injustice() {
  const polluters = [
    { country: 'AQSh 🇺🇸', emission: 15.5, vulnerability: 'Past', damage: 'Minimal' },
    { country: 'Xitoy 🇨🇳', emission: 7.4, vulnerability: 'O\'rta', damage: 'O\'rta' },
    { country: 'Yevropa 🇪🇺', emission: 6.9, vulnerability: 'Past', damage: 'Minimal' },
  ]

  const victims = [
    { country: 'Bangladesh 🇧🇩', emission: 0.5, vulnerability: 'Juda yuqori', damage: 'Kritik' },
    { country: 'Maldivlar 🇲🇻', emission: 3.2, vulnerability: 'Eng yuqori', damage: 'Yo\'qolib ketish' },
    { country: 'Chad 🇹🇩', emission: 0.1, vulnerability: 'Juda yuqori', damage: 'Kritik' },
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
            Bu nima uchun
            <br />
            <span className="text-crisis-600">adolatsiz?</span>
          </h1>
          <p className="section-subtitle max-w-4xl mx-auto">
            Eng ko'p ifloslantiruvchi davlatlar eng kam zarar ko'rmoqda. 
            Eng kam emissiya chiqaruvchilar eng ko'p qiynalmoqda.
          </p>
        </motion.div>

        {/* Main Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Polluters Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 bg-gradient-to-br from-earth-50 to-earth-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">🏭</span>
              <h2 className="text-3xl font-display font-bold text-earth-900">
                Ifloslantirguvchilar
              </h2>
            </div>

            <p className="text-earth-600 mb-6 text-lg">
              Yuqori emissiya, past zarar
            </p>

            <div className="space-y-4">
              {polluters.map((item, index) => (
                <motion.div
                  key={item.country}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 rounded-xl p-5 border-2 border-earth-200"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-xl text-earth-900">{item.country}</h3>
                    <span className="text-2xl font-display font-bold text-crisis-600">
                      {item.emission}
                    </span>
                  </div>
                  <div className="text-sm text-earth-600 space-y-1">
                    <div className="flex justify-between">
                      <span>CO₂ (tonna/odam):</span>
                      <span className="font-bold">{item.emission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zaiflik darajasi:</span>
                      <span className="font-bold text-green-600">{item.vulnerability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zarar ko'rish:</span>
                      <span className="font-bold text-green-600">{item.damage}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-earth-200 rounded-lg">
              <p className="text-sm text-earth-800 font-medium">
                💰 Boy mamlakatlar: yuqori emissiya, lekin himoyalangan infratuzilma va moliyaviy imkoniyatlar
              </p>
            </div>
          </motion.div>

          {/* Victims Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 bg-gradient-to-br from-crisis-50 to-crisis-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">😔</span>
              <h2 className="text-3xl font-display font-bold text-crisis-900">
                Qurbonlar
              </h2>
            </div>

            <p className="text-crisis-700 mb-6 text-lg font-medium">
              Past emissiya, yuqori zarar
            </p>

            <div className="space-y-4">
              {victims.map((item, index) => (
                <motion.div
                  key={item.country}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 rounded-xl p-5 border-2 border-crisis-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-xl text-earth-900">{item.country}</h3>
                    <span className="text-2xl font-display font-bold text-green-600">
                      {item.emission}
                    </span>
                  </div>
                  <div className="text-sm text-earth-600 space-y-1">
                    <div className="flex justify-between">
                      <span>CO₂ (tonna/odam):</span>
                      <span className="font-bold">{item.emission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zaiflik darajasi:</span>
                      <span className="font-bold text-crisis-600">{item.vulnerability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zarar ko'rish:</span>
                      <span className="font-bold text-crisis-600">{item.damage}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-crisis-200 rounded-lg">
              <p className="text-sm text-crisis-900 font-medium">
                😢 Kambag'al mamlakatlar: minimal emissiya, lekin mudofaasiz infratuzilma va moliyaviy cheklovlar
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-crisis-600 to-crisis-800 text-white rounded-3xl p-12 mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Asosiy muammo
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
            Bangladesh bir amerikalikdan <span className="font-bold underline">31 marta kam</span> emissiya chiqaradi, 
            lekin dengiz sathi ko'tarilishidan <span className="font-bold underline">100 marta ko'proq</span> zarar ko'radi.
          </p>
        </motion.div>

        {/* The Injustice Explained */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-glass p-12 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-earth-900">
            Adolatsizlik qayerda?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="font-bold text-xl mb-3 text-earth-900">Geografik</h3>
              <p className="text-earth-600">
                Boy Shimol ifloslantiradi, kambag'al Janub azob chekadi
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="font-bold text-xl mb-3 text-earth-900">Iqtisodiy</h3>
              <p className="text-earth-600">
                Zarar ko'rgan davlatlar o'zlarini himoya qila olmaydi
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⏳</div>
              <h3 className="font-bold text-xl mb-3 text-earth-900">Tarixiy</h3>
              <p className="text-earth-600">
                Sanoatlashgan davlatlar asrlar davomida ifloslantirishgan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between items-center"
        >
          <Link to="/tasir" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/dalillar" className="btn-primary">
            Dalillarni ko'rish →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

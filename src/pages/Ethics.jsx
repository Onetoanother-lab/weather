import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Ethics() {
  const questions = [
    {
      icon: '🤔',
      question: 'Adolatli harakat qilish nimani anglatadi?',
      answer: 'Agar siz ifloslantirsangiz, siz tozalash uchun javobgar bo\'lasiz. Bu aql-idrok va adolat.',
      color: 'from-ocean-100 to-ocean-200'
    },
    {
      icon: '💭',
      question: 'Nega zaif davlatlar o\'zlari sabab bo\'lmagan narsalar uchun azob chekishi kerak?',
      answer: 'Bu adolatsizlik. Ular minimal emissiya chiqardilar, lekin eng katta zararni ko\'rmoqdalar.',
      color: 'from-crisis-100 to-crisis-200'
    },
    {
      icon: '🌍',
      question: 'Global muammo - global mas\'uliyat?',
      answer: 'Ha. Iqlim o\'zgarishi dunyo muammosi. Lekin mas\'uliyat teng emas - ko\'proq ifloslantirilsa, ko\'proq mas\'uliyat.',
      color: 'from-earth-100 to-earth-200'
    }
  ]

  return (
    <div className="page-container pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl md:text-7xl block mb-6">🤔</span>
          <h1 className="section-title">
            Axloqiy savol:
            <br />
            <span className="text-ocean-600">Bu to'g'rimi?</span>
          </h1>
          <p className="section-subtitle text-center mx-auto">
            Iqlim adolati oddiy axloqiy printsiplar haqida
          </p>
        </motion.div>

        {/* Main Ethical Scenarios */}
        <div className="space-y-8 mb-16">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`card-glass p-10 bg-gradient-to-br ${item.color}`}
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl md:text-7xl">{item.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-earth-900 mb-4">
                    {item.question}
                  </h2>
                  <p className="text-lg md:text-xl text-earth-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-glass p-12 mb-12 bg-gradient-to-r from-earth-700 to-earth-900 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Oddiy misol
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="flex items-start gap-4">
              <span className="text-3xl">🏠</span>
              <span>
                Tasavvur qiling: Bir uyda 10 odam yashaydi. Ulardan 3 nafari doimo axlat tashlaydi va uyni ifloslantiryapti.
              </span>
            </p>
            
            <p className="flex items-start gap-4">
              <span className="text-3xl">🧹</span>
              <span>
                Qolgan 7 nafar hech qachon axlat tashlamaydi, lekin ular iflos uyda yashaydi va o'zlari tozalashi kerak deb aytiladi.
              </span>
            </p>
            
            <p className="flex items-start gap-4">
              <span className="text-3xl">❓</span>
              <span className="font-bold text-2xl">
                Bu adolatlimi? Albatta yo'q!
              </span>
            </p>
            
            <p className="flex items-start gap-4">
              <span className="text-3xl">⚖️</span>
              <span>
                Xuddi shunday: Boy davlatlar "ifloslantirguvchilar" - ular tozalash va zarar ko'rgan davlatlarga yordam berish uchun javobgardir.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Principles of Climate Justice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-glass p-12 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center text-earth-900">
            Iqlim adolatining asosiy printsiplari
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">
                    Ifloslantirguvchi to'laydi
                  </h3>
                  <p className="text-earth-600">
                    Ko'proq emissiya chiqargan davlatlar ko'proq mas'uliyat olishi kerak
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">
                    Umumiy, lekin farqlangan mas'uliyat
                  </h3>
                  <p className="text-earth-600">
                    Hammamiz iqlim uchun javobgarmiz, lekin turli darajada
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-crisis-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">
                    Zaif davlatlarni himoya qilish
                  </h3>
                  <p className="text-earth-600">
                    Eng kam mas'ul, lekin eng ko'p zarar ko'rayotganlarni birinchi navbatda yordam berish
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-crisis-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">
                    Avlodlararo adolat
                  </h3>
                  <p className="text-earth-600">
                    Kelajak avlodlar uchun yashaydigan sayyora qoldirish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="card-glass p-10 mb-12 text-center bg-gradient-to-br from-ocean-50 to-ocean-100"
        >
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl md:text-3xl font-display italic text-earth-900 mb-4 leading-relaxed">
            "Iqlim o'zgarishi inson huquqlari muammosi. 
            Bu hayot va o'lim, adolat va adolatsizlik haqida."
          </blockquote>
          <p className="text-earth-600 text-lg">
            - Mary Robinson, BMT oliy komissari
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-between items-center"
        >
          <Link to="/dalillar" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/masuliyat" className="btn-primary">
            Mas'uliyat →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

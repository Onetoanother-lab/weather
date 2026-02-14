import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function References() {
  const sources = [
    {
      category: 'Xalqaro tashkilotlar',
      icon: '🌐',
      refs: [
        {
          name: 'IPCC (Intergovernmental Panel on Climate Change)',
          desc: 'Iqlim o\'zgarishi bo\'yicha olimlar hisobotlari',
          link: 'https://www.ipcc.ch/'
        },
        {
          name: 'BMT (Birlashgan Millatlar Tashkiloti)',
          desc: 'Barqaror Rivojlanish Maqsadlari va iqlim harakati',
          link: 'https://www.un.org/sustainabledevelopment/climate-change/'
        },
        {
          name: 'Jahon Banki (World Bank)',
          desc: 'Iqtisodiy ma\'lumotlar va iqlim moliyasi',
          link: 'https://www.worldbank.org/en/topic/climatechange'
        }
      ]
    },
    {
      category: 'Ma\'lumotlar bazasi',
      icon: '📊',
      refs: [
        {
          name: 'Climate Watch',
          desc: 'CO₂ emissiya ma\'lumotlari (davlat bo\'yicha)',
          link: 'https://www.climatewatchdata.org/'
        },
        {
          name: 'Global Carbon Project',
          desc: 'Global karbonat emissiyalari monitoring',
          link: 'https://www.globalcarbonproject.org/'
        },
        {
          name: 'ND-GAIN Index',
          desc: 'Iqlim zaiflik va tayyorgarlik indeksi',
          link: 'https://gain.nd.edu/'
        }
      ]
    },
    {
      category: 'Ilmiy tadqiqotlar',
      icon: '🔬',
      refs: [
        {
          name: 'Nature Climate Change',
          desc: 'Iqlim fanlari bo\'yicha ilmiy jurnali',
          link: 'https://www.nature.com/nclimate/'
        },
        {
          name: 'The Lancet Countdown',
          desc: 'Iqlim va sog\'liq bo\'yicha tadqiqotlar',
          link: 'https://www.lancetcountdown.org/'
        },
        {
          name: 'Climate Risk Index (German watch)',
          desc: 'Davlatlar bo\'yicha iqlim xavfi reytingi',
          link: 'https://www.germanwatch.org/en/cri'
        }
      ]
    },
    {
      category: 'Ta\'lim resurslari',
      icon: '📚',
      refs: [
        {
          name: 'NASA Climate Kids',
          desc: 'Bolalar uchun iqlim ta\'limi',
          link: 'https://climatekids.nasa.gov/'
        },
        {
          name: 'Climate Justice Alliance',
          desc: 'Iqlim adolati bo\'yicha ma\'lumotlar',
          link: 'https://climatejusticealliance.org/'
        },
        {
          name: 'Carbon Brief',
          desc: 'Iqlim fani va siyosati haqida maqolalar',
          link: 'https://www.carbonbrief.org/'
        }
      ]
    }
  ]

  const keyStats = [
    {
      source: 'IPCC 6th Assessment Report (2021-2023)',
      facts: [
        'Global harorat sanoat inqilobidan beri 1.1°C oshgan',
        'Inson faoliyati global isishning asosiy sababi (99% ishonch)',
        'Hozirgi sur\'atda 2040-yilda 1.5°C oshishga erishamiz'
      ]
    },
    {
      source: 'World Bank Climate Change Data (2023)',
      facts: [
        'Bangladesh: 70% hududi 1m dengiz sathi ko\'tarilishidan zarar ko\'radi',
        'Rivojlanayotgan davlatlar YaIMning 20% gacha yo\'qotishi mumkin',
        'Iqlim migratsiyasi: 2050-yilga qadar 143 million odamni ko\'chirish'
      ]
    },
    {
      source: 'Global Carbon Project (2023)',
      facts: [
        'AQSh: 15.5 t CO₂/odam (eng yuqori)',
        'Xitoy: 7.4 t CO₂/odam',
        'Bangladesh: 0.5 t CO₂/odam (30 marta kam)'
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
          <span className="text-6xl md:text-7xl block mb-6">📖</span>
          <h1 className="section-title">
            Manbalar va
            <br />
            <span className="text-ocean-600">ma'lumotlar</span>
          </h1>
          <p className="section-subtitle">
            Barcha faktlar ishonchli manbalardan olingan
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-earth-900 text-center">
            Asosiy statistik ma'lumotlar
          </h2>

          <div className="space-y-6">
            {keyStats.map((stat, index) => (
              <motion.div
                key={stat.source}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="card-glass p-8"
              >
                <h3 className="text-xl font-bold text-ocean-700 mb-4 flex items-center gap-2">
                  <span>📌</span>
                  {stat.source}
                </h3>
                <ul className="space-y-3">
                  {stat.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-earth-700">
                      <span className="text-ocean-600 font-bold flex-shrink-0">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sources by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-earth-900 text-center">
            Ma'lumot manbalari
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sources.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="card-glass p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{category.icon}</span>
                  <h3 className="text-2xl font-display font-bold text-earth-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.refs.map((ref, idx) => (
                    <div
                      key={idx}
                      className="bg-earth-50 p-4 rounded-xl hover:bg-earth-100 transition-colors"
                    >
                      <h4 className="font-bold text-earth-900 mb-1">{ref.name}</h4>
                      <p className="text-sm text-earth-600 mb-2">{ref.desc}</p>
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ocean-600 hover:text-ocean-700 text-sm font-medium inline-flex items-center gap-1"
                      >
                        <span>Saytga o'tish</span>
                        <span>→</span>
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="card-glass p-8 mt-12 bg-gradient-to-br from-yellow-50 to-yellow-100"
        >
          <h3 className="text-2xl font-display font-bold mb-4 text-earth-900 flex items-center gap-3">
            <span>ℹ️</span>
            Eslatma
          </h3>
          <div className="space-y-3 text-earth-700">
            <p>
              Barcha ma'lumotlar ishonchli xalqaro manbalardan (IPCC, BMT, Jahon Banki) olingan.
            </p>
            <p>
              Raqamlar taxminiy bo'lishi mumkin, chunki iqlim ma'lumotlari doimiy yangilanadi.
            </p>
            <p>
              Ushbu taqdimot ta'lim maqsadida yaratilgan va eng so'nggi ilmiy konsensusga asoslangan.
            </p>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="card-glass p-8 mt-8"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-earth-900 text-center">
            Qo'shimcha resurslar
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-ocean-50 rounded-xl">
              <div className="text-4xl mb-3">🎬</div>
              <h4 className="font-bold mb-2">Dokumentallar</h4>
              <p className="text-sm text-earth-600">
                "Before the Flood", "An Inconvenient Truth", "Our Planet"
              </p>
            </div>

            <div className="text-center p-6 bg-earth-50 rounded-xl">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold mb-2">Ilovalar</h4>
              <p className="text-sm text-earth-600">
                "JouleBug", "Oroeco", "Carbon Footprint Calculator"
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">🌱</div>
              <h4 className="font-bold mb-2">Harakatlar</h4>
              <p className="text-sm text-earth-600">
                Fridays for Future, 350.org, Climate Justice Alliance
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-between items-center mt-12"
        >
          <Link to="/kelajak" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/" className="btn-primary">
            Boshiga qaytish →
          </Link>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center mt-16 mb-8"
        >
          <div className="text-6xl mb-4">🙏</div>
          <h3 className="text-3xl font-display font-bold text-earth-900 mb-3">
            E'tiboringiz uchun rahmat!
          </h3>
          <p className="text-lg text-earth-600">
            Birgalikda iqlim adolati uchun kurashaylik 🌍💚
          </p>
        </motion.div>
      </div>
    </div>
  )
}

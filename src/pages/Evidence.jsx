import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'

export default function Evidence() {
  // CO2 emissions per capita data (tons per person)
  // Source: Global Carbon Project, World Bank
  const emissionsData = [
    { country: 'AQSh', value: 15.5, flag: '🇺🇸' },
    { country: 'Kanada', value: 15.1, flag: '🇨🇦' },
    { country: 'Xitoy', value: 7.4, flag: '🇨🇳' },
    { country: 'Yevropa', value: 6.9, flag: '🇪🇺' },
    { country: 'Rossiya', value: 11.4, flag: '🇷🇺' },
    { country: 'Pakistan', value: 0.9, flag: '🇵🇰' },
    { country: 'Bangladesh', value: 0.5, flag: '🇧🇩' },
    { country: 'Chad', value: 0.1, flag: '🇹🇩' },
  ]

  // Climate vulnerability index (0-100, higher = more vulnerable)
  // Source: Climate Risk Index, German watch
  const vulnerabilityData = [
    { country: 'Maldivlar', score: 95, flag: '🇲🇻' },
    { country: 'Bangladesh', score: 88, flag: '🇧🇩' },
    { country: 'Pakistan', score: 82, flag: '🇵🇰' },
    { country: 'Mozambik', score: 79, flag: '🇲🇿' },
    { country: 'Yevropa', score: 25, flag: '🇪🇺' },
    { country: 'AQSh', score: 18, flag: '🇺🇸' },
    { country: 'Kanada', score: 15, flag: '🇨🇦' },
  ]

  // Temperature rise projection
  // Source: IPCC Reports
  const temperatureData = [
    { year: 1900, temp: 0 },
    { year: 1950, temp: 0.3 },
    { year: 2000, temp: 0.8 },
    { year: 2024, temp: 1.2 },
    { year: 2050, temp: 2.1 },
    { year: 2100, temp: 3.6 },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-ocean-200">
          <p className="font-bold text-earth-900">{payload[0].payload.country || payload[0].payload.year}</p>
          <p className="text-ocean-600">
            {payload[0].value} {payload[0].name === 'value' ? 't CO₂' : payload[0].name === 'score' ? '% xavf' : '°C'}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="page-container pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl md:text-7xl block mb-6">📊</span>
          <h1 className="section-title">
            Dalillar va
            <br />
            <span className="text-ocean-600">statistika</span>
          </h1>
          <p className="section-subtitle">
            Raqamlar adolatsizlikni isbotlaydi
          </p>
        </motion.div>

        {/* Chart 1: CO2 Emissions Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
            CO₂ emissiyasi (odam boshiga, tonna/yil)
          </h2>
          <p className="text-earth-600 mb-8">
            Boy davlatlar kambagjallarga qaraganda 30-40 marta ko'proq emissiya chiqaradi
          </p>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" />
                <XAxis 
                  dataKey="country" 
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                />
                <YAxis 
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                  label={{ value: 'Tonna CO₂', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill="#0ea5e9"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 p-4 bg-ocean-100 rounded-lg">
            <p className="text-ocean-900 font-medium">
              📌 Asosiy ma'lumot: AQSh fuqarosi Bangladeshlikdan 31 marta ko'p CO₂ chiqaradi
            </p>
          </div>
        </motion.div>

        {/* Chart 2: Climate Vulnerability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
            Iqlim zaiflik indeksi
          </h2>
          <p className="text-earth-600 mb-8">
            Qaysi davlatlar iqlim o'zgarishiga qarshi eng zaif? (0-100 shkala)
          </p>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vulnerabilityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                />
                <YAxis 
                  dataKey="country" 
                  type="category"
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                  width={100}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="score" 
                  fill="#ef4444"
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 p-4 bg-crisis-100 rounded-lg">
            <p className="text-crisis-900 font-medium">
              📌 Eng zaif: Maldivlar (95%), Bangladesh (88%), Pakistan (82%)
            </p>
          </div>
        </motion.div>

        {/* Chart 3: Temperature Rise Projection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-earth-900">
            Global harorat o'sishi prognozi
          </h2>
          <p className="text-earth-600 mb-8">
            Agar hozirgi sur'atda davom etsak, 2100-yilga kelib +3.6°C
          </p>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                />
                <YAxis 
                  tick={{ fill: '#4a4139', fontSize: 14 }}
                  label={{ value: 'Harorat o\'sishi (°C)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 6 }}
                  name="Harorat"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-100 rounded-lg">
              <p className="text-green-900 font-medium text-sm">
                ✅ 1.5°C: Maqbul chegara (Parij kelishuvi)
              </p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg">
              <p className="text-yellow-900 font-medium text-sm">
                ⚠️ 2°C: Xavfli chegara
              </p>
            </div>
            <div className="p-4 bg-crisis-100 rounded-lg">
              <p className="text-crisis-900 font-medium text-sm">
                🚨 3.6°C: Hozirgi yo'nalish (falokat)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="card-glass p-8 bg-gradient-to-br from-ocean-50 to-ocean-100">
            <h3 className="text-2xl font-display font-bold mb-4 text-ocean-900">
              Dengiz sathi
            </h3>
            <div className="text-5xl font-display font-bold text-ocean-700 mb-3">
              1 metr
            </div>
            <p className="text-earth-700">
              2100-yilga kelib kutilayotgan dengiz sathi ko'tarilishi. Bu Maldivlar va Bangladesh uchun falokat.
            </p>
          </div>

          <div className="card-glass p-8 bg-gradient-to-br from-crisis-50 to-crisis-100">
            <h3 className="text-2xl font-display font-bold mb-4 text-crisis-900">
              Iqtisodiy zarar
            </h3>
            <div className="text-5xl font-display font-bold text-crisis-700 mb-3">
              20%
            </div>
            <p className="text-earth-700">
              Zaif mamlakatlar o'z YaIMining 20% gacha yo'qotishi mumkin (rivojlangan davlatlar faqat 1-2%)
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between items-center"
        >
          <Link to="/adolatsizlik" className="btn-secondary">
            ← Orqaga
          </Link>
          <Link to="/axloq" className="btn-primary">
            Axloqiy savol →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

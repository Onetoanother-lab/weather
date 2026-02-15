import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, Cell } from 'recharts'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Evidence() {
  // CO2 emissions per capita data
  const emissionsData = [
    { country: 'AQSh', value: 15.5, flag: '🇺🇸', color: '#dc2626' },
    { country: 'Kanada', value: 15.1, flag: '🇨🇦', color: '#ef4444' },
    { country: 'Rossiya', value: 11.4, flag: '🇷🇺', color: '#f87171' },
    { country: 'Xitoy', value: 7.4, flag: '🇨🇳', color: '#fca5a5' },
    { country: 'Yevropa', value: 6.9, flag: '🇪🇺', color: '#fecaca' },
    { country: 'Pakistan', value: 0.9, flag: '🇵🇰', color: '#10b981' },
    { country: 'Bangladesh', value: 0.5, flag: '🇧🇩', color: '#059669' },
    { country: 'Chad', value: 0.1, flag: '🇹🇩', color: '#047857' },
  ]

  // Climate vulnerability index
  const vulnerabilityData = [
    { country: 'Maldivlar', score: 95, flag: '🇲🇻', color: '#dc2626' },
    { country: 'Bangladesh', score: 88, flag: '🇧🇩', color: '#ef4444' },
    { country: 'Pakistan', score: 82, flag: '🇵🇰', color: '#f87171' },
    { country: 'Mozambik', score: 79, flag: '🇲🇿', color: '#fca5a5' },
    { country: 'Yevropa', score: 25, flag: '🇪🇺', color: '#86efac' },
    { country: 'AQSh', score: 18, flag: '🇺🇸', color: '#4ade80' },
    { country: 'Kanada', score: 15, flag: '🇨🇦', color: '#22c55e' },
  ]

  // Temperature rise projection
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-glass p-4 border-2 border-ocean-300"
        >
          <p className="font-bold text-earth-900 text-lg">{payload[0].payload.country || payload[0].payload.year}</p>
          <p className="text-ocean-600 font-semibold text-lg">
            {payload[0].value.toFixed(1)} {payload[0].name === 'value' ? 't CO₂' : payload[0].name === 'score' ? '% xavf' : '°C'}
          </p>
        </motion.div>
      )
    }
    return null
  }

  return (
    <div className="page-container">
      <AnimatedBackground variant="earth" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="text-8xl md:text-9xl inline-block filter drop-shadow-2xl"
            >
              📊
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title mb-6"
          >
            Dalillar va
            <br/>
            <span className="gradient-text">statistika</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="section-subtitle"
          >
            Raqamlar adolatsizlikni isbotlaydi
          </motion.p>
        </motion.div>

        {/* Chart 1: CO2 Emissions */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-premium p-10 md:p-12 mb-16 overflow-hidden relative"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-earth-900 relative z-10"
          >
            CO₂ emissiyasi (odam boshiga, tonna/yil)
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-earth-600 mb-10 text-lg relative z-10"
          >
            Boy davlatlar kambagjallarga qaraganda <span className="font-bold text-crisis-600">30-40 marta ko'proq</span> emissiya chiqaradi
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[450px] relative z-10"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissionsData}>
                <defs>
                  <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#0891b2" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" opacity={0.3} />
                <XAxis 
                  dataKey="country" 
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  stroke="#9d8d77"
                />
                <YAxis 
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  label={{ value: 'Tonna CO₂', angle: -90, position: 'insideLeft', style: { fill: '#3d362d', fontWeight: 600 } }}
                  stroke="#9d8d77"
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(6, 182, 212, 0.1)' }} />
                <Bar 
                  dataKey="value" 
                  radius={[12, 12, 0, 0]}
                  animationDuration={1500}
                  animationBegin={500}
                >
                  {emissionsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-5 bg-gradient-to-r from-ocean-100 to-ocean-200 rounded-2xl relative z-10"
          >
            <p className="text-ocean-900 font-semibold text-lg flex items-center gap-3">
              <span className="text-3xl">📌</span>
              <span>Asosiy ma'lumot: AQSh fuqarosi Bangladeshlikdan <span className="text-crisis-600 font-bold">31 marta ko'p</span> CO₂ chiqaradi</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Chart 2: Vulnerability */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-premium p-10 md:p-12 mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-earth-900"
          >
            Iqlim zaiflik indeksi
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-earth-600 mb-10 text-lg"
          >
            Qaysi davlatlar iqlim o'zgarishiga qarshi eng zaif? (0-100 shkala)
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[450px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vulnerabilityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" opacity={0.3} />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  stroke="#9d8d77"
                />
                <YAxis 
                  dataKey="country" 
                  type="category"
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  width={110}
                  stroke="#9d8d77"
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }} />
                <Bar 
                  dataKey="score" 
                  radius={[0, 12, 12, 0]}
                  animationDuration={1500}
                  animationBegin={500}
                >
                  {vulnerabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-5 bg-gradient-to-r from-crisis-100 to-crisis-200 rounded-2xl"
          >
            <p className="text-crisis-900 font-semibold text-lg flex items-center gap-3">
              <span className="text-3xl">📌</span>
              <span>Eng zaif: Maldivlar (95%), Bangladesh (88%), Pakistan (82%)</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Chart 3: Temperature */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-premium p-10 md:p-12 mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-earth-900"
          >
            Global harorat o'sishi prognozi
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-earth-600 mb-10 text-lg"
          >
            Agar hozirgi sur'atda davom etsak, 2100-yilga kelib <span className="font-bold text-crisis-600">+3.6°C</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[450px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={temperatureData}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#d4cdc1" opacity={0.3} />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  stroke="#9d8d77"
                />
                <YAxis 
                  tick={{ fill: '#3d362d', fontSize: 14, fontWeight: 600 }}
                  label={{ value: 'Harorat o\'sishi (°C)', angle: -90, position: 'insideLeft', style: { fill: '#3d362d', fontWeight: 600 } }}
                  stroke="#9d8d77"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px', fontWeight: 600 }} />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  dot={{ fill: '#dc2626', r: 7, strokeWidth: 3, stroke: '#fff' }}
                  activeDot={{ r: 10 }}
                  name="Harorat"
                  animationDuration={2000}
                  animationBegin={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 grid md:grid-cols-3 gap-5"
          >
            {[
              { temp: '1.5°C', label: 'Maqbul chegara', desc: 'Parij kelishuvi', color: 'from-emerald-400 to-emerald-600', icon: '✅' },
              { temp: '2°C', label: 'Xavfli chegara', desc: 'Katta xavf boshlanadi', color: 'from-amber-400 to-amber-600', icon: '⚠️' },
              { temp: '3.6°C', label: 'Hozirgi yo\'nalish', desc: 'Falokat', color: 'from-crisis-500 to-crisis-700', icon: '🚨' },
            ].map((item, i) => (
              <motion.div
                key={item.temp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className={`p-5 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-glow`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-bold text-2xl">{item.temp}</span>
                </div>
                <p className="font-semibold text-lg mb-1">{item.label}</p>
                <p className="text-sm opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-between items-center"
        >
          <Link to="/adolatsizlik" className="btn-secondary">
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
            <span className="ml-2">Orqaga</span>
          </Link>
          <Link to="/axloq" className="btn-primary">
            <span>Axloqiy savol</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from './CountUp'

export default function StatCard({ 
  number, 
  suffix = '', 
  prefix = '', 
  decimals = 0,
  label, 
  description, 
  color = 'ocean',
  delay = 0 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const colorClasses = {
    ocean: 'from-ocean-500 to-ocean-700',
    crisis: 'from-crisis-500 to-crisis-700',
    earth: 'from-earth-500 to-earth-700',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card-glass p-8 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className={`inline-block bg-gradient-to-br ${colorClasses[color]} text-white px-6 py-3 rounded-full mb-4`}>
        <CountUp 
          end={number} 
          suffix={suffix} 
          prefix={prefix}
          decimals={decimals}
          className="text-3xl md:text-4xl font-display font-bold"
        />
      </div>
      
      <h3 className="text-2xl font-display font-bold text-earth-900 mb-3">
        {label}
      </h3>
      
      {description && (
        <p className="text-earth-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

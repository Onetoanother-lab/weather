import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/', label: 'Muammo', number: '01' },
  { path: '/tasir', label: 'Ta\'sir', number: '02' },
  { path: '/adolatsizlik', label: 'Adolatsizlik', number: '03' },
  { path: '/dalillar', label: 'Dalillar', number: '04' },
  { path: '/axloq', label: 'Axloq', number: '05' },
  { path: '/masuliyat', label: 'Mas\'uliyat', number: '06' },
  { path: '/kelajak', label: 'Kelajak', number: '07' },
  { path: '/manbalar', label: 'Manbalar', number: '08' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-earth-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <span className="text-white text-xl">🌍</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-display font-bold text-earth-900">Iqlim Adolati</h1>
            <p className="text-xs text-earth-600">Climate Justice UZ</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-ocean-600 text-white shadow-lg'
                    : 'text-earth-700 hover:bg-earth-100'
                }`}
              >
                <span className="text-xs opacity-60">{item.number}</span>
                <span className="ml-2 font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-earth-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-earth-900 rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-earth-900 rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-earth-900 rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-earth-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-ocean-600 text-white'
                          : 'bg-earth-50 text-earth-700 hover:bg-earth-100'
                      }`}
                    >
                      <span className="text-xs opacity-60">{item.number}</span>
                      <span className="ml-2 font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

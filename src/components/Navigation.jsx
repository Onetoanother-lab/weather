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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform hover:scale-110">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Iqlim Adolati
              </h1>
              <p className="text-xs text-slate-400 tracking-wide">Climate Justice UZ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-xs opacity-60 mr-2">{item.number}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-blue-400 rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-blue-400 rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-blue-400 rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden backdrop-blur-xl bg-black/40 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-5 py-4 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs opacity-60 mr-2">{item.number}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

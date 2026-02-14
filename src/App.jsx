import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import PageTransition from './components/PageTransition'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Impact = lazy(() => import('./pages/Impact'))
const Injustice = lazy(() => import('./pages/Injustice'))
const Evidence = lazy(() => import('./pages/Evidence'))
const Ethics = lazy(() => import('./pages/Ethics'))
const Responsibility = lazy(() => import('./pages/Responsibility'))
const Future = lazy(() => import('./pages/Future'))
const References = lazy(() => import('./pages/References'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-earth-50 via-ocean-50 to-earth-100">
        <Navigation />
        
        <Suspense fallback={<LoadingScreen />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasir" element={<Impact />} />
              <Route path="/adolatsizlik" element={<Injustice />} />
              <Route path="/dalillar" element={<Evidence />} />
              <Route path="/axloq" element={<Ethics />} />
              <Route path="/masuliyat" element={<Responsibility />} />
              <Route path="/kelajak" element={<Future />} />
              <Route path="/manbalar" element={<References />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

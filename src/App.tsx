import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './pages/home'
import PortfolioPage from './pages/portfolio'
import ScrollProgress from './components/common/scroll-progress'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

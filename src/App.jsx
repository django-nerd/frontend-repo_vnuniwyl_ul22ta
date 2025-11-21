import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Gallery from './components/Gallery'
import Mixes from './components/Mixes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollOrchestrator from './components/ScrollOrchestrator'
import { ThemeProvider } from './components/Theme'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0b0a09] text-[#FDF6E3] selection:bg-[rgba(212,175,55,0.25)] selection:text-[#0b0a09]">
        <Cursor />
        <ScrollOrchestrator />
        <Navbar />
        <main className="[scroll-behavior:smooth]">
          <Hero />
          <Biography />
          <Gallery />
          <Mixes />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

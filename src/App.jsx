import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Gallery from './components/Gallery'
import Mixes from './components/Mixes'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600/30 selection:text-white">
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
  )
}

export default App

import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SobreMim from './components/SobreMim'
import Habilidades from './components/Habilidades'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Projects/>
      <Habilidades/>
      <SobreMim/>
      <Footer/>
    </div>
  )
}

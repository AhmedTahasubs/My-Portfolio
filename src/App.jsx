import { useEffect } from 'react'
import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header'
import Home from './components/Home.jsx'
import ParticleComponent from './components/ParticleComponent.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
function App() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[App])
  return (
    <div className='overflow-hidden'>
      <ParticleComponent></ParticleComponent>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <footer>
        <Footer/> 
      </footer>
    
    </div>
  )
}
export default App

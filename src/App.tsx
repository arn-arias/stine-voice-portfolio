import './App.css'

import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Range } from './components/Range'
import { Reel } from './components/Reel'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Workflow } from './components/Workflow'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Reel />
        <Services />
        <Range />
        <Workflow />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

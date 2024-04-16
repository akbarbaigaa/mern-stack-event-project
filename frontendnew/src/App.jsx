import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {Toaster} from 'react-hot-toast'
import Navbars from '../components/Navbars'





const App = () => {
  return (
    <Router>
      <Navbars/>
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster/>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import FAQ from '../Components/FAQ'
import Features from '../Components/Features'
import Introduction from '../Components/Introduction'
import Partners from '../Components/Partners'
import Roadmap from '../Components/Roadmap'
import Team from '../Components/Team'
import Token from '../Components/Token'
import Animation from '../Components/Animation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CyberLayers from '../Components/Cyberlayers'
import Sidebar from '../Components/Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    <Navbar toggle={toggle} />
    <Introduction />
    <Features />
    <CyberLayers />
    <Token />
    <Roadmap />
    <Partners />
    <Team /> 
    <FAQ />
    <Footer />
    
    </>
   
  )
}

export default Home
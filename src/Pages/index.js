import React from 'react'
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



const Home = () => {
  return (
    <>
    <Navbar />
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
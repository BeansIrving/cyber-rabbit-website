import React, { Suspense, useState } from 'react'
// import FAQ from '../Components/FAQ'
// import Features from '../Components/Features'
// import Introduction from '../Components/Introduction'
// import Partners from '../Components/Partners'
// import Roadmap from '../Components/Roadmap'
// import Team from '../Components/Team'
// import Token from '../Components/Token'
// import Animation from '../Components/Animation'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import CyberLayers from '../Components/Cyberlayers'
// import Sidebar from '../Components/Sidebar'
// import SidebarAnim from '../Components/SidebarAnim'
import logo from '../Image/CR.webp'

const Introduction = React.lazy(() => import('../Components/Introduction'));
const Navbar = React.lazy(() => import('../Components/Navbar'));
const Sidebar = React.lazy(() => import('../Components/Sidebar'));
const SidebarAnim = React.lazy(() => import('../Components/SidebarAnim'));
const Features = React.lazy(() => import('../Components/Features'));
const CyberLayers = React.lazy(() => import('../Components/Cyberlayers'));
const Animation = React.lazy(() => import('../Components/Animation'));
const Token = React.lazy(() => import('../Components/Token'));
const Roadmap = React.lazy(() => import('../Components/Roadmap'));
const Partners = React.lazy(() => import('../Components/Partners'));
const Team = React.lazy(() => import('../Components/Team'));
const FAQMoto = React.lazy(() => import('../Components/FAQMoto'));
const Footer = React.lazy(() => import('../Components/Footer'));



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [isOpenAnim, setIsopenAnim] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleAnim = () => {
    setIsopenAnim(!isOpenAnim)
  }

  

  return (
    <div>
    <Suspense fallback={
    
    <div className='loading'><img src={logo} className='blink' height='100px' width='auto'/></div>}
    
    >
    <SidebarAnim toggleAnim={toggleAnim} isOpenAnim={isOpenAnim}/>
    
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    
    <Navbar toggle={toggle} />

    <Introduction />

    <Features />

    <Animation toggleAnim={toggleAnim}/>
 
    <CyberLayers /> 
   
    <Token />
   
    <Roadmap />
   
    <Partners />
   
    <Team /> 
   
    <FAQMoto />
   
    <Footer />
   
    </Suspense>

    </div>
   
  )
}

export default Home
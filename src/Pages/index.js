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
import logo from '../Image/CR.png'



const Introduction = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Introduction")), 3000)
)
);

const Navbar = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Navbar")), 3000)
)
);

const Sidebar = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Sidebar")), 3000)
)
);

const SidebarAnim = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/SidebarAnim")), 3000)
)
);

const Features = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Features")), 3000)
)
);

const CyberLayers = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Cyberlayers")), 3000)
)
);

const Animation = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Animation")), 3000)
)
);

const Token = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Token")), 3000)
)
);

const Roadmap = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Roadmap")), 3000)
)
);

const Partners = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Partners")), 3000)
)
);

const Team = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Team")), 3000)
)
);

const FAQ = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/FAQ")), 3000)
)
);

const Footer = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Footer")), 3000)
)
);


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
    
    <div className='loading'><img src={logo} className='blink' height='400px' width='auto'/></div>}
    
    >

    <SidebarAnim toggleAnim={toggleAnim} isOpenAnim={isOpenAnim}/>
    
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    
    <Navbar toggle={toggle} />

    <Introduction />
    
    <Features />
 
    <CyberLayers />
   
    <Animation toggleAnim={toggleAnim}/>
   
    <Token />
   
    <Roadmap />
   
    <Partners />
   
    <Team /> 
   
    <FAQ />
   
    <Footer />
   
    </Suspense>

    </div>
   
  )
}

export default Home
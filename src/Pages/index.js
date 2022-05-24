import React, { Suspense, useState } from 'react'
// import FAQ from '../Components/FAQ'
// import Features from '../Components/Features'
import Introduction from '../Components/Introduction'
// import Partners from '../Components/Partners'
// import Roadmap from '../Components/Roadmap'
// import Team from '../Components/Team'
// import Token from '../Components/Token'
// import Animation from '../Components/Animation'
import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import CyberLayers from '../Components/Cyberlayers'
import Sidebar from '../Components/Sidebar'
import SidebarAnim from '../Components/SidebarAnim'


const Features = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Features")), 1000)
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
setTimeout(() => resolve(import("../Components/Token")), 4000)
)
);

const Roadmap = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Roadmap")), 5000)
)
);

const Partners = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Partners")), 6000)
)
);

const Team = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Team")), 7000)
)
);

const FAQ = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/FAQ")), 8000)
)
);

const Footer = React.lazy(() => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(import("../Components/Footer")), 9000)
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
    <SidebarAnim toggleAnim={toggleAnim} isOpenAnim={isOpenAnim}/>
    
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    
    <Navbar toggle={toggle} />

    <Introduction />
    <Suspense fallback={<div></div>}>
      <Features />
   
    </Suspense>

    <Suspense fallback={<div></div>}>
        <CyberLayers />
   
    </Suspense>

    <Suspense fallback={<div></div>}>

    
        <Animation toggleAnim={toggleAnim}/>
   
    </Suspense>

    <Suspense fallback={<div></div>}>
    <Token />
   
    </Suspense>

    <Suspense fallback={<div></div>}>
    <Roadmap />
   
    </Suspense>
    
    <Suspense fallback={<div></div>}>
    <Partners />
   
    </Suspense>
    
    <Suspense fallback={<div></div>}>
    <Team /> 
   
    </Suspense>

    <Suspense fallback={<div></div>}>
    <FAQ />
   
    </Suspense>
    
    <Suspense fallback={<div>loading...</div>}>
    <Footer />
   
    </Suspense>
    
    
   


  



    </div>
   
  )
}

export default Home
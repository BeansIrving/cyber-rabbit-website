import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, 
  NavLogo,ImgLogo, MobileIcon, 
  NavMenu, NavBtn, 
  NavBtnLink, NavBtnLinks,
  Whitepaper, Features, CyberLayers,
  Token, Roadmap, Partners, Team, Faq
  } from './NavbarElements';
import logo from '../../Image/navbarAssets/logocyber.png';
import transparent from '../../Image/navbarAssets/transparent.png';
import transparentMint from '../../Image/navbarAssets/transparentMint.png';



const Navbar = ( {toggle} ) => {

  return (
    <>
    <Nav>
        <NavbarContainer>
        <NavLogo>
              <ImgLogo src={logo}/>
            </NavLogo>

            <MobileIcon  onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                        
            </NavMenu>
            <NavBtn>
{/*       
            <NavBtnLink> <Movement src={transparent}></Movement> </NavBtnLink>
            <NavBtnLink> <Collab src={transparent}></Collab> </NavBtnLink>
            <NavBtnLink> <Dao src={transparentMint}></Dao> </NavBtnLink>
            <NavBtnLink> <Mint src={transparentMint}></Mint> </NavBtnLink> */}
            <NavBtnLink
            to='features'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Features src={transparent}></Features> </NavBtnLink>

            <NavBtnLink
            to='cyberlayers'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <CyberLayers src={transparent}></CyberLayers> </NavBtnLink>
            {/* <NavBtnLinks href="https://drive.google.com/file/d/1GMs94j54lXOSgQZK4od-d7XroihlvPnz/view?usp=sharing" target="_blank" rel="noopener"> <Whitepaper src={transparent}></Whitepaper> </NavBtnLinks> */}
            
            <NavBtnLink
            to='token'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Token src={transparentMint}></Token> </NavBtnLink>
            {/* <NavBtnLinks href="https://drive.google.com/file/d/1GMs94j54lXOSgQZK4od-d7XroihlvPnz/view?usp=sharing" target="_blank" rel="noopener"> <Whitepaper src={transparent}></Whitepaper> </NavBtnLinks> */}
            
            <NavBtnLink
            to='roadmap'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Roadmap src={transparent}></Roadmap> </NavBtnLink>
            
            <NavBtnLink
            to='partners'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Partners src={transparent}></Partners> </NavBtnLink>
            
            <NavBtnLink
            to='team'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Team src={transparentMint}></Team> </NavBtnLink>
            
            <NavBtnLink
            to='faqmoto'
            smooth={true}
            duration={100}
            spy={true}
            exact='true'
            offset={0}> <Faq src={transparentMint}></Faq> </NavBtnLink>
            <NavBtnLinks href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1J2jeyAhia1tk3POJJpxTtTHiTV4JrB97%2Fview%3Fusp%3Dsharing%26fbclid%3DIwAR1KMvO6WV6i7mv8zWnHoN7R1uXwK6iOenyQ4o_6nQ0ruuZCKbBTWYvUnPU&h=AT2QE7RWJo56J9HCv0Wc6eGVaZFA_gTYBzGcWxPfibkTlZsMFDyG3FnZo49PuLR6Thwy99KJHjGXJ6Q0b1jlWim67yENtlXGEl_d98INzCZ7w_0dmIAxSSd5pTiFGq7wmmU" rel="noopener"> <Whitepaper src={transparent}></Whitepaper> </NavBtnLinks>

            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
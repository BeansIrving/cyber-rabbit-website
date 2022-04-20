import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, 
  NavLogo,ImgLogo, MobileIcon, 
  NavMenu, NavLinks, NavBtn, 
  NavBtnLink, Movement, Collab, NavBtnLinks,
  Whitepaper, Dao, Mint, Features, CyberLayers,
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
            <NavBtnLinks href="https://drive.google.com/file/d/1GMs94j54lXOSgQZK4od-d7XroihlvPnz/view?usp=sharing" target="_blank" rel="noopener"> <Whitepaper src={transparent}></Whitepaper> </NavBtnLinks>

            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
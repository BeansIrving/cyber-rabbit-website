import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, 
  NavLogo,ImgLogo, MobileIcon, 
  NavMenu, NavLinks, NavBtn, 
  NavBtnLink, Movement, Collab, NavBtnLinks,
  Whitepaper, Dao, Mint
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
            <NavBtnLinks href="https://drive.google.com/file/d/1GMs94j54lXOSgQZK4od-d7XroihlvPnz/view?usp=sharing" target="_blank" rel="noopener"> <Whitepaper src={transparent}></Whitepaper> </NavBtnLinks>

            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, Span, LinkWrap, NavBtn, NavBtnLink, LogoImg} from './NavbarElements';
import logo from '../../Image/navbarAssets/logocyber.png';


const Navbar = ( {toggle,} ) => {
  
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo>
              <ImgLogo src={logo}/>
            </NavLogo>
            <MobileIcon onClick={toggle} >
                <FaBars />
            </MobileIcon>
            <NavMenu>
                        
            </NavMenu>
            <NavBtn>
                {/* <NavLinks to="/index"> Launchpad </NavLinks>
                <NavLinks to="/TokenSale"> TokenSale </NavLinks>
                <NavLinks to="/NFTStaking"> NFT Staking </NavLinks> */}
                <LinkWrap>
                  <NavBtnLink><Span>Movement</Span></NavBtnLink> 
                </LinkWrap>

                <LinkWrap>
                  <NavBtnLink><Span>Collab-Carnival</Span></NavBtnLink>
                </LinkWrap>

                <LinkWrap>
                  <NavBtnLink><Span>Whitepaper</Span></NavBtnLink>
                </LinkWrap>
                
                <LinkWrap>
                  <NavBtnLink><Span>Dao</Span></NavBtnLink>
                </LinkWrap>

                <LinkWrap>
                  <NavBtnLink><Span>Mint</Span></NavBtnLink>
                </LinkWrap>

            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
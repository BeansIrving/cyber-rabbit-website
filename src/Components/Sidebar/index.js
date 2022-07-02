import React from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Container
}   from './SidebarElements';

import logo from '../../Image/CR.webp'
import close from '../../Image/close.png'
const index = ({isOpen, toggle}) => {
    
  return (
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <SidebarBg>
             
          </SidebarBg>

          
          <Icon onClick={toggle}>
            <CloseIcon src ={close}/>
          </Icon>
          <FlexboxContainer>
            <SideLogo>
                <ImgLogo src={logo}/>
            </SideLogo>

            <SidebarMenu>

            <SidebarLink
              to="features"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Features
            </SidebarLink>

            <SidebarLink
              to="cyberlayers"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Cyber Layers
            </SidebarLink>

            <SidebarLink
              to="token"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Token
            </SidebarLink>

            {/* <SidebarLink
              to="roadmap"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Roadmap
            </SidebarLink> */}

            <SidebarLink
              to="partners"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Partners
            </SidebarLink>

            <SidebarLink
              to="team"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Team
            </SidebarLink>

            <SidebarLink
              to="faqmoto"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Faq
            </SidebarLink>

            {/* <SidebarLinks href="https://drive.google.com/file/d/1J2jeyAhia1tk3POJJpxTtTHiTV4JrB97/view?usp=sharing" target="_blank" rel="noopener">Whitepaper</SidebarLinks> */}
            
            </SidebarMenu>

          <Container>
       
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default index;

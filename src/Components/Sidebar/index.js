import React, { useState } from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, ImgBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Socials,SocialImg, SocialBorder, Container
}   from './SidebarElements';

import logo from '../../Image/CR.png'
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

            <SidebarLink
              to="roadmap"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0}>
              Roadmap
            </SidebarLink>

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




            <SidebarLinks href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1J2jeyAhia1tk3POJJpxTtTHiTV4JrB97%2Fview%3Fusp%3Dsharing%26fbclid%3DIwAR1KMvO6WV6i7mv8zWnHoN7R1uXwK6iOenyQ4o_6nQ0ruuZCKbBTWYvUnPU&h=AT2QE7RWJo56J9HCv0Wc6eGVaZFA_gTYBzGcWxPfibkTlZsMFDyG3FnZo49PuLR6Thwy99KJHjGXJ6Q0b1jlWim67yENtlXGEl_d98INzCZ7w_0dmIAxSSd5pTiFGq7wmmU" target="_blank" rel="noopener">Whitepaper</SidebarLinks>
            </SidebarMenu>

          <Container>
       
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default index;

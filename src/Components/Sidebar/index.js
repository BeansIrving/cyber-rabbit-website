import React, { useState } from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, ImgBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Socials,SocialImg, SocialBorder, Container
}   from './SidebarElements';

import logo from '../../Image/CR.png'
const index = ({isOpen, toggle}) => {
    
  return (
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <SidebarBg>
             
          </SidebarBg>

          
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <FlexboxContainer>
            <SideLogo>
                <ImgLogo src={logo}/>
            </SideLogo>

            <SidebarMenu>
            <SidebarLinks href="https://drive.google.com/file/d/1i5Ie9p-iwWB2NAe4JcwXJ6sL0gUovWE-/view?usp=sharing" target="_blank" rel="noopener">Whitepaper</SidebarLinks>
            </SidebarMenu>

          <Container>
       
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default index;

import React, { useState } from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, ImgBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Socials,SocialImg, SocialBorder, Container
}   from './SidebarElements';


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
                
            </SideLogo>

            <SidebarMenu>
                
                <SidebarLinks to="">Whitepaper</SidebarLinks>

            </SidebarMenu>

          <Container>
       
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default index;

import React, { useState } from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, ImgBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Socials,SocialImg, SocialBorder, Container
}   from './SidebarElements';
import ReactPlayer  from "react-player"
import close from '../../Image/close.png'

const SidebarAnim = ({isOpenAnim, toggleAnim}) => {
    
  return (
      <SideBarContainer isOpenAnim={isOpenAnim} onClick={toggleAnim}>
          <SidebarBg>
             
          </SidebarBg>

          
          <Icon onClick={toggleAnim}>
            <CloseIcon src ={close}/>
          </Icon>
          <FlexboxContainer>
           

          <Container>
            <ReactPlayer url="https://www.youtube.com/watch?v=MEYjpXdInsk" controls={true}/>
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default SidebarAnim;

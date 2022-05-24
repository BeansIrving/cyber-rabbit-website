import React, { useState } from 'react';
import {
    SideBarContainer, Icon, CloseIcon,
    SidebarBg, ImgBg, SideLogo, ImgLogo,
    SidebarMenu, SidebarLink, SidebarLinks, FlexboxContainer,
    Socials,SocialImg, SocialBorder, Container
}   from './SidebarElements';
import ReactPlayer  from "react-player/lazy"
import close from '../../Image/close.png'

const SidebarAnim = ({isOpenAnim, toggleAnim}) => {
  
  const defaultVideoUrl = "https://www.youtube.com/watch?v=MEYjpXdInsk"
  const [videoUrl, setVideoUrl] = useState(defaultVideoUrl);
  
  return (
    
      <SideBarContainer isOpenAnim={isOpenAnim} onClick={toggleAnim} >
          <SidebarBg>
             
          </SidebarBg>

          
          <Icon onClick={toggleAnim}>
            <CloseIcon src ={close}/>
          </Icon>
          <FlexboxContainer>
           

          <Container>
            <ReactPlayer 
            url={videoUrl}
            controls={true}

            onEnded={() => setVideoUrl(defaultVideoUrl)}/>
          </Container>
           

            


          </FlexboxContainer>
          

          

      </SideBarContainer>
  )
};

export default SidebarAnim;

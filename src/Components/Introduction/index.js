import React from 'react'
import { IntroContainer, IntroBg,
        IntroContent, IntroRow, IntroColumn, CRH1, CRH01,
        CoolestP, Description, ContainerText, IntroColumn2, VideoBg,
        BtnDiscord } from './IntroElements'
import video from '../../video/Stella.mp4'
import discord from '../../Image/introductionAssets/joindiscord.png'
const Introduction = () => {
  return (
    <IntroContainer>
      <IntroBg>
            <VideoBg id='vid' autoPlay loop playsInline src={video} muted type='video/mp4'>
                    
            </VideoBg>
      </IntroBg>

      <IntroContent>
        <IntroRow>
          <IntroColumn>
          <CRH01>001</CRH01>
         
              
              <ContainerText>
                <CRH1>Cyber Rabbit</CRH1>
                <CoolestP>The Coolest Rabbits in the Metaverse</CoolestP>

                <Description>Cyber Rabbits is a Decentralized NFT Project primarily running
                  in the Ethereum Blockchain Network whose aim is to capitalize
                  on the earning aspect of the NFT Industry while bordering
                  within the building technology that is Metaverse.
                </Description>
              </ContainerText>
          
            
            
          </IntroColumn>

          <IntroColumn2 href="https://discord.gg/cyberrabbitnft" target="_blank" rel="noopener">
            <BtnDiscord src={discord}></BtnDiscord>
          </IntroColumn2>
        </IntroRow>
      </IntroContent>
    </IntroContainer>
  )
}

export default Introduction
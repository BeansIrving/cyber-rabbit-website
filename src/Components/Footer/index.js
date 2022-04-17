import React from 'react'
import { FooterContainer, FooterBg, FooterContent, 
    FooterRow, FooterColumn, FooterFlexContainer,
    ColumnContent,ColumnContent2, Terms, CyberRabbitWrapper,
    CyberRabbitLogo,Socials, SocialBorder, SocialImg, TermsContainer, FooterH3 } from './FooterElements'
import cyberwhite from '../../Image/navbarAssets/logocyber.png'
import twitter from '../../Image/footerAssets/twitter.png'
import discord from '../../Image/footerAssets/discord.png'
import facebook from '../../Image/footerAssets/facebook.png'
import instagram from '../../Image/footerAssets/instagram.png'
import opensea from '../../Image/footerAssets/opensea.png'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterBg>

        </FooterBg>

        <FooterContent>
            <FooterRow>
                <FooterColumn>
                    <FooterFlexContainer>
                        <ColumnContent2>
                            <TermsContainer>
                                <Terms>Terms and Conditions</Terms>
                                <Terms>Privacy Notice</Terms>
                            </TermsContainer>

                            
                            
                        </ColumnContent2>

                        <ColumnContent>
                                <CyberRabbitLogo src={cyberwhite}></CyberRabbitLogo>
                     
                        </ColumnContent>


                        <ColumnContent>
                        <Socials>

                            <SocialBorder href="#" target="_blank" rel="noopener">
                            <SocialImg src={opensea}>
                            </SocialImg>
                            </SocialBorder>

                            <SocialBorder href="https://twitter.com/CyberRabbit01" target="_blank" rel="noopener">
                            <SocialImg src={twitter}>
                            </SocialImg>
                            </SocialBorder>

                            <SocialBorder href="https://discord.gg/qMQBdAR2" target="_blank" rel="noopener">
                            <SocialImg src={discord}>
                            </SocialImg>
                            </SocialBorder>

                            <SocialBorder href="https://www.facebook.com/CyberRabbitNFT" target="_blank" rel="noopener">
                            <SocialImg src={facebook}>
                            </SocialImg>
                            </SocialBorder>

                            <SocialBorder href="https://www.instagram.com/cyberrrabbit/" target="_blank" rel="noopener">
                            <SocialImg src={instagram}>
                            </SocialImg>
                            </SocialBorder>

                        </Socials>
                        </ColumnContent>
                        
                        

                    </FooterFlexContainer>
                    <br></br>
                    <FooterH3>Cyber Rabbit 	&copy; 2022, All rights reserved.</FooterH3>
                </FooterColumn>
            </FooterRow>
        </FooterContent>
    </FooterContainer>
  )
}

export default Footer
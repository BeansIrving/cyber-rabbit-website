import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0;
    height: 30vh;
    width: auto;
    position: relative;
    top:0vh;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }

    @media screen and (max-width:1024px){
        top:0vh;
    }
`

export const FooterBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: hidden;
`

export const FooterContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterColumn = styled.div`
 
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const FooterFlexContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        width: auto;
    }
    

`

export const ColumnContent2 = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    width: 25vw;

    @media screen and (max-width:1024px){
        padding: 0vh;
        width: 100%;
        display: flex;
        justify-content: center;
        width: auto;
        height: auto;
        position: relative;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }
`

export const ColumnContent = styled.div`
    
    
    justify-content: center;
    align-items: center;
    width: 25vw;
  

    @media screen and (max-width:1024px){
        padding: 0vh;
        width: 100%;
        display: flex;
        justify-content: center;
        width: auto;
        height: auto;
        position: relative;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }
`

export const Terms = styled.p`
    font-family: featuresFont;
    font-size:1.5vh;
    color: white;
`

export const CyberRabbitWrapper = styled.div`
    max-width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
`

export const CyberRabbitLogo = styled.img`

    width: 20vh;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;

  


`



export const Socials = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
    position: relative;
    
`

export const SocialBorder = styled.a`
    cursor: pointer;
    margin:.5vh;
  
   
`
export const SocialImg = styled.img`
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1024px){
        height: 3vh;
    }

    @media screen and (max-width:768px){
        height: 3vh;
    }
`
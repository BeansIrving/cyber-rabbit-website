import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0;
    height: 20vh;
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
        height: 30vh;
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
    max-width: 1400px;
    position: absolute;
    padding: 0vw;
    padding-right: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:1024px){
        padding-right: 0vh;
    }
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
    width: 35vw;

    @media screen and (max-width:1024px){
        padding: 0vh;
        width: 30vw;
        display: flex;
        justify-content: center;
      
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
        width: 30vw;
        display: flex;
        justify-content: center;
        
    }

    @media screen and (max-width:768px){
        width: 100%;
    }
`

export const Terms = styled.p`
    font-family: featuresFont;
    font-size:1.5vh;
    color: white;

    @media screen and (max-width:768px){
        text-align: center;
    }
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

    width: 29vh;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width:1024px){
        width: 20vh;
    }


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
    border-radius: 50%;

    @media screen and (max-width:1024px){
        height: 3vh;
    }

    @media screen and (max-width:768px){
        height: 3vh;
    }
`
export const TermsContainer = styled.div`
    flex-wrap: wrap;
`

export const FooterH3 = styled.h1`
    text-align: center;
    font-size: 1.5vh;
    font-family: featuresFont;
    color: white;

    @media screen and (max-width:468px){
        font-size: 1vh;
    }
`
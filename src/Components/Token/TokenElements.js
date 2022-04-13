import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import bg from '../../Image/bg/token-bg.png'

export const TokenContainer = styled.div`
    background: #3d050c;
    display: flex;
    width: auto;
    padding: 5vh 15vh;
    height: 100vh;
    position: relative;
    z-index: 1;

    
    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: hyperspacebold;
        src: url(${hyperspacebold});
    }

    
    @media screen and (max-width:1024px){
        padding: 0vh 5vh;
        padding-bottom: 15vh;
        height: 140vh;
    }

    @media screen and (max-width:768px){
        padding: 5vh 5vh;
        height: 130vh;
    }

    @media screen and (max-width:468px){
        padding: 5vh 3vh;
       
    }
`

export const TokenBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const TokenContent = styled.div`
    max-width: 1200px;
    position: absolute;
    display: flex;
    
`

export const TokenRow = styled.div`
    display: flex;
`

export const TokenColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85vw;
  

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
    }
    
`

export const ColumnContent = styled.div`
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 5vh;
`

export const ColumnContent2 = styled.div`
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 5vh;
`

export const IntroH1 = styled.p`
    font-family: featuresFont;
    color: white;
    font-size: 2vw;
    letter-spacing: 0.3vh;

    @media screen and (max-width:468px){
        font-size: 2vh;
    }
`

export const CarrotH1 = styled.p`
    font-family: featuresFont;
    color: white;
    font-size: 6vw;
    letter-spacing: 0.3vh;
    text-transform: uppercase;
    line-height: 1.2;

    @media screen and (max-width:468px){
        font-size: 5vh;
    }
`

export const CarrotP = styled.p`
    font-family: featuresFont;
    color: white;
    font-size: 1.5vh;
    letter-spacing: 0.3vh;
    text-transform: uppercase;
    line-height: 1.2;
`

export const ImgToken = styled.img`
    height: 30vw;

    @media screen and (max-width:1024px){
        height: 40vw;
    }

    @media screen and (max-width:768px){
        height: 50vw;
    }

    @media screen and (max-width:468px){
        height: 80vw;
    }
`

export const TokenDesign = styled.img`
    position: absolute;
    bottom: 5vh;
    right: 25vh;
    width: 40%;
    height: auto;
    overflow: hidden;
`

export const AssetTop = styled.img`
    padding-top: 5vh;
    height: auto;
    width: auto;
    position: absolute;

    @media screen and (max-width:1366px){
        padding-top: 6.5vh;
        width: 20vw;
    }

    @media screen and (max-width:1024px){
        width: 40vw;
    }

`

export const AssetBot = styled.img`
    
    position: absolute;

    right: 50vh;
    padding-top: 10vh;
    width: 20vw;
    height: auto;

    @media screen and (max-width:1366px){
        right: 75vh;
        padding-top: 10vh;
        width: 20vw;
    }

    @media screen and (max-width:1024px){
        right: 0vh;
        padding-top: 10vh;
        width: 40vw;
    }

    @media screen and (max-width:768px){
        right: 0vh;
        padding-top: 7vh;
        width: 40vw;
    }

    @media screen and (max-width:468px){
        right: 0vh;
        padding-top: 7vh;
        width: 40vw;
    }

`

export const UtilH1 = styled.p`

    font-family: featuresFont;
    color: white;
    font-size: 2vw;
    letter-spacing: 0.3vh;
    line-height: 1.2;
    padding: 5vh;
    padding-top: 8.5vh;
    padding-left: 6vh;

    @media screen and (max-width:468px){
        padding: 5vh;
        padding-top: 6.5vh;
        padding-left: 3vh;
        font-size: 2vh;
    }
`

export const FirstUtilText = styled.img`
    height: auto;
    width: 30vw;
    padding-left: 5vh;
    padding-bottom: 2vh;

    @media screen and (max-width:1024px){
        width: 70vw;
       
    }

    @media screen and (max-width:468px){
        padding-left: 0vh;
        padding-bottom: 2vh;
        padding-right: 2vh;
        width: 90vw;
    }
`


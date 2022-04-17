import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import bg from '../../Image/bg/FAQ-bg.png'

export const FAQContainer = styled.div`
    background: #3d050c;
    display: flex;
    width: auto;
    padding: 5vh 15vh;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;
    
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
        padding: 5vh 5vh;
        padding-bottom: 15vh;
    }

    @media screen and (max-width:768px){
        padding: 5vh 5vh;
  
    }

    @media screen and (max-width:468px){
        padding: 5vh 2vh;
        height: 120vh;
    }

   
`

export const FAQBg = styled.div`
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

export const FAQContent = styled.div`
    max-width: 1600px;
    position: absolute;
    display: flex;
`

export const FAQRow = styled.div`
    display: flex;

    @media screen and (max-width:1366px){
        flex-wrap: wrap;
        display: flex;
    }

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        display: flex;
    }

`

export const FAQColumn = styled.div`
    display: flex;

    
`

export const ColumnContent = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
`

export const DesignP = styled.p`
    font-family: featuresFont;
    color: white;
    padding-top: 1.2vh;
    padding-right: 0.3vh;

    @media screen and (max-width:768px){
        padding-top: 0vh;
    }

    @media screen and (max-width:468px){
        padding-top: 0vh;
    }
`

export const ColumnContent2 = styled.div`
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
`

export const Common = styled.h1`
    font-family: featuresFont;
    font-size: 3vw;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.7vh;

    @media screen and (max-width:468px){
        font-size: 3vh;
    }
`


export const FAQColumnContent = styled.div`
    width: 100%;
    flex-wrap: wrap;
    padding-right: 10vh;

    align-items: center;
   

    @media screen and (max-width:1024px){
        padding: 0vh;
    }
`

export const ImgTop = styled.img`
    height: auto;
    position: absolute;
    width: auto;
    cursor: pointer;
    @media screen and (max-width:1024px){
        width: 100vw;
    }
`

export const ImgBottom = styled.img`
    transition: all 0.5s ease-in;   
    height: auto;
    position: relative;
    width: 40vw;
    cursor: pointer;

    @media screen and (max-width:1366px){
        width: 50vw;
    }

    @media screen and (max-width:1024px){
        width: 68vw;
    }

    @media screen and (max-width:768px){
        width: 82vw;
    }

    @media screen and (max-width:468px){
        width: 86vw;
    }
`

export const ImgBottomHide = styled.img`
    transition: all 0.5s ease-in;
    height: auto;
    position: relative;
    width: 40vw;
    cursor: pointer;

    @media screen and (max-width:1366px){
        width: 50vw;
    }
    @media screen and (max-width:1024px){
        width: 68vw;
    }

    @media screen and (max-width:768px){
        width: 82vw;
    }

    @media screen and (max-width:468px){
        width: 86vw;
    }
`
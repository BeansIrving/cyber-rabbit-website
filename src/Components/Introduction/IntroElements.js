import styled from "styled-components";
import bg from '../../Image/bg/0100.png'
import intro from '../../Image/introductionAssets/Group165.png'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'

export const IntroContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: flex-start;
    padding: 0 15vh;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
    align-items: flex-end;
    padding-bottom: 15vh;

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: hyperspacebold;
        src: url(${hyperspacebold});
    }

    
    @media screen and (max-width:1024px){
        padding: 0 5vh;
        padding-bottom: 15vh;
    }

    @media screen and (max-width:768px){
        padding: 0 5vh;
        align-items: center;
    }

    @media screen and (max-width:468px){
        padding: 0 2vh;
        align-items: center;
    }
`

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    clip-path: polygon(0 0, 100% 0, 100% 71%, 27% 99%, 0 99%);
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 71%, 27% 99%, 0 99%);
`

export const IntroContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding: 0vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const IntroRow = styled.div`
    display: flex;
    align-items: center;
    width: auto;
`

export const IntroColumn = styled.div`
    background-image: url(${intro});
    background-repeat: no-repeat;
    background-position: left;
    width: 80%;
    height: auto;

    @media screen and (max-width:1024px){
        width: auto;
    }

    @media screen and (max-width:768px){
        width: 90%;
    }
    

    @media screen and (max-width:468px){
      
        width: 95%;
        height: auto;
        background: rgba(0, 0, 0, 0.4);
    }
`
export const Container = styled.div`
    display: flex;
    position: relative;
`

export const ContainerText = styled.div`
    flex-wrap: wrap;
    align-items: center;
    margin: 3vh;
    margin-left: 0vh;
    margin-right: 0vh;
    padding: 3vh;
    padding-left: 3vh;
   
   
`

export const CRH1 = styled.h1`
    font-size: 70px;
    font-family: hyperspacebold;
    font-weight: bolder;
    color: white;
    letter-spacing: 0.3vh;
    padding-bottom: 0;

    @media screen and (max-width:768px){
        font-size: 9vw;
    }

    @media screen and (max-width:468px){
        font-size: 4.5vh;
    }
`

export const CRH01 = styled.h1`
    font-size: 10px;
    font-family: hyperspacebold;
    font-weight: bolder;
    color: white;
    letter-spacing: 0.2vh;
    position: relative;
    top: 90px;
    left: 2px;

    @media screen and (max-width:1024px){
        font-size: 10px;
        top: 85px;
        left: 2px;
    }

    @media screen and (max-width:768px){
        font-size: 10px;
        top: 80px;
        left: 2px;
    }

    @media screen and (max-width:468px){
        font-size: 10px;
        top: 70px;
        left: 2px;
    }
    
`

export const CoolestP = styled.p`
    font-family: hyperspace;
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    

    padding-top: 0vh;
    padding-bottom: 2vh;

    @media screen and (max-width:768px){
        font-size: 14px;
        letter-spacing: 2px;
    }

    @media screen and (max-width:468px){
        font-size: 10px;
        letter-spacing: 2px;
        padding-bottom: 2vh;
    }
`

export const Description = styled.p`
    font-family: hyperspace;
    font-size: 13px;
    color: white;
    line-height: 2;
    font-weight: 700;
    width: 50%;

    @media screen and (max-width:768px){
        font-size: 10px;
        letter-spacing: 2px;
        width: 80%;
    }

    @media screen and (max-width:468px){
        font-size: 10px;
        letter-spacing: 2px;
        width: auto;
    }

`
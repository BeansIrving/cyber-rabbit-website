import styled from "styled-components";
import intro from '../../Image/introductionAssets/Group165.webp'
import nonhover from '../../Image/introductionAssets/Nonhovercopy.webp'
import hover from '../../Image/introductionAssets/hovercopy.webp'
import hyperspace from '../../Font/Hyperspace.otf'
import binaria from '../../Font/features.ttf'
import excluded from '../../Font/Excluded.ttf'

export const IntroContainer = styled.div`
    background-color: #000;
    display: flex;
    justify-content: flex-start;
 
    padding: 0 15vh;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 0;
    align-items: flex-end;
    padding-bottom: 15vh;

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: binaria;
        src: url(${binaria});
    }

    @font-face {
        font-family: excluded;
        src: url(${excluded});
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
    flex-wrap: wrap;

    @media screen and (max-width:1920px){
        width: 72vw;
    }

    @media screen and (max-width:1366px){
        width: 72vw;
    }

    @media screen and (max-width:1024px){
        width: auto;
    }
`

export const IntroColumn = styled.div`

    height: auto;

    @media screen and (max-width:1024px){
        width: auto;
    }

    @media screen and (max-width:768px){
        width: 90%;
    }
    

    @media screen and (max-width:468px){
    
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
    padding-top: 70px;
    background-image: url(${intro});
    background-repeat: no-repeat;
    background-position: left;
    height: 38vh;
    background-size: contain;

    @media screen and (max-width:500px){
          
        width: 95%;
        height: auto;
        background: rgba(0, 0, 0, 0.4);
    }
`

export const CRH1 = styled.h1`
    font-size: 70px;
    font-family: Century Gothic;
    
    color: white;
    letter-spacing: 0.3vh;
    padding-bottom: 0;
    text-transform: uppercase;

    @media screen and (max-width:768px){
        font-size: 8vw;
    }

    @media screen and (max-width:468px){
        font-size: 4.5vh;
    }
`

export const CRH01 = styled.h1`
    font-size: 10px;
    font-family: Century Gothic;
    font-weight: bolder;
    color: white;
    letter-spacing: 0.2vh;
    position: absolute;
    top: 19%;
    left: 0.5%;
    transform: translate(-0.5%, -19%);

    @media screen and (max-width:1920px){
        top: 19%;
        left: 0.5%;
        transform: translate(-0.5%, -19%);
    }

    @media screen and (max-width:1024px){
        font-size: 10px;
     
    }

    @media screen and (max-width:768px){
        font-size: 10px;
 
    }

    @media screen and (max-width:468px){
        font-size: 10px;
 
    }
    
`

export const CoolestP = styled.p`
    font-family: Century Gothic;
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    
    letter-spacing: 0.1vh;
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
    font-family: Century Gothic;
    font-size: 13px;
    color: white;
    line-height: 2;
    font-weight: 700;
    width: 40%;
    
    letter-spacing: 0.2vh;

    @media screen and (max-width:1366px){
        font-size: 10px;
        letter-spacing: 2px;
        width: 60%;
    }

    @media screen and (max-width:1366px){
        font-size: 10px;
        letter-spacing: 2px;
        width: 50%;
    }

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

export const IntroColumn2 = styled.a`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    margin-top: 3vh;
    text-decoration: none;
`

export const BtnDiscord = styled.img`
    width: 45vh;
    height: auto;
`

export const BtnMint = styled.button`
    padding: 20px 55px;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: transparent;
    background-image: url(${nonhover});
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1vh;
    margin-right: 2vh;
    font-family: oversouth;
    background-color: transparent;
    transition:.5s all ease-in;
    :hover{
      
        background-image: url(${hover});
    }
`


import styled from "styled-components";
import bg from '../../Image/bg/bg.png'
import hyperspace from '../../Font/HyperspaceRaceVariable.ttf'
import features from '../../Font/features.ttf'

export const AnimationContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15vh;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: features;
        src: url(${features});
    }
`

export const AnimationBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 8px 8px rgba(0,0,0,1) inset;
`

export const Button = styled.img`
    display: flex;
    justify-content: flex-start;
    height: 10vh;
    width: auto;
    cursor: pointer;
    z-index: 5;
    opacity: 0.5;

    &:hover{
        transition: .2s all ease-in-out;
        opacity: 1.0;
    }

    @media screen and (max-width:468px){
        height: 8vh;
        width: auto;
    }
`

export const AnimationRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AnimationColumn = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:1024px){
        
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5vh;
`

export const AnimationH1 = styled.h1`
    font-family: features;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 5vh;
    font-size: 5vh;

    @media screen and (max-width:1024px){
        text-align: center;
        padding-bottom: 2.5vh;
        width: auto;
        padding:2vh 10vh;
    }

    @media screen and (max-width:768px){
        text-align: center;
        padding-bottom: 2.5vh;
        width: auto;
        padding:2vh 5vh;
        font-size: 4vh;
    }
    
`

export const AnimationDes = styled.p`
    width: 80%;
    padding-left: 2vh;

    @media screen and (max-width:1024px){
        width: auto;
        padding:0vh 10vh;
    }

    @media screen and (max-width:768px){
   
        
        padding:0vh 5vh;
        font-size: 2vh;
    }
`

export const ImgTrailer = styled.img`
    height: 40vh;

    @media screen and (max-width:768px){
        height: auto;
        width: 40vh;
    }
`
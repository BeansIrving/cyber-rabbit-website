import styled from "styled-components"
import bg from '../../Image/bg/roadmap-bg.png'
import upperTitle from '../../Image/roadmapAssets/asset1.png'
import lowerTitle from '../../Image/roadmapAssets/asset2.png'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import featuresFont from '../../Font/features.ttf'

export const RoadmapContainer = styled.div`
    background: #000;
    display: flex;
  
    padding: 0 15vh;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
    justify-content: center;
    
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
        padding: 0 5vh;
        padding-bottom: 15vh;
    }

    @media screen and (max-width:768px){
        padding: 0 5vh;
    }

    @media screen and (max-width:468px){
        padding: 0 2vh;
    }
`

export const RoadmapBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 110vh;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const RoadmapUpperTitle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 25vh;
    overflow: hidden;
    background-image: url(${upperTitle});
    background-repeat: no-repeat;
    background-position: 40% 50%;

    @media screen and (max-width:1024px){
        background-size: 55vh;
        background-position: 40% 50%;
    }
    @media screen and (max-width:1024px){
        background-size: 55vh;
        background-position: 40% 50%;
    }

    
    @media screen and (max-width:768px){
        background-size: 35vh;
        background-position: 40% 40%;
    }
`

export const RoadmapBottomTitle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 30vh;
    overflow: hidden;
    background-image: url(${lowerTitle});
    background-repeat: no-repeat;
    background-size: 60vh;
    background-position: 45% 90%;

    @media screen and (max-width:1024px){
        background-size: 55vh;
        background-position: 45% 80%;
    }
    @media screen and (max-width:1024px){
        background-size: 55vh;
        background-position: 45% 75%;
    }

    
    @media screen and (max-width:768px){
        background-size: 35vh;
        background-position: 45% 70%;
    }
`

export const RoadmapContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding: 0vw;
    display: flex;
`

export const RoadmapRow = styled.div`
    display: flex;
    width: auto;
`

export const RoadmapColumn = styled.div`
    display: flex;
    padding: 12vh 0vh;
`

export const RoadmapTitle = styled.h1`
    font-family: featuresFont;
    font-size: 4vw;
    text-transform: uppercase;
    color: white;   
  

    @media screen and (max-width:1024px){
        font-size: 7vh;
    }

    @media screen and (max-width:768px){
        font-size: 4vh;
    }
`


export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
`
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
    padding: 0 0vh;
    height: 110vh;
    width: 100%;
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
        
    }

    @media screen and (max-width:768px){

    }

    @media screen and (max-width:468px){
       
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
    background-position: 40% 80%;

    @media screen and (max-width:1024px){
        background-size: 45vh;
        background-position: 40% 70%;
    }


    
    @media screen and (max-width:768px){
        background-size: 35vh;
        background-position: 40% 70%;
    }
`

export const RoadmapBottomTitle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 33vh;
    overflow: hidden;
    background-image: url(${lowerTitle});
    background-repeat: no-repeat;
    background-size: 60vh;
    background-position: 45% 100%;

  
    @media screen and (max-width:1024px){
        height: 40vh;
        background-size: 55vh;
        background-position: 45% 75%;
    }

    
    @media screen and (max-width:768px){
        height: 33vh;
        background-size: 35vh;
        background-position: 45% 80%;
    }
`

export const RoadmapContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding: 0vw;
    display: flex;
    padding-top:5vh;
`

export const RoadmapRow = styled.div`
    display: flex;
    width: auto;
`

export const RoadmapColumn = styled.div`
    flex-wrap: wrap;
    
    
`

export const ColumnContent = styled.div`
    display: flex;
    padding: 12vh 0vh;
    padding-right: 10vh;
    justify-content: center;
    
    @media screen and (max-width:1024px){
        padding: 12vh 0vh;
    }
`

export const ColumnContent2 = styled.div`
    width: 100vw;
    padding-top: 8vh;
`

export const RoadmapTitle = styled.h1`
    font-family: featuresFont;
    font-size: 4vw;
    text-transform: uppercase;
    color: white;   

    @media screen and (max-width:1366px){
        font-size: 8vh;
    }

    @media screen and (max-width:1024px){
        font-size: 7vh;
    }

    @media screen and (max-width:768px){
        font-size: 4vh;
    }
`

export const RoadmapH1 = styled.h1`
    font-family: featuresFont;
    font-size:  2vh;
    color: white;  
    text-align :center ;
    letter-spacing: .3vh;
`


export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const RoadmapLine = styled.img`
    height:10vh;

    margin: 2vh 0vh;
`
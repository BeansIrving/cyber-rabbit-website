import styled from "styled-components"
import bg from '../../Image/bg/roadmapbg.webp'

import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import featuresFont from '../../Font/features.ttf'

export const RoadmapContainer = styled.div`
    /* background: #000; */
    display: flex;
    justify-content: center;
    margin:150px 0vh;
    height: 100vh;
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
    background-position: top;
    -webkit-mask-image: 
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 46%, 
    rgba(0, 0, 0, 1) 60%, transparent 100%);
   
`

export const RoadmapContent = styled.div`
    z-index: 3;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
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
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
    }
`


export const RoadmapImg = styled.img`
    height: 150px;

    @media screen and (max-width:1600px){
        height: 110px;
    }

    @media screen and (max-width:1366px){
        height: 90px;
    }

    @media screen and (max-width:468px){
        height: 70px;
    }
`

export const DetailsImg = styled.img`
    height: 120px;

    @media screen and (max-width:1600px){
        height: 80px;
    }

    @media screen and (max-width:1366px){
        height: 60px;
    }

    @media screen and (max-width:468px){
        margin-top: 20px;
        height: 44px;
    }
 
`

export const SwiperContainer = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width:1366px){
        display: none;
    }

`

export const SwiperContainer1366px = styled.div`
    display: none;
    justify-content: center;

    @media screen and (max-width:1366px){
        display: flex;
    }

`

export const PhaseImg = styled.img`
    height: 480px;
`
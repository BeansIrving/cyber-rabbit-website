import styled from "styled-components";
import bg from '../../Image/bg/Trailer.webp'
import hyperspace from '../../Font/HyperspaceRaceVariable.ttf'
import features from '../../Font/features.ttf'

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15vh;
    height: 105vh;
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
    
    @media screen and (max-width:1024px){
        height: 120vh;
    }

    @media screen and (max-width:768px){
        padding: 0 2vh;
    }

    @media screen and (max-width:468px){
        padding: 0 2vh;
    }


`

export const AnimationBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-mask-image: 
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 46%, 
    rgba(0, 0, 0, 1) 60%, transparent 100%);
`


export const AnimationRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AnimationColumn = styled.div`
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width:1366px){
        flex-wrap: wrap;
    }
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5vh;

    @media screen and (max-width:1024px){
        padding-top: 15vh;
    }
`

export const AnimationH1 = styled.h1`
    font-family: features;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 1vh;
    font-size: 4vh;

    @media screen and (max-width:1024px){
        text-align: center;
        padding-bottom: 2.5vh;
        padding:2vh 0vh;
    }

    @media screen and (max-width:768px){
        text-align: center;
        padding-bottom: 2.5vh;
        padding:2vh 5vh;
        font-size: 4vh;
    }
    
`

export const AnimationDes = styled.p`

    padding-right: 1000px;

    @media screen and (max-width:1660px){
        padding-right: 700px;
    }

    @media screen and (max-width:1366px){
        padding-right: 500px;
    }

    @media screen and (max-width:1220px){
        padding-right: 300px;
    }

    @media screen and (max-width:1024px){
        text-align: center;
        padding:0vh 0vh;
    }

    @media screen and (max-width:768px){
        padding:0vh 5vh;
        font-size: 2vh;
    }
`



export const ImgWrapper = styled.div`
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width:1024px){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-bottom: 50vh;
    }
`

export const WatchTrailer = styled.h2`
    position: absolute;
    font-family:features;
    text-transform: uppercase;
    padding-top: 2vh;
    bottom: -40px;
    
`


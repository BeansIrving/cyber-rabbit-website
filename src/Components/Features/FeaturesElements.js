import styled from "styled-components";
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import featuresFont from '../../Font/features.ttf'

export const FeaturesContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: flex-start;
    padding: 15vh 15vh;
    height: 161vh;
    width: auto;
    position: relative;
    z-index: 1;

    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }

    @media screen and (max-width:1700px) {
        height: 180vh;
    }

    @media screen and (max-width:1500px) {
        height: 170vh;
    }

    @media screen and (max-width:1366px) {
        height: 150vh;
    }

    @media screen and (max-width:1050px) {
        height: 130vh;
    }
    
    @media screen and (max-width:1024px){
        padding: 10vh 0vh;
        height: 140vw;
    }

    @media screen and (max-width:768px){
        padding: 10vh 0vh;
        align-items: center;
        height: 135vh;
    }

    @media screen and (max-width:468px){
        padding: 0 0vh;
        align-items: center;
        height: 140vh;
    }
`

export const FeaturesBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;

    overflow: hidden;
`

export const FeaturesContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding-top: 5vw;
    display: flex;
    justify-content: flex-start;
`

export const FeaturesRow = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
`
export const FeaturesColumn = styled.div`
    flex-wrap: wrap;
   
    @media screen and (max-width:1024px){
        display: flex;
        justify-content: center;
    }
`

export const DescriptionContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 47%;
    

    @media screen and (max-width:1024px){
        width: auto;
        padding: 0 10vh;
    }

    @media screen and (max-width:468px){
        width: auto;
        padding: 0 2vh;
    }
`

export const Design = styled.img`
    height: 3vw;
    width: auto;
    padding-left: 5vh;
`

export const FeaturesH1 = styled.h1`
    font-size: 4vw;
    color: white;
    letter-spacing: 0.5vh;
    font-family: featuresFont;
`

export const FeaturesDescription = styled.p`
    font-size: 1.5vh;
    color: gray;
    letter-spacing: 0.2vh;
    font-family: featuresFont;
 
    padding-left: 3vh;
    

    @media screen and (max-width:468px){
        padding-left: 0vh;
    }
`

export const FeaturesFlexContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: auto;
    padding-top: 10vh;
    padding-left: 10vh;
    
    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0vh;
        padding-left: 0vh;
    }

    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0vh;
        padding-left: 0vh;
    }
`
export const ColumnContent = styled.div`
    width: auto;
    z-index: 1;
    

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const CardImg = styled.img`
    height: 30vw;
    width: auto;
    z-index: 4;
    position: relative;
    left: 2vh;
    @media screen and (max-width:1024px){
        height: 60vw;
        left: 0vh;
    }

    @media screen and (max-width:768px){
        height: 60vw;
        left: 0vh;
    }

    @media screen and (max-width:468px){
        height: 100vw;
        left: 0vh;  
    }
`
export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
    height: auto;
    z-index: 0;
    
    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
        width: 60%;
        
    }

    @media screen and (max-width:768px){
        display: flex;
        justify-content: center;
        
    }

    @media screen and (max-width:468px){
        display: flex;
        justify-content: center;
    }
`

export const CardText = styled.div`
    background-color: rgba(255, 0, 0, 0.2);
    padding: 5vh;
    padding-top: 3vh;
    width: auto;
    margin-top: 6vh;
    z-index: 0;

    @media screen and (max-width:1024px){
        
        padding: 5vh;
        padding-top: 3vh;
        width: auto;
        margin-top: 0vh;
        height: auto;

        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (max-width:768px){
        
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (max-width:468px){
        position: relative;
        top: 0vh;
        left: 0vh;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const CardDescription = styled.p`
    font-size: 2vh;
    font-family: featuresFont;
    color: white;
    width:100%;
`
export const ImgCard = styled.img`
    width: auto;
    height: 5vh;
`

export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
`
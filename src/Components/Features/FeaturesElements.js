import styled from "styled-components";
import featuresFont from '../../Font/features.ttf'
import bg from '../../Image/bg/feature-bg.png'

export const FeaturesContainer = styled.div`
    /* background: #000; */
    display: flex;
    justify-content: flex-start;
    padding: 15vh 15vh;
    height: 161vh;
    align-items: center;
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
        height: 160vh;
    }
    
    @media screen and (max-width:1024px){
        padding: 10vh 0vh;
        height: 120vh;
    }

    @media screen and (max-width:768px){
        padding: 10vh 0vh;
        align-items: center;
        height: 110vh;
    }

    @media screen and (max-width:468px){
        padding: 0 0vh;
        align-items: center;
        height: 110vh;
    }
`

export const FeaturesBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    overflow: hidden;

    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 8px 8px #000 inset;
`

export const FeaturesContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding-top: 5vw;
    display: flex;
   
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
    font-size: 2vh;
    color: white;
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
    
    @media screen and (max-width:1366px){
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0vh;
        padding-left: 0vh;
    }
 

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


export const CardImg = styled.img`
    height: 30vw;
    width: auto;
    z-index: 5;
    position: relative;
    left: 0.7vh;
    @media screen and (max-width:1024px){
        height: 60vw;
        left: 0vh;  
        display: none;
        
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

export const ColumnContent = styled.div`
    width: auto;

    order: 1;

  

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
        order: 2;
       
    }
`

export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    height: auto;
    z-index: 0;
    order: 2;
    z-index: 5;
    padding:5vh 0vh;
  

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
        width: 70%;
        order: 1;
        left: 0;
    }

    @media screen and (max-width:768px){
        display: flex;
        justify-content: center;
        width: 75%;
        
    }

    @media screen and (max-width:468px){
        display: flex;
        justify-content: center;
        width: 90%;
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
    width:20vw;
   

    @media screen and (max-width:1024px){
        width:auto;
    }
`
export const ImgCard = styled.img`
    width: auto;
    height: 10vh;
`

export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
`


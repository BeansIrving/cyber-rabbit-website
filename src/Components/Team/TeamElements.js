import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'
import bg from '../../Image/bg/team-bg.webp'

export const TeamContainer = styled.div`
    /* background: #3d050c; */
    display: flex;
    padding: 5vh 15vh;
    height: 140vh;
    position: relative;
    z-index: 1;
    align-items: center;
    
    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }

    
    @media screen and (max-width:1660px){
        padding: 5vh 5vh;
        height: 170vh;
    }

    @media screen and (max-width:1366px){
        padding: 5vh 10vh;
        height: 180vh;
    }

    @media screen and (max-width:1024px){
        padding: 5vh 5vh;
    }

    @media screen and (max-width:768px){
        padding: 2vh 2vh;
        height: 170vh;
    }

    @media screen and (max-width:468px){
        padding: 2vh 2vh;
        height: 180vh;
    }


 

`

export const TeamBg = styled.div`
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
    -webkit-mask-image: 
    linear-gradient(180deg, transparent 5%, rgba(0, 0, 0, 1) 26%, 
    rgba(0, 0, 0, 1) 60%, transparent 100%);
`

export const TeamContent = styled.div`
    max-width: 1600px;
    position: absolute;
    display: flex;
    
  

`

export const TeamRow = styled.div`
    display: flex;
 
    
`

export const TeamColumn = styled.div`
    
    flex-wrap: wrap;

   
`

export const TeamH1 = styled.h1`
    font-family: featuresFont;
    font-size: 2vw;
    color: white;
    letter-spacing: 0.7vh;

    @media screen and (max-width:1024px){
        font-size: 4vw;
    }

    @media screen and (max-width:468px){
        font-size: 4vw;
        padding-left: 2vh;
    }
    
  
`

export const TeamH1v2 = styled.h1`
    font-family: featuresFont;
    font-size: 3.5vw;
    color: white;
    letter-spacing: 0.7vh;

    @media screen and (max-width:1024px){
        font-size: 5.5vw;
    }

    @media screen and (max-width:468px){
        font-size: 5.5vw;
        padding-left: 2vh;
    }
`

export const TeamP = styled.p`
    font-family: featuresFont;
    font-size: 2vh;
    color: white;
    letter-spacing: 0.2vh;
    text-align: center;
    padding:2vh 25vh;
    padding-bottom: 0;

    @media screen and (max-width:1024px){
        font-size: 1.8vh;
        padding:3vh 10vh;
        padding-bottom: 0;
        width: 100%;
    }

    @media screen and (max-width:768px){
        font-size: 1.5vh;
        padding:3vh 5vh;
        padding-bottom: 0;
        width: 100%;
    }

    @media screen and (max-width:468px){
        font-size: 1.5vh;
        padding:3vh 2vh;
        padding-bottom: 0;
        width: 100%;
    }
`

export const TeamName = styled.h1`
    font-family: featuresFont;
    font-size: 3vh;
    letter-spacing: 0.7vh;
    text-transform: uppercase;

    @media screen and (max-width:468px){
        font-size: 2vh;
    }
`

export const TeamTitle = styled.p`
    font-family: featuresFont;
    font-size: 2vh;
    letter-spacing: 0.3vh;
    text-transform: uppercase;
    color: red;
    @media screen and (max-width:468px){
        font-size: 1.5vh;
    }
`

export const TeamDescription = styled.p`
    padding-top: 2vh;
    font-family: featuresFont;
    font-size: 1.8vh;
    letter-spacing: 0.3vh;
    text-transform: uppercase;
    color: #fff;
    @media screen and (max-width:468px){
        font-size: 1.5vh;
        line-height: normal;
    }
`

export const ImgWrapper = styled.div`


    height: auto;
    width: auto;

    @media screen and (max-width:768px){
        height: auto;
    }

    @media screen and (max-width:468px){
        height: auto;
    }
`

export const TeamImg = styled.img`
    height: auto;
    width: auto;
`

export const ColumnContent = styled.div`
    display: flex;
    padding: 0vh 0vh;
    padding-right: 0vh;
    justify-content: center;
    
    @media screen and (max-width:1024px){
        padding: 0vh 0vh;
    }
`

export const ColumnContent2 = styled.div`
    width: auto;
    padding-top: 8vh;
`

export const TextWrapper = styled.div`
    
`
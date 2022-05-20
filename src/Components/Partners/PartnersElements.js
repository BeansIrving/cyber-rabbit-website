import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'

export const PartnersContainer = styled.div`
    background: #3d050c;
    display: flex;
    justify-content: center;
    padding: 5vh 0vh;
    height: auto;
    position: relative;
    z-index: 1;
    align-items: center;
    
    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }
    
`

export const PartnersBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background-image: linear-gradient( rgba(255,0,0,0), rgba(0,0,0,0.9));
    box-shadow: 0 0 8px 8px rgba(0,0,0,1) inset;
`

export const PartnersContent = styled.div`
    max-width: 1200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PartnersRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PartnersColumn = styled.div`
    flex-wrap: wrap;
   
`
export const ColumnContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    
    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const PartnerH1 = styled.h1`
    font-family: featuresFont;
    font-size: 4vw;
    text-transform: uppercase;
    text-align: center;
    color: white;  

    @media screen and (max-width:1024px){
        font-size: 7vh;
    }
`



export const Gallery = styled.div`
    margin: 2vh;
    width: auto;
`

export const Img = styled.img`
    position: relative;
    height: auto;
    width: auto;
    margin: 0vh;
    display: flex;
    justify-content: center;
    align-self: center;
`
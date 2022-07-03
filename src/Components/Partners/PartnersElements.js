import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'
import bg from '../../Image/bg/partnersbg.webp'

export const PartnersContainer = styled.div`

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
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-mask-image: 
    linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 46%, 
    rgba(0, 0, 0, 1) 66%, transparent 100%);
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
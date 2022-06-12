import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'

export const NFTContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: flex-start;
    padding: 0vh 0vh;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;
    
    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }
    
`

export const NFTContent = styled.div`
    max-width: 1200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NFTRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NFTColumn = styled.div`
    flex-wrap: wrap;
`

export const ImgWrapper = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    
`

export const ImgNFT = styled.img`

    height: auto;
    width: 100%;
    position: relative;
    left: 0;

`


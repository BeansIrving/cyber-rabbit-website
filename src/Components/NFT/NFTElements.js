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
export const NFTBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
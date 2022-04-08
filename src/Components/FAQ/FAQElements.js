import styled from "styled-components"
import featuresFont from '../../Font/features.ttf'
import bg from '../../Image/bg/FAQ-bg.png'

export const FAQContainer = styled.div`
    background: #3d050c;
    display: flex;
    width: auto;
    padding: 5vh 15vh;
    height: 100vh;
    position: relative;
    z-index: 1;
    
    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }
`

export const FAQBg = styled.div`
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
`

export const FAQContent = styled.div`
    max-width: 1600px;
    position: absolute;
    display: flex;
`

export const FAQRow = styled.div`
    display: flex;
`

export const FAQColumn = styled.div`
    display: flex;
`
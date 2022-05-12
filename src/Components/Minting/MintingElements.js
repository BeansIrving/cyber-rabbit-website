import styled from 'styled-components'
import hyperspace from '../../Font/Hyperspace.otf'
import binaria from '../../Font/features.ttf'

export const MintingContainer = styled.div`
    background: #000;
    display: flex;
    padding: 0 0px;
    height: 100vh;
    width: 100%;
    z-index: 1;
    padding-top: 12vh;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: binaria;
        src: url(${binaria});
    }
`

export const MintingBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100vw;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    z-index: 1000;

    @media screen and (max-width:468px){

        background-attachment: fixed;
        background-position:50% 50%;
        
    }   
`

export const MintingContent = styled.div`
    z-index: 3;
    max-width: 1000px;
    position: absolute;
    padding: 0vw;
   
`

export const MintingRow = styled.div`
    display: flex;
`

export const MintingColumn = styled.div`
    flex-wrap: wrap;
    justify-content: center;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4vh;
    position: relative;
    left: 25vh;

    @media screen and (max-width:1366px){
     
    }

    @media screen and (max-width:1024px){
        left: 0;
        justify-content: center;
    }
`

export const BtnConnect = styled.button`
    background: transparent;
    padding: 1vh;
    color: white;
    border: 2px solid transparent;
    border-image: linear-gradient(90deg, #b11000 , #5b0009);
    border-image-slice: 1;
    cursor: pointer;

    :hover{
        border: 2px solid transparent;
        border-image: linear-gradient(90deg, #5b0009 , #b11000);
        border-image-slice: 1;
        transition:.4s all ease-in;
    }

   
`

export const Container = styled.div`
    flex-wrap: wrap;
    height: auto;
    width: 60vh;
    margin-right: 0vh;
    margin-bottom: 5vh;

    @media screen and (max-width:1366px){
        width: 60vh;
    }

    @media screen and (max-width:768px){
        width: 50vh;
    }

    @media screen and (max-width:768px){
        width: auto;
    }
`

export const Card = styled.div`
    height: auto;
    width: auto;
    background-color: rgba(52,1,6,0.1);
    padding: 5vh 3vh;
    border: 4px solid #b11000;
    flex-wrap: wrap;
`

export const MintTxt = styled.p`
    font-size: 4vh;
    font-family: binaria;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.3vh;
    line-height: normal;
`

export const MintH1 = styled.p`
    font-size: 2.5vh;
    font-family: binaria;
    letter-spacing: 0.3vh;
    line-height: normal;
    width: auto;
`

export const MintDes = styled.p`
    text-align: center;
    font-family: binaria;
    letter-spacing: 0.3vh;
    padding:5vh 5vh;
`

export const Span = styled.span`
    color: #b11000;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
   
`

export const MintH1Hide = styled.p`
    color: transparent;
 
`

export const BtnMintWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3vh;
`

export const BtnMint = styled.button`
    text-transform: uppercase;
    font-family: binaria;
    font-weight: bold;
    border: none;
    font-size: 3vh;
    padding: 0.5vh 3vh;
    background: linear-gradient(to right, #b41100 , #5b0009);
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    color: white;
    letter-spacing: 0.3vh;
    cursor: pointer;
`

export const BtnMax = styled.button`
    text-transform: uppercase;
    font-family: binaria;
    font-weight: bold;
    border: none;
    font-size: 1vh;
    padding: 0.2vh 2vh;
    border-radius: 5px;
    margin-left: 4vh;
    margin-bottom: 0.5vh;
    background: linear-gradient(to right, #b41100 , #5b0009);
    color: white;
    letter-spacing: 0.3vh;
    cursor: pointer;
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`

export const InfoImg = styled.img`
    height: 6vh;
`

export const BtnMinus = styled.button`
    color: #fff;
    background: transparent;
    border: none;
`

export const BtnPlus = styled.button`
    color: #fff;
    background: transparent;
    border: none;
`
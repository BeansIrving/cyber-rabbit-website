import styled from 'styled-components'

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
    position: relative;
    left: 50vh;
    padding-bottom: 2vh;
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
    
`
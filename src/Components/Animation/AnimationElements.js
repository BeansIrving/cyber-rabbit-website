import styled from "styled-components";

export const AnimationContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
`

export const AnimationBg = styled.div`
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

export const Button = styled.img`
    display: flex;
    justify-content: flex-start;
    height: 10vh;
    width: auto;
    cursor: pointer;
    z-index: 5;
    opacity: 0.5;

    &:hover{
        transition: .2s all ease-in-out;
        opacity: 1.0;
    }

    @media screen and (max-width:468px){
        height: 8vh;
        width: auto;
    }
`
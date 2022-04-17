import styled from "styled-components"

import bg from '../../Image/bg/CharacterEquipments-bg.png'
import intro from '../../Image/introductionAssets/Group165.png'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'

export const CyberContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: flex-start;
    padding: 0 15vh;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
    align-items: flex-end;
    padding-bottom: 15vh;

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: hyperspacebold;
        src: url(${hyperspacebold});
    }

    
    @media screen and (max-width:1024px){
        padding: 0 5vh;
        padding-bottom: 15vh;
    }

    @media screen and (max-width:768px){
        padding: 0 5vh;
        align-items: center;
    }

    @media screen and (max-width:468px){
        padding: 0 2vh;
        align-items: center;
    }
`

export const CyberBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const CyberRabbit = styled.img`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 1;
`

export const CyberRabbitText = styled.img`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 1;

    &.animation{
        animation: rabbitText linear 4s;
    }

    @keyframes rabbitText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`

export const CyberRabbits = styled.img`
    position: absolute;
    left: 50%;
    top: 17%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 1;
`

export const CyberHead = styled.img`
    position: absolute;
    bottom: 28%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 1;

    &.animation{
        animation:head 3s normal forwards;
    }

    @keyframes head {
        0% {
            bottom: 28%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        100% { 
            bottom: 35%;
            left: 70%;
            transform: translate(-70%, 0);
         }
    }
`


export const CyberHeadGearText = styled.img`
    position: absolute;
    top: 5%;
    left: 85%;
    transform: translate(-85%, 0);
    width: 40vh;
    height: auto;
    overflow: hidden;
    z-index: 0;

    &.animation{
        animation: gearText linear 4s;
    }

    @keyframes gearText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`


export const CyberGear = styled.img`
    position: absolute;
    left: 50%;
    bottom: 15%;
    transform: translate(-55%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 0;

    &.animation{
        animation:gear 3s normal forwards;
    }

    @keyframes gear {
        0% {
            left: 50%;
            bottom: 15%;
            transform: translate(-55%, 0);
        }
        100% { 
            left: 30%;
            bottom: 35%;
            transform: translate(-30%, 0);
         }
    }
`

export const CyberGearText = styled.img`
    position: absolute;
    left: 20%;
    top: 5%;
    transform: translate(-20%, 0);
    width: 30vh;
    height: auto;
    overflow: hidden;
    z-index: 0;

    &.animation{
        animation: gearText linear 4s;
    }

    @keyframes gearText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`


export const CyberSuit = styled.img`
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation:suit 3s normal forwards;
    }

    @keyframes suit {
        0% {
            top: 1%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        100% { 
            top: 8%;
            left: 30%;
            transform: translate(-50%, 0); 
         }
    }
`

export const CyberSuitText = styled.img`
    position: absolute;
    top: 32%;
    left: 13%;
    transform: translate(-13%, 0); 
    width: 25vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation: gearText linear 5s;
    }

    @keyframes gearText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`



export const CyberLHand = styled.img`
    position: absolute;
    top: 8%;
    left: 40%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation:lhand 3s normal forwards;
    }

    @keyframes lhand {
        0% {
            top: 8%;
            left: 40%;
            transform: translate(-50%, 0);
        }
        
        100% { 
            top: 30%;
            left: 30%;
            transform: translate(-50%, 0);
        }
    }
`

export const CyberLHandText = styled.img`
    position: absolute;
    top: 30%;
    left: 92%;
    transform: translate(-92%, 0);
    width: 40vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation: lhandText linear 5s;
    }

    @keyframes lhandText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`

export const CyberRHand = styled.img`
    position: absolute;
    top: 10%;
    left: 59.5%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation:rhand 3s normal forwards;
    }

    @keyframes rhand {
        0% {
            top: 10%;
            left: 59.5%;
         
            transform: translate(-50%, 0);
        }

        100% { 
            top: 0%;
            left: 69%;
            transform: translate(-50%, 0); 
        }
        
       
    }
`

export const CyberRHandText = styled.img`
    position: absolute;
    bottom: 8%;
    left: 10%;
    transform: translate(-10%, 0);
    width: 40vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation: handText linear 5s;
    }

    @keyframes handText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`

export const CyberPants = styled.img`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 2;

    &.animation{
        animation:pants 3s normal forwards;
    }

    @keyframes pants {
        0% {
            top: 15%;
            left: 50%;
            transform: translate(-50%, 0);
        }
        100% { 
            top: 35%;
            left: 70%;
            transform: translate(-50%, 0); 
         }
    }
`

export const CyberPantsText = styled.img`
    position: absolute;
    bottom: 15%;
    left: 95%;
    transform: translate(-95%, 0);
    width: 40vh;
    height: auto;
    overflow: hidden;
    z-index: 3;

    &.animation{
        animation: pantsText linear 5s;
    }

    @keyframes pantsText {
        0% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
         }
    }
`

export const CyberContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    position: absolute;
    padding: 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CyberRow = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    flex-wrap: wrap;
`

export const CyberColumn = styled.div`
    display: flex;
`

export const HidePCContainer = styled.div`
    

    @media screen and (max-width:1024px){
        display: none;
    }
`
import styled from "styled-components"

import bg from '../../Image/bg/CharacterEquipments-bg.png'
import intro from '../../Image/introductionAssets/Group165.png'
import hyperspace from '../../Font/Hyperspace.otf'
import hyperspacebold from '../../Font/HyperspaceBold.otf'
import featuresFont from '../../Font/features.ttf'

export const CyberContainer = styled.div`
    /* background: #000; */
    display: flex;
    justify-content: center;
    padding: 10vh 15vh;
    height: 120vh;
    width: 100%;
    position: relative;
    z-index: 1;
    padding-bottom: 15vh;
    align-items: center;

    @font-face {
        font-family: featuresFont;
        src: url(${featuresFont});
    }

    @font-face {
        font-family: hyperspace;
        src: url(${hyperspace});
    }

    @font-face {
        font-family: hyperspacebold;
        src: url(${hyperspacebold});
    }

    @media screen and (max-width:1660px){
        padding: 0 5vh;
        height: 105vh;
    }

    @media screen and (max-width:1366px){
        padding: 0 5vh;
        height: 250vh;
    }
    
    @media screen and (max-width:1024px){
        padding: 0 5vh;
        height: 220vh;
    }

    @media screen and (max-width:768px){
        padding: 0 5vh;
        height: 400vh;
        align-items: center;
    }

    @media screen and (max-width:468px){
        padding: 0 2vh;
        align-items: center;
        height: 500vh;
    }
`

export const CyberBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    overflow: hidden;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 8px 8px #000 inset;
`

export const CyberRabbit = styled.img`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
`

export const CyberRabbitText = styled.img`
    position: absolute;
    left: 50%;
    bottom: -5%;
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
    z-index: 0;
    cursor: pointer;
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
    left: 100%;
    transform: translate(-100%, 0);
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
    left: 15%;
    top: 5%;
    transform: translate(-15%, 0);
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
    left: 8%;
    transform: translate(-8%, 0); 
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
    left: 98%;
    transform: translate(-98%, 0);
    width: 40vh;
    height: auto;
    overflow: hidden;
    z-index: 4;

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
    bottom: 4%;
    left: 3%;
    transform: translate(-3%, 0);
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
    left: 100%;
    transform: translate(-98%, 0);
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
    display: none;

    @media screen and (max-width:1366px){
        display: inline;
    }
`

export const HidePCContainer = styled.div`
    cursor: pointer;
    
    @media screen and (max-width:1366px){
        display: none;
    }
`

export const RabbitMobile = styled.img`
    height: auto;  
    width: 20vh;

    @media screen and (max-width:1024px){
        display: flex;
        justify-content: center;
    }
`

export const CyberRabbitFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50vw;

    @media screen and (max-width: 1024px){
        width: 80vw;
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
    }
`

export const ColumnContent = styled.div`
    height: auto;
    width: auto;
    padding:2vh 5vh;
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Description = styled.p`
    color: white;
    font-size: 2vh;
    
    padding: 2.5vh 0vh;
`

export const RabbitGears = styled.img`
    height: auto;  
    width: 20vh;

    @media screen and (max-width:1024px){
        display: flex;
        justify-content: center;
    }
`

export const CyberRabbitsButton = styled.img`
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 6%;
    transform: translate(-50%, 0);
    width: 50vh;
    height: auto;
    overflow: hidden;
    z-index: 5;
    
`

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const CyberH1 = styled.h1`
    position: absolute;
    text-align: left;
    top: 5vh;
    left: 42%;
    height: auto;
    overflow: hidden;
    z-index: 5;
    font-family: featuresFont;
    text-transform: uppercase;
`
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import Orbitron from '../../Font/Binaria-Light.otf'
import bg from '../../Image/bg/bgsidebar.jpg'
import close from '../../Image/close.png'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpenAnim }) => (isOpenAnim ? '100%' : '0')};
    left: ${({ isOpenAnim }) => (isOpenAnim ? '0' : '-100%')};  
    
    @font-face {
        font-family: Orbitron;
        src: url(${Orbitron});
    }

`

export const SidebarBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    overflow: hidden;
  

`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    
`

export const CloseIcon = styled.img`
    
    height: 6vh;
    
`

export const Icon = styled.div`
    display: flex;
    position: absolute;
    top: 2vh;
    right: 3vh;
    background: transparent;
    padding: 1.5vh;
    font-size: 3vh;
    cursor: pointer;
    outline: none; 

`
export const SideLogo = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2vh;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index:1000;
    width: 100%;
    padding-bottom:10vh;
`
export const ImgLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: auto;
   

`

export const SidebarMenu = styled.ul`
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;

    
   
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    font-family: Orbitron;
    text-decoration: none;
    position:relative;
    padding: 2vh;
    padding-left: 10vh;
    color: #fff;
    cursor: pointer;


    &:hover{
        color: #871e31;
        background-color: rgba(255, 255, 255, .1);
        transition: 0.2s ease-in-out; 
    }

`

export const SidebarLinks = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    font-family: Orbitron;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    position:relative;
    letter-spacing: 0.5vh;
    padding: 2vh;
    text-shadow: 0px 2px 8px #ff0000;
    color: #fff;
    cursor: pointer;
    

    &:hover{
        color: #871e31;
        transition: 0.2s ease-in-out; 
    }

`
export const FlexboxContainer = styled.div`
    flex-wrap:wrap;
    justify-content:center;
    z-index:1000; 
    width: 100%;
    margin-bottom: 10vh;
`

export const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vh;
    float: none;
    padding-top:5vh;
    padding-right:13vh;
    padding-left:13vh;
`


export const SocialBorder = styled.a`
    display: flex;
    cursor: pointer;
    margin:.5vh;
    border: .7px solid transparent;
    border-image: linear-gradient(90deg, #b35867 , #9b2338);
    border-image-slice: 1;
    &:hover{
        background-image: linear-gradient(90deg, #b35867 , #9b2338);
    }
`

export const SocialImg = styled.img`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`


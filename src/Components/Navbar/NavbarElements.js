import styled from 'styled-components'
import league from "../../Font/features.ttf"
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: white;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: absolute;
    top: 0;
    z-index: 999;
    @font-face {
        font-family: league;
        src: url(${league});
    }


    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    margin-top: 0vh;
    width: 100%;
    padding: 0 0px;
    max-width: 1500px;
`;

export const NavLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3vh;
    padding-left: 2vh;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: league;
`;

export const LogoImg = styled.img`
    display: flex;
    height: 80%;
    width: auto;
    margin: 0 auto;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position:  absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #34d178;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavLinks = styled(LinkR)`
    border-radius: 50px;
    margin: 0 2vh;
    white-space: nowrap;
  
    color: #fff;
    font-size: 13px;
    font-family: Century Gothic;
    font-weight: bold;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    cursor: pointer;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        opacity: 0.8;
    }
`

export const LinkWrap = styled.div`
    padding: 0vh 1vh;
`

export const NavBtnLink = styled.a`
    font-family: league;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #111;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
   
    ::before{
        content: '';
        
        position: absolute;
        left: 6px;
        top: -2px;
        height: calc(100% + 4px);
        width: calc(100% - 12px);
        background: #fff;
        transition: 0.5s ease-in-out;
        transform: scaleX(0);
    }

    &:hover::before{
        transform: scaleX(1);
    }

    ::after{
        content: '';
        position: absolute;
        top: 6px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% - 12px);
        background: #fff;
        transition: 0.5s ease-in-out;
        transform: scaleY(0);
    }

    &:hover:after{
        transform: scaleY(1);
    }

`

export const Span = styled.span`
    position: relative;
    z-index: 3;
`

export const ImgLogo = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 15vh;
    width: auto;

`
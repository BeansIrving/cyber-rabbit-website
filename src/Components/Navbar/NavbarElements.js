import styled from 'styled-components'
import league from "../../Font/features.ttf"
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import movement from '../../Image/navbarAssets/movement.png';
import collab from '../../Image/navbarAssets/collab.png';
import whitepaper from '../../Image/navbarAssets/whitepaper.png';
import dao from '../../Image/navbarAssets/dao.png';
import mint from '../../Image/navbarAssets/mint.png';

import movementHover from '../../Image/navbarAssets/movementHover.png';
import collabHover from '../../Image/navbarAssets/collabHover.png';
import whitepaperHover from '../../Image/navbarAssets/whitepaperHover.png';
import daoHover from '../../Image/navbarAssets/daoHover.png';
import mintHover from '../../Image/navbarAssets/mintHover.png';

import navbarcontainer from '../../Image/navbarAssets/new-nav.png';

export const Nav = styled.nav`
    background: url(${navbarcontainer});
    background-position: center;
    background-size: auto ;
    background-repeat: no-repeat;
    height: 120px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: absolute;
    top: 0;
    z-index: 998;
    
    @font-face {
        font-family: league;
        src: url(${league});
    }

    @media screen and (max-width: 1366px){
        width: 100vw;
    }

    @media screen and (max-width: 1024px){
        
        background: transparent;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    margin-bottom: 5vh;
    width: 100%;
    padding: 0 0px;
    max-width: 1650px;
`;

export const NavLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3vh;
    padding-left: 2vh;
    margin-top: 3vh;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: league;

    @media screen and (max-width:1024px){
        display: none;
    }
`;

export const LogoImg = styled.img`
    display: flex;
    height: 80%;
    width: auto;
    margin: 0 auto;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1024px){
        display: flex;
        position: relative;
        top: -1vh;
        left: 4vh;
        float: left;
        transform: translate(0%, 60%);
        font-size: 3vh;
        cursor: pointer;
        color: #fff;
        background: #800000;
        padding: 1.5vh;
        height: auto;
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
    width: auto;
    
    @media screen and (max-width: 1024px){
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


export const NavBtnLink = styled(LinkS)`
 
    padding: 0.5vh;
`

export const NavBtnLinks = styled.a`
 
    padding: 0.5vh;
`

export const Movement = styled.img`
    cursor: pointer;
    background-image: url(${movement});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    width: 8vh;

    &:hover{
        background-image: url(${movementHover});
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
`

export const Collab = styled.img`
     cursor: pointer;
    background-image: url(${collab});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    width: 12vh;

    &:hover{
        background-image: url(${collabHover});
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
`

export const Whitepaper = styled.img`
     cursor: pointer;
    background-image: url(${whitepaper});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    width: 10vh;

    &:hover{
        background-image: url(${whitepaperHover});
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
`

export const Dao = styled.img`
     cursor: pointer;
    background-image: url(${dao});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    width: 4vh;

    &:hover{
        background-image: url(${daoHover});
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
`

export const Mint = styled.img`
    cursor: pointer;
    background-image: url(${mint});
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    width: 4vh;

    &:hover{
        background-image: url(${mintHover});
        background-position: left;
        transition: all 0.3s ease-in-out;
    }
`

export const ImgLogo = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: auto;

`
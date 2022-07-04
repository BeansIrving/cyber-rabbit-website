import styled from "styled-components";
import bg from '../../Image/nftstakingAssets/stakingbg.webp'
import placeholder from '../../Image/nftstakingAssets/stakenow.webp'

export const Container = styled.div`
    flex-wrap: wrap;
    height: 100vh;
    padding: 0 100px;
    position: relative;
    z-index: 1;

`

export const Bg = styled.div`
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
    background-position-y: top;
    
`

export const Content = styled.div`

    position: relative;
    padding: 5vh;
    flex-wrap: wrap;
`

export const Column = styled.div`
    flex-wrap: wrap;
    width: 85vw;
`

export const DescriptionContainer = styled.div`
    width: 50vw;
    height: auto;

    padding: 3vh;
    border-radius: 10px;

    @media screen and (max-width:768px){
        width: 90vw;
    }
`

export const Placeholder = styled.div`
    width: 430px;
    height: 125px;
    display: flex;
    place-content: center;
    place-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${placeholder});
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 35px;
`

export const Title = styled.h1`
    font-family: Century Gothic;
    font-size: 40px;
    text-transform: uppercase;
`

export const Title2 = styled.h1`
    font-family: Century Gothic;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 0px 20px #FF0000;
`

export const Description = styled.p`
    font-family: Century Gothic;
    font-size: 20px;
    margin-left: 80px;
    letter-spacing: 1px;
    margin-bottom: 30px;
`

export const CardContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    background-color:rgba(0,0,0,0.3);
    padding: 40px;
    align-items: center;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
    }
`

export const Line = styled.img`
    position: relative;
    left: 110%;
    top: 0%;
    transform: translate(-110%, 0%);
    height: auto;
`

export const ContainerBox = styled.div`
    padding:0vh 5vh;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

`

export const ColumnContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
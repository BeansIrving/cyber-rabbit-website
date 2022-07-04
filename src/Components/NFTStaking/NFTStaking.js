import styled from "styled-components";
import bg from '../../Image/nftstakingAssets/stakingbg.webp'
import placeholder from '../../Image/nftstakingAssets/stakenow.webp'
import placeholder2 from '../../Image/nftstakingAssets/placeholder.webp'
import placeholder3 from '../../Image/nftstakingAssets/Placeholder02.webp'
import btnstake from '../../Image/nftstakingAssets/btnstake.webp'
import btnunstake from '../../Image/nftstakingAssets/btnunstake.webp'
import btnclaim from '../../Image/nftstakingAssets/btnclaim.webp'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 105vh;
    padding: 0 100px;
    position: relative;
    z-index: 1;


    @media screen and (max-width:1600px){
        padding: 0 00px;
        height: 125vh;
    }

    @media screen and (max-width:1024px){
        height: 155vh;
    }

    @media screen and (max-width:768px){
        height: 180vh;
    }

    @media screen and (max-width:468px){
        height: 240vh;
    }
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

    @media screen and (max-width:1600px){
        padding: 0vh;
    }
`

export const Column = styled.div`
    flex-wrap: wrap;
    width: 85vw;

    @media screen and (max-width:1600px){
        width: 100vw;
    }
`

export const DescriptionContainer = styled.div`
    width: 50vw;
    height: auto;

    padding: 3vh;
    border-radius: 10px;

    @media screen and (max-width:1024px){
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

    @media screen and (max-width:1024px){
        margin-left: 0px;
    }
`

export const CardContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    background-color:rgba(0,0,0,0.3);
    padding: 40px;
    align-items: center;

    
`

export const Line = styled.img`
    position: relative;
    left: 110%;
    top: 0%;
    transform: translate(-110%, 0%);
    height: auto;
`



export const ColumnContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Dot = styled.img`
    height: 30px;
    width: auto;
`

export const FlexCardContainer = styled.div`

    display: flex;
    justify-content: center;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
    }
`

export const FlexColumnContent = styled.div`
    flex-wrap: wrap;
    height: auto;
    width: auto;
    margin: 20px;
`

export const Card = styled.div`
    height: 190px;
    width: 340px;
    place-content: center;
    place-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${placeholder2});
    background-size: cover;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    padding: 20px;
`

export const TextWrapper = styled.div`
    height: auto;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const CardTitle = styled.h1`
    font-family: Century Gothic;
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
`

export const CardSubTitle = styled.p`
    font-family: Century Gothic;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    left: 57%;
    top: 63%;
    transform: translate(-54%, 0);
    z-index: 2;
`

export const ButtonStake = styled.button`
    padding: 10px 60px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: transparent;
    background-image: url(${btnstake});
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1vh;
    margin-right: 2vh;
    font-family: oversouth;
    background-color: transparent;

    :active {
    
    box-shadow: 0 0px #666;
    transform: translateY(4px);
  }
`

export const ButtonUnstake = styled.button`
    padding: 10px 60px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: transparent;
    background-image: url(${btnunstake});
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1vh;
    margin-right: 2vh;
    font-family: oversouth;
    background-color: transparent;

    :active {
    
    box-shadow: 0 0px #666;
    transform: translateY(4px);
  }
`

export const ButtonClaim = styled.button`
    padding: 10px 60px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: transparent;
    background-image: url(${btnclaim});
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1vh;
    margin-right: 2vh;
    font-family: oversouth;
    background-color: transparent;

    :active {
    
    box-shadow: 0 0px #666;
    transform: translateY(4px);
  }
`

export const CardV2 = styled.div`
    height: 80px;
    width: 400px;
    place-content: center;
    place-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${placeholder3});
    background-size: cover;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    padding: 20px;

    @media screen and (max-width:468px){
        height: 70px;
        width: 350px;
    }
`
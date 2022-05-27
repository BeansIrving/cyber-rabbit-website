import React from 'react'
import { TokenContainer, TokenBg, TokenContent, TokenRow, TokenColumn,
        ColumnContent, IntroH1,CarrotH1, CarrotP, ImgToken,
        AssetTop, UtilH1, FirstUtilText, AssetBot, ColumnContent2} from "./TokenElements"
import token from "../../Image/tokenAssets/token.png"
import assetTop from "../../Image/tokenAssets/asset1.webp"
import assetBot from "../../Image/tokenAssets/asset2.webp"
import firstUtil from "../../Image/tokenAssets/firstUtilText.webp"
import secondUtil from "../../Image/tokenAssets/secondUtilText.webp"
import lastUtil from "../../Image/tokenAssets/lastUtilText.webp"
const Token = () => {
  return (
    <TokenContainer id='token'>
        <TokenBg>
          {/* <TokenDesign src={tokenD}/> */}
        </TokenBg>

        <TokenContent>
            <TokenRow>
                <TokenColumn>
                    <ColumnContent>
                      <IntroH1>Introducing</IntroH1>
                      <CarrotH1>$Carrot</CarrotH1>
                      <CarrotP>$CARROT is a utility token that will be minted automagically after the launch of the Cyber Rabbit Genesis Collection NFT.</CarrotP>
                      <AssetTop src={assetTop}/>
                      <UtilH1>Main Utilities of $Carrot</UtilH1>
                      
                      <FirstUtilText src={firstUtil}/>
                      
                      <FirstUtilText src={secondUtil}/>

                      <FirstUtilText src={lastUtil}/>

                      <AssetBot src={assetBot}/>

                    </ColumnContent>
                    
                    <ColumnContent2>
                      <ImgToken src={token}/>
                    </ColumnContent2>
                </TokenColumn>
            </TokenRow>
        </TokenContent>
    </TokenContainer>
  )
}

export default Token
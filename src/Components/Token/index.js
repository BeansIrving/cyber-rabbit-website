import React from 'react'
import { TokenContainer, TokenBg, TokenContent, TokenRow, TokenColumn,
        ColumnContent, IntroH1,CarrotH1, CarrotP, ImgToken, TokenDesign} from "./TokenElements"
import token from "../../Image/tokenAssets/token.png"
import tokenD from "../../Image/tokenAssets/token-asset.png"
const Token = () => {
  return (
    <TokenContainer>
        <TokenBg>
          <TokenDesign src={tokenD}/>
        </TokenBg>

        <TokenContent>
            <TokenRow>
                <TokenColumn>
                    <ColumnContent>
                      <IntroH1>Introducing</IntroH1>
                      <CarrotH1>$Carrot</CarrotH1>
                      <CarrotP>$CARROT is a utility token that will be minted automagically after the launch of the Cyber Rabbit Genesis Collection NFT.</CarrotP>
                    </ColumnContent>
                    <ColumnContent>
                    <ImgToken src={token}/>
                    </ColumnContent>
                </TokenColumn>
            </TokenRow>
        </TokenContent>
    </TokenContainer>
  )
}

export default Token
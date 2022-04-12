import React from 'react'
import { TokenContainer, TokenBg, TokenContent, TokenRow, TokenColumn,
        ColumnContent, IntroH1,CarrotH1, CarrotP} from "./TokenElements"

const Token = () => {
  return (
    <TokenContainer>
        <TokenBg>

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
                      <IntroH1>Introducing</IntroH1>
                      <CarrotH1>$Carrot</CarrotH1>
                      <CarrotP>$CARROT is a utility token that will be minted automagically after the launch of the Cyber Rabbit Genesis Collection NFT.</CarrotP>
                    </ColumnContent>
                </TokenColumn>
            </TokenRow>
        </TokenContent>
    </TokenContainer>
  )
}

export default Token
import React from 'react'
import { MintingContainer, MintingBg,
        MintingContent, MintingRow,
        MintingColumn, ImgBg,
        BtnConnect, BtnWrapper,
        Container}
        from './MintingElements'
import bg from '../../Image/bg/mintingbg.png'
const Minting = () => {
  return (
    <MintingContainer>
        <MintingBg>
          <ImgBg src={bg} />
        </MintingBg>

        <MintingContent>
            <MintingRow>
            <MintingColumn>

                  <BtnWrapper>
                    <BtnConnect>Connect Metamask Wallet</BtnConnect>
                  </BtnWrapper>
                  
                 
            </MintingColumn>
            </MintingRow>
           
        </MintingContent>
        
    </MintingContainer>
  )
}

export default Minting
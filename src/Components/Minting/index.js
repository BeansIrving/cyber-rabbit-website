import React from "react";
import {
  MintingContainer,
  MintingBg,
  MintingContent,
  MintingRow,
  MintingColumn,
  ImgBg,
  BtnConnect,
  BtnWrapper,
  Container,
  Card,
  MintTxt,
  MintDes,
  Span,
  InputContainer,
  MintH1,
  MintH1Hide,
  BtnMint,
  BtnMintWrapper,
  BtnMax,
  InfoImg,
  ImgWrapper,
} from "./MintingElements";
import bg from "../../Image/bg/mintingbg.webp";
import info from "../../Image/minting/Info.webp";
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

            <Container>
              <Card>
                <MintTxt>Mint Now</MintTxt>
                <MintDes>
                  <Span>0 minted </Span>
                  out of 5000 first generation of Cyber Rabbit NFT
                </MintDes>

                <InputContainer>
                  <MintH1>Balance</MintH1>
                  <MintH1Hide>Balance</MintH1Hide>
                  <MintH1>0.5 ETH</MintH1>
                </InputContainer>
                <hr></hr>

                <InputContainer>
                  <MintH1>Amount</MintH1>

                  <input
                    type="number"
                    id="nftid"
                    name="name"
                    className="InputText"
                    placeholder="5"
                    style={{
                      backgroundColor: "Transparent",
                      border: "none",
                      color: "white",
                      width: "4vh",
                      textAlign: "center",
                      borderColor: "transparent !important",
                    }}
                  />

                  <BtnMax>MAX</BtnMax>
                </InputContainer>
                <hr></hr>

                <InputContainer>
                  <MintH1>Total</MintH1>
                  <MintH1Hide>Balanceeee</MintH1Hide>
                  <MintH1>0.22 ETH</MintH1>
                </InputContainer>
                <hr></hr>

                <BtnMintWrapper>
                  <BtnMint>Mint</BtnMint>
                </BtnMintWrapper>

                <ImgWrapper>
                  <InfoImg src={info} />
                </ImgWrapper>
              </Card>
            </Container>
          </MintingColumn>
        </MintingRow>
      </MintingContent>
    </MintingContainer>
  );
};

export default Minting;

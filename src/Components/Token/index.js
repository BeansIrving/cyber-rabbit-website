import React, { useEffect } from "react";
import {
  TokenContainer,
  TokenBg,
  TokenContent,
  TokenRow,
  TokenColumn,
  ColumnContent,
  IntroH1,
  CarrotH1,
  CarrotP,
  ImgToken,
  AssetTop,
  UtilH1,
  FirstUtilText,
  AssetBot,
  ColumnContent2,
} from "./TokenElements";
import token from "../../Image/tokenAssets/token.webp";
import assetTop from "../../Image/tokenAssets/asset1.webp";
import assetBot from "../../Image/tokenAssets/asset2.webp";
import firstUtil from "../../Image/tokenAssets/firstUtilText.webp";
import secondUtil from "../../Image/tokenAssets/secondUtilText.webp";
import lastUtil from "../../Image/tokenAssets/lastUtilText.webp";
import Aos from "aos";
import "aos/dist/aos.css";
const Token = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <TokenContainer id="token" data-aos="zoom-in" data-aos-duration="1000">
      <TokenBg>{/* <TokenDesign src={tokenD}/> */}</TokenBg>

      <TokenContent>
        <TokenRow>
          <TokenColumn>
            <ColumnContent>
              <IntroH1>Introducing</IntroH1>
              <CarrotH1>$Carrot</CarrotH1>
              <CarrotP>
                $CARROT is a utility token that will be minted automagically
                after the launch of the Cyber Rabbit Genesis Collection NFT.
              </CarrotP>
              <AssetTop src={assetTop} />
              <UtilH1>Main Utilities of $Carrot</UtilH1>

              <FirstUtilText src={firstUtil} />

              <FirstUtilText src={secondUtil} />

              <FirstUtilText src={lastUtil} />

              <AssetBot src={assetBot} />
            </ColumnContent>

            <ColumnContent2>
              <ImgToken src={token} />
            </ColumnContent2>
          </TokenColumn>
        </TokenRow>
      </TokenContent>
    </TokenContainer>
  );
};

export default Token;

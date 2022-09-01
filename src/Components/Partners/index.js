import React, { useEffect } from "react";
import {
  PartnersContainer,
  PartnersBg,
  PartnersContent,
  PartnersRow,
  PartnersColumn,
  ColumnContent,
  PartnerH1,
  Img,
  Gallery,
} from "./PartnersElements";

import nanopass from "../../Image/partnerAssets/nanopass.webp";
import guppygang from "../../Image/partnerAssets/guppy.webp";
import dystopunk from "../../Image/partnerAssets/dysto.webp";
import heart from "../../Image/partnerAssets/heart.webp";
import kaiju from "../../Image/partnerAssets/kaiju.webp";
import chain from "../../Image/partnerAssets/chain.webp";
import sinag from "../../Image/partnerAssets/sinag.webp";
import hypno from "../../Image/partnerAssets/hypno.webp";
import zooverse from "../../Image/partnerAssets/zooverse.webp";
import pasty from "../../Image/partnerAssets/pasty.webp";
import bigbrain from "../../Image/partnerAssets/bigbrain.webp";
import omega from "../../Image/partnerAssets/omega.webp";
import alphamonster from "../../Image/partnerAssets/alphamonster.webp";
import alien from "../../Image/partnerAssets/alien.webp";
import ascendants from "../../Image/partnerAssets/ascendants.webp";
import nftpinas from "../../Image/partnerAssets/nftpinas.webp";
import oxh from "../../Image/partnerAssets/oxh.webp";
import black from "../../Image/partnerAssets/black.webp";
import ape from "../../Image/partnerAssets/ape.webp";
import hfc from "../../Image/partnerAssets/hfc.webp";
import bigbadz from "../../Image/partnerAssets/bigbadz.webp";
import nofunds from "../../Image/partnerAssets/nofunds.webp";
import utopia from "../../Image/partnerAssets/utopia.webp";
import sfc from "../../Image/partnerAssets/sfc.webp";
import giu from "../../Image/partnerAssets/giu.webp";
import alpha from "../../Image/partnerAssets/alpha.webp";
import elpads from "../../Image/partnerAssets/elpads.webp";

import Aos from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <PartnersContainer id="partners">
      <PartnersBg></PartnersBg>

      <PartnersContent>
        <PartnersRow>
          <PartnersColumn>
            <ColumnContent>
              <PartnerH1>Partners</PartnerH1>
            </ColumnContent>

            <ColumnContent>
              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={nanopass} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={guppygang} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={dystopunk} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={heart} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={kaiju} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={chain} />
              </Gallery>

              <Gallery data-aos="flip-up" data-aos-duration="1000">
                <Img src={sfc} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={hypno} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={zooverse} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={pasty} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={bigbrain} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={omega} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={alphamonster} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={alien} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={ascendants} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={nftpinas} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={oxh} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={black} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={ape} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={hfc} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={bigbadz} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={nofunds} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={utopia} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={sinag} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={giu} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={alpha} />
              </Gallery>

              <Gallery data-aos-duration="1000" data-aos="flip-up">
                <Img src={elpads} />
              </Gallery>
            </ColumnContent>
          </PartnersColumn>
        </PartnersRow>
      </PartnersContent>
    </PartnersContainer>
  );
};

export default Partners;

import React from 'react'
import { PartnersContainer, PartnersBg, PartnersContent,
        PartnersRow, PartnersColumn, ColumnContent, PartnerH1,
        Img, Gallery } from './PartnersElements'

import nanopass from '../../Image/partnerAssets/nanopass.webp'
import guppygang from '../../Image/partnerAssets/guppy.webp'
import dystopunk from '../../Image/partnerAssets/dysto.webp'
import heart from '../../Image/partnerAssets/heart.webp'
import kaiju from '../../Image/partnerAssets/kaiju.webp'
import chain from '../../Image/partnerAssets/chain.webp'
import sinag from '../../Image/partnerAssets/sinag.webp'
import hypno from '../../Image/partnerAssets/hypno.webp'
import zooverse from '../../Image/partnerAssets/zooverse.webp'
import pasty from '../../Image/partnerAssets/pasty.webp'
import bigbrain from '../../Image/partnerAssets/bigbrain.webp'
import omega from '../../Image/partnerAssets/omega.webp'
import alphamonster from '../../Image/partnerAssets/alphamonster.webp'
import alien from '../../Image/partnerAssets/alien.webp'
import ascendants from '../../Image/partnerAssets/ascendants.webp'
import nftpinas from '../../Image/partnerAssets/nftpinas.webp'
import oxh from '../../Image/partnerAssets/oxh.webp'
import black from '../../Image/partnerAssets/black.webp'
import ape from '../../Image/partnerAssets/ape.webp'
import hfc from '../../Image/partnerAssets/hfc.webp'
import bigbadz from '../../Image/partnerAssets/bigbadz.webp'
import nofunds from '../../Image/partnerAssets/nofunds.webp'
import utopia from '../../Image/partnerAssets/utopia.webp'
import sfc from '../../Image/partnerAssets/sfc.webp'
import giu from '../../Image/partnerAssets/giu.webp'
import alpha from '../../Image/partnerAssets/alpha.webp'
import elpads from '../../Image/partnerAssets/elpads.webp'

const Partners = () => {
  return (
    <PartnersContainer id='partners'>
        <PartnersBg>

        </PartnersBg>

        <PartnersContent>
            <PartnersRow>
                <PartnersColumn>
                    <ColumnContent>
                        <PartnerH1>Partners</PartnerH1>
                    </ColumnContent>

                    <ColumnContent>



                        <Gallery>
                            <Img src={nanopass}/>
                        </Gallery>
                        <Gallery>
                            <Img src={guppygang}/>
                        </Gallery>
                        <Gallery>
                            <Img src={dystopunk}/>
                        </Gallery>
                        <Gallery>
                            <Img src={heart}/>
                        </Gallery>
                        <Gallery>
                            <Img src={kaiju}/>
                        </Gallery>
                        <Gallery>
                            <Img src={chain}/>
                        </Gallery>
                        
                        <Gallery>
                            <Img src={sfc}/>
                        </Gallery>
                        <Gallery>
                            <Img src={hypno}/>
                        </Gallery>
                        <Gallery>
                            <Img src={zooverse}/>
                        </Gallery>



                        <Gallery>
                            <Img src={pasty}/>
                        </Gallery>
                        <Gallery>
                            <Img src={bigbrain}/>
                        </Gallery>
                        <Gallery>
                            <Img src={omega}/>
                        </Gallery>
                        <Gallery>
                            <Img src={alphamonster}/>
                        </Gallery>
                        <Gallery>
                            <Img src={alien}/>
                        </Gallery>
                        <Gallery>
                            <Img src={ascendants}/>
                        </Gallery>
                        <Gallery>
                            <Img src={nftpinas}/>
                        </Gallery>
                        <Gallery>
                            <Img src={oxh}/>
                        </Gallery>
                        <Gallery>
                            <Img src={black}/>
                        </Gallery>



                        <Gallery>
                            <Img src={ape}/>
                        </Gallery>
                        <Gallery>
                            <Img src={hfc}/>
                        </Gallery>
                        <Gallery>
                            <Img src={bigbadz}/>
                        </Gallery>
                        <Gallery>
                            <Img src={nofunds}/>
                        </Gallery>
                        <Gallery>
                            <Img src={utopia}/>
                        </Gallery>
                        <Gallery>
                            <Img src={sinag}/>
                        </Gallery>
                        <Gallery>
                            <Img src={giu}/>
                        </Gallery>
                        <Gallery>
                            <Img src={alpha}/>
                        </Gallery>
                        <Gallery>
                            <Img src={elpads}/>
                        </Gallery>
                    </ColumnContent>
                </PartnersColumn>
            </PartnersRow>
        </PartnersContent>
    </PartnersContainer>
  )
}

export default Partners
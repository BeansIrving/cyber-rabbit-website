import React from 'react'
import { PartnersContainer, PartnersBg, PartnersContent,
        PartnersRow, PartnersColumn, ColumnContent, PartnerH1,
        Img, Gallery } from './PartnersElements'

import nanopass from '../../Image/partnerAssets/nanopass.png'
import guppygang from '../../Image/partnerAssets/guppy.png'
import dystopunk from '../../Image/partnerAssets/dysto.png'
import heart from '../../Image/partnerAssets/heart.png'
import kaiju from '../../Image/partnerAssets/kaiju.png'
import chain from '../../Image/partnerAssets/chain.png'
import sinag from '../../Image/partnerAssets/sinag.png'
import hypno from '../../Image/partnerAssets/hypno.png'
import zooverse from '../../Image/partnerAssets/zooverse.png'
import pasty from '../../Image/partnerAssets/pasty.png'
import bigbrain from '../../Image/partnerAssets/bigbrain.png'
import omega from '../../Image/partnerAssets/omega.png'
import alphamonster from '../../Image/partnerAssets/alphamonster.png'
import alien from '../../Image/partnerAssets/alien.png'
import ascendants from '../../Image/partnerAssets/ascendants.png'
import nftpinas from '../../Image/partnerAssets/nftpinas.png'
import oxh from '../../Image/partnerAssets/oxh.png'
import black from '../../Image/partnerAssets/black.png'
import ape from '../../Image/partnerAssets/ape.png'
import hfc from '../../Image/partnerAssets/hfc.png'
import bigbadz from '../../Image/partnerAssets/bigbadz.png'
import nofunds from '../../Image/partnerAssets/nofunds.png'
import utopia from '../../Image/partnerAssets/utopia.png'
import sfc from '../../Image/partnerAssets/sfc.png'
import giu from '../../Image/partnerAssets/giu.png'
import alpha from '../../Image/partnerAssets/alpha.png'
import elpads from '../../Image/partnerAssets/elpads.png'

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
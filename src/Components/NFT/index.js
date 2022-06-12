import React from 'react'
import {
    NFTContainer,
    NFTContent,
    NFTRow,
    NFTColumn,
    ImgWrapper,
    ImgNFT
    }
    from './NFTElements'

import { useInView } from 'react-intersection-observer'

import top10 from '../../Image/nftAssets/First10.webp'
import genesiscol from '../../Image/nftAssets/2nd.webp'
import { AnimatePresence } from 'framer-motion'

const NFT = () => {
    const { ref, inView } = useInView({
		rootMargin: '-100px',
	});
  return (
    <NFTContainer>
        <NFTContent>
            <NFTRow>
                <NFTColumn>
          
                        <ImgNFT src={top10}/>
           
                </NFTColumn>
            </NFTRow>
        </NFTContent>
    </NFTContainer>
  )
}

export default NFT
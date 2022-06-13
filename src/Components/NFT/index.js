import React from 'react'
import {
    NFTContainer,
    NFTBg,
    VideoBg
    }
    from './NFTElements'

import video from '../../video/Rolling.mp4'


const NFT = () => {

  return (
    <NFTContainer>
        <NFTBg>
          <VideoBg playsInline src={video} autoPlay loop muted type='video/mp4'></VideoBg>
        </NFTBg>
    </NFTContainer>
  )
}

export default NFT
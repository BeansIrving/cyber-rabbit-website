import React from 'react'

import { 
    Container,
    Bg,
    Content,
    Column,
    DescriptionContainer,
    Placeholder,
    Title,
    Title2,
    Description,
    CardContainer,
    Line,
    ColumnContent,
    FlexCardContainer,
    FlexColumnContent,
    Card,
    TextWrapper,
    CardTitle,
    CardSubTitle,
    ButtonWrapper,
    ButtonStake,
    ButtonUnstake,
    ButtonClaim,
    CardV2,
}

from './NFTStaking'

import line from '../../Image/nftstakingAssets/designline.webp'
import dot from '../../Image/nftstakingAssets/dot.webp'





const NFTStaking = () => {

   
  return (
    <Container>
        <Bg>

        </Bg>

        <Content>
            <Column>
                <DescriptionContainer>

                    <Placeholder>
                        <Title>Stake Now</Title>
                    </Placeholder>
                    
                    <Description>
                        To give the owners of Cyber Rabbit's Main Collection valuable
                        earning options for their coveted NFT's. We will offer a Cyber Stake
                        where they can put their NFT's to work for valuable utility tokens,
                        which they can hold, or use to purchase 2nd Gen Cyber Rabbit NFT's!
                    </Description>

                    <Line src={line}/>

                </DescriptionContainer>
              
                <CardContainer>
                    
                    <ColumnContent>
                        <Title2>84% </Title2><span className='subtitle'>Staked</span>
                    </ColumnContent>
           
                    <ColumnContent>
                    <div className="progress">
                        <div className="progress-value"></div><span className='spanshadow'>
                        <div class="diamond-border">
                            <div class="container diamond-shape"></div>
                        </div>
                        </span>
                    </div> 
                    </ColumnContent>
                    
                    <FlexCardContainer>
                        <FlexColumnContent>
                            <Card>
                                <TextWrapper>
                                    <CardTitle>STAKE YOUR NFT's</CardTitle>
                                    <CardSubTitle><span className='red'>0</span> NFT's Staked</CardSubTitle>
                                </TextWrapper>

                                <ButtonWrapper>
                                    <ButtonStake>
                                        Stake
                                    </ButtonStake>
                                </ButtonWrapper>
                            </Card>
                        </FlexColumnContent>

                        <FlexColumnContent>
                            <Card>
                                <TextWrapper>
                                    <CardTitle>UNSTAKE YOUR NFT's</CardTitle>
                                    <CardSubTitle><span className='red'>0</span> NFT's Staked</CardSubTitle>
                                </TextWrapper>

                                <ButtonWrapper>
                                    <ButtonUnstake>
                                        Unstake
                                    </ButtonUnstake>
                                </ButtonWrapper>
                            </Card>
                        </FlexColumnContent>

                        <FlexColumnContent>
                            <Card>
                                <TextWrapper>
                                    <CardTitle>CLAIM YOUR NFT's</CardTitle>
                                    <CardSubTitle><span className='red'>0</span> Claimable NFT's</CardSubTitle>
                                </TextWrapper>

                                <ButtonWrapper>
                                    <ButtonClaim>
                                        Claim
                                    </ButtonClaim>
                                </ButtonWrapper>
                            </Card>
                        </FlexColumnContent>
                    </FlexCardContainer>

                    <FlexCardContainer>
                        <FlexColumnContent>
                            <CardV2>
                                <TextWrapper>
                                <CardSubTitle><span className='red'>0</span> NFT's Staked on your wallet</CardSubTitle>
                                <CardSubTitle><span className='red'>0</span> Selected</CardSubTitle>
                                </TextWrapper>
                            </CardV2>
                        </FlexColumnContent>
                    </FlexCardContainer>

                </CardContainer>
                        
                
            </Column>
        </Content>
    </Container>
  )
}

export default NFTStaking
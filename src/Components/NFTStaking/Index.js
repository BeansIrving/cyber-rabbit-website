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
    ContainerBox,
    ColumnContent,
}

from './NFTStaking'

import Box from '@mui/material/Box';

import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import line from '../../Image/nftstakingAssets/designline.webp'





const NFTStaking = () => {
    const muiTheme = createMuiTheme({
        overrides:{
          MuiSlider: {
            thumb:{
            color: "yellow",
            },
            track: {
              color: 'red'
            },
            rail: {
              color: 'black'
            }
          }
      }
      });
   
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
                        <ContainerBox>
                            <Box>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                trackColor="yellow"
                            />
                            </Box>
                        </ContainerBox>
                    </ColumnContent>

                </CardContainer>
                        
                
            </Column>
        </Content>
    </Container>
  )
}

export default NFTStaking
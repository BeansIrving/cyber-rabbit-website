import React, {useState} from 'react'
import { FAQContainer, FAQBg, FAQContent,
        FAQRow, FAQColumn, ColumnContent, 
        ColumnContent2, ColumnContent3, DesignP, ImgTop, ImgBottom, ImgBottomHide,
        Common,FAQColumnContent} from "./FAQElements"
import './FAQElements.css'

import containerTop from "../../Image/featuresAssets/top.png"
import containerBottom from "../../Image/featuresAssets/bottom.png"

const FAQ = () => {

  const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if( selected === i){
            return setSelected(null)
            
        }

        setSelected(i)
    }

  return (
    <FAQContainer >
      <FAQBg>

      </FAQBg>

      <FAQContent>
        <FAQRow>
          <FAQColumnContent >

          
          <FAQColumn>
            <ColumnContent>
              <DesignP id='faqmoto'>001</DesignP>
            </ColumnContent>

            <ColumnContent2>
              <Common>Common</Common>
              <Common>Questions</Common>
            </ColumnContent2>

          </FAQColumn>
          </FAQColumnContent>

          <FAQColumnContent >
                <div className='wrapper'>
                    <div className='accordion' >
                 
                        {data.map((item, i) => (
                            <div className='hover' >
                               <ImgTop src={containerTop} onClick={() => toggle(i)}/>
                            <div className='item' onClick={() => toggle(i)}>
                                <div className='title' >
                                    <h2>{item.question}</h2>
                              
                                </div>
                                <ImgBottomHide src={selected === i ? null : containerBottom} onClick={() => toggle(i)}/>
                                <div className={selected === i ? 'content show' : 'content'}>
                                  <p >
                                  
                                    {item.answer}
                                    <br></br>
                                    {item.answer2}
                                    <br></br>
                                    {item.answer3}
                                    <ImgBottom src={containerBottom}/>
                                  </p>
                               
                                  </div>
                            </div>
                            
                            </div>
                        ))}
                    </div>
                </div>
          </FAQColumnContent>
        </FAQRow>
      </FAQContent>

    </FAQContainer>
  )
}

export default FAQ

export const data = [
  {
      question: 'What are the different NFT Collections of the Cyber Rabbit?',
      answer: "a. Genesis Collection",
      answer2: "b. Main Collection",
      answer3: "c. 2nd Generation Collection",
    },
  {
      question: 'What is the total supply of each NFT Collection?',
      answer: "a. Genesis Collection - 1000",
      answer2: "b. Main Collection - 5000 + 3000 (Reserved for Breeding)",
      answer3: "c. 2nd Generation Collection - 5000 VX NFTs",
  },
  {
      question: 'When are the dates of the launch of each NFT Collection?',
      answer: " a. Genesis Collection - June 14, 2022",
      answer2: "b. Main Collection - TBA",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'How much will each NFT cost to mint? ',
      answer: "a. Genesis Collection - WL Sale: TBA, Public Sale: TBA",
      answer2: "b. Main Collection - WL Sale: TBA, Public Sale: TBA",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'How many NFTS can I mint during whitelist and public sale?',
      answer: "a. Genesis Collection - WL Sale: 2 (3 if Supercharged) Public Sale: 2",
      answer2: "b. Main Collection - TBA",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'Which marketplace will the Cyber Rabbit NFT be listed on?',
      answer: 'TBA'
  },
  

]


import React, {useState} from 'react'
import { FAQContainer, FAQBg, FAQContent,
        FAQRow, FAQColumn, ColumnContent, 
        ColumnContent2, ColumnContent3, DesignP, 
        Common,FAQColumnContent} from "./FAQElements"
import './FAQElements.css'

const FAQ = () => {

  const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if( selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <FAQContainer>
      <FAQBg>

      </FAQBg>

      <FAQContent>
        <FAQRow>
          <FAQColumnContent>

          
          <FAQColumn>
            <ColumnContent>
              <DesignP>001</DesignP>
            </ColumnContent>

            <ColumnContent2>
              <Common>Common</Common>
              <Common>Questions</Common>
            </ColumnContent2>

          </FAQColumn>
          </FAQColumnContent>

          <FAQColumnContent>
                <div className='wrapper'>
                    <div className='accordion'>
                        {data.map((item, i) => (
                            <div className='hover'>
                                
                            <div className='item' onClick={() => toggle(i)}>
                                <div className='title' >
                                    <h2>{item.question}</h2>
                                
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>
                                  <p>
                                    
                                    {item.answer}
                                    <br></br>
                                    {item.answer2}
                                    <br></br>
                                    {item.answer3}
                                  </p></div>
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
      answer: "a. Genesis Collection - TBA for WL Sale, TBA for Public Sale",
      answer2: "b. Main Collection - TBA",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'How much will each NFT cost to mint? ',
      answer: "a. Genesis Collection - WL Sale: 0.08 ETH, Public Sale: 0.1 ETH",
      answer2: "b. Main Collection - WL Sale: 0.08 ETH, Public Sale: 0.1 ETH",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'How many NFTs can I mint during Whitelist and Public Sale?',
      answer: "a. Genesis Collection - WL Sale: 2, Public Sale: 2",
      answer2: "b. Main Collection - TBA",
      answer3: "c. 2nd Generation Collection - TBA",
  },
  {
      question: 'Which marketplace will the Cyber Rabbit NFT be listed on?',
      answer: 'Opensea'
  },
  

]

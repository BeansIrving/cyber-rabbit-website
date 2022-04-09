import React from 'react'
import { FAQContainer, FAQBg, FAQContent,
        FAQRow, FAQColumn, ColumnContent, 
        ColumnContent2, ColumnContent3, DesignP, 
        Common,FAQColumnContent} from "./FAQElements"

const FAQ = () => {
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
            <Common>Common</Common>
              <Common>Questions</Common>
          </FAQColumnContent>
        </FAQRow>
      </FAQContent>

    </FAQContainer>
  )
}

export default FAQ
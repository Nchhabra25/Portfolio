import React from 'react'
import TimelineComponent from '../../assets/TimelineComponent'
import { certifications, education } from '../../Data'
import styled from 'styled-components'
export const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  align-items: flex-start;
  margin-top: 20px;
  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`
export const Wrapper=styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  
`
const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
      <TimelineComponent data={education} title="Education" />
      </Wrapper>
      <Wrapper>
      <TimelineComponent data={certifications} title="Certifications"/>
      </Wrapper>
    </Container>
  )
}

export default Education

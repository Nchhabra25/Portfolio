import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { ContactData } from '../../Data'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../../assets/Utils'
export const Container=styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 10px;
`
export const Wrapper=styled.div`
  position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    max-width: 1350px;
    padding: 10px 0px 30px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`
export const Title=styled(motion.h1)`
  font-weight: 800;
  font-size: 40px;
  color: ${({theme})=>theme.text1};
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 770px) {
    font-size: 30px;
    margin-top: 10px;
  }
`
const DetailsBox = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card+50};
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 18px 36px;
  @media (max-width: 980px) {
    max-width: 600px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }`
const ImageBox=styled(motion.div)`
  width: 100%;
  max-width: 500px;
  /* background: ${({ theme }) => theme.card+50}; */
  /* box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; */
  overflow: hidden;
  @media (max-width: 980px) {
   display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const Img=styled.img`
    height: 100%;
    width: 100%;
`
const DataBox=styled(motion.div)`
text-align: left;
.data{
    display: inline;
    line-height: 60px;
    position: relative;
}
.data1{
    color:${({theme})=>theme.primary};
}
.data2{
    color:${({theme})=>theme.text1};
    left:7px;
  transition: 0.2s ease-in-out;
    word-wrap: break-word;
    &:hover{
      color:${({theme})=>theme.primary+98};
    }
}
`
const Contact = () => {
  return (
    <Container id='contact'>
        <Title initial="hidden" whileInView="visible" variants={fadeInBottomVariant}>Contact Me</Title>
      <Wrapper>
        <DetailsBox initial="hidden" whileInView="visible" variants={fadeInBottomVariant}>
            {
                ContactData.map((item,idx)=>{
                    return(
                    <DataBox key={idx} initial="hidden" whileInView="visible" variants={idx%2===0?fadeInLeftVariant:fadeInRightVariant}>
                    <h2 className='data data1'>{item.title1}</h2>
                    <h2 className='data data2'>{item.title2}</h2>
                    </DataBox>
                )})
            }
        </DetailsBox>
        <ImageBox initial="hidden" whileInView="visible" variants={fadeInRightVariant}>
            <Img src='./contactus.svg'/>
        </ImageBox>
      </Wrapper>
    </Container>
  )
}

export default Contact

import { motion } from 'framer-motion'
import React from 'react'

import styled from 'styled-components'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../../assets/Utils'
const Card=styled(motion.div)`
    width: 350px;
    height: 500px;
    background-color: ${({theme})=>theme.card};
    border-radius: 10px;
    box-shadow: 0 0 12px 5px ${({theme})=>theme.text1+60};
    overflow: hidden;
    transition: all 0.5s ease-out;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    justify-content: space-between;
    
    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 0 12px 10px ${({theme})=>theme.text1+90};
        filter: brightness(1.1);
    }
`
const Detailcontainer=styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
const Image=styled(motion.img)`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.card+50};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`
const Tags = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`
const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;`
const Details = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Description = styled(motion.div)`
    font-weight: 600;
    color: ${({ theme }) => theme.text2 };
    /* overflow: hidden; */
    margin-top: 8px;
    font-size: 17px;
    display: -webkit-box;
    max-width: 100%;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.text1};
    /* overflow: hidden; */
    display: -webkit-box;
    max-width: 100%;
   
`
const Btn=styled(motion.button)`
  padding: 5px;
  border-radius: 14px;
  
  background-color: ${({ theme }) => theme.primary + 80};
  font-size: 20px;
  font-weight: 800;
  border: 2px solid ${({ theme }) => theme.primary };
  cursor: pointer;
  .link{
    text-decoration: none;
    color: ${({ theme }) => theme.text1};
  }
  &:hover{
    box-shadow: 0 0 5px 2px ${({theme})=>theme.text1+90};
  }
`
const Btncontainer=styled.div`
  display: flex;
  gap:10px;
  margin-top: 5px;
`
const ProjectCard = ({data,variant}) => {
  let variantName;
  if(variant%3===0){
    variantName=fadeInLeftVariant
  }
  else if(variant%3===1){
    variantName=fadeInBottomVariant
  }
  else if(variant%3===2 || variant===3){
    variantName=fadeInRightVariant
  }
  else{
    variantName=fadeInBottomVariant
  }
  return (
    <>
      <Card initial="hidden" whileInView="visible" variants={variantName}>
        <Detailcontainer>
        <Image src={data.image} initial="hidden" whileInView="visible" variants={variantName}/>
        <Tags initial="hidden" whileInView="visible" variants={variantName}>
            {
            data.tags.map((item, idx)=>{
              return(
                  <Tag key={idx}>{item}</Tag>
              )})}
          </Tags>
        <Details initial="hidden" whileInView="visible" variants={variantName}>
          <Title>{data.title}</Title>
          <Description initial="hidden" whileInView="visible" variants={variantName}>{data.description}</Description>
        </Details>
        </Detailcontainer>
        <Btncontainer>
          <Btn><a target='_blank' className='link' href={data.webapp}>Live Preview</a></Btn>
          <Btn><a target='_blank' className='link' href={data.github}>Code</a></Btn>
        </Btncontainer>
      </Card>
    </>
  )
}

export default ProjectCard

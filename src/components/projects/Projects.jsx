import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { labels, projects } from '../../Data';
import ProjectCard from './ProjectCard';
import {fadeInLeftVariant,fadeInRightVariant,fadeInBottomVariant} from '../../assets/Utils'
export const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`
export const Wrapper=styled.div`
  position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
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
export const Divider=styled.div`
  width: 1.5px;
  background-color: ${({theme})=>theme.primary};
`
export const ButtonContainer = styled(motion.div)`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 12px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`
export const Btn = styled(motion.div)`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;
    ${({ active, theme }) =>
      active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary+10};
        color: ${({ theme }) => theme.text1};
        border-radius: 6px;
    };
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
const Cardcontainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`
const Projects = () => {
  let count=labels.length/2
  const[toggle,setToggle]=useState('all')
  return (
    <Container id="projects">
        <Wrapper>
            <Title variants={fadeInBottomVariant} initial="hidden" whileInView="visible">Projects</Title>
            <ButtonContainer>
            {labels.map((item, idx) => (
              <>
                {toggle === item ? (
                  <Btn active 
                  key={idx} 
                  value={item}
                  variants={idx < count ? fadeInLeftVariant : fadeInRightVariant}
                  initial="hidden"
                  whileInView="visible"
                  >{item.toUpperCase()}</Btn>
                ) : (
                  <Btn key={idx}
                   onClick={()=>setToggle(item)}
                   variants={idx < count ? fadeInLeftVariant : fadeInRightVariant}
                  initial="hidden"
                  whileInView="visible"
                   >{item.toUpperCase()}</Btn>
                )}
                {idx < labels.length - 1 && <Divider className='divider' />}
              </>
            ))}
            </ButtonContainer>
            <Cardcontainer>
            {toggle === 'all' && projects
            .map((project, count) => {
              return(
              <ProjectCard data={project} variant={count}/>)})}
            {projects
            .filter((item) => item.category == toggle)
            .map((project,count) => (
              <ProjectCard data={project} variant={count}/>
            ))}
            </Cardcontainer>
        </Wrapper>
    </Container>
  )
}

export default Projects

import React from 'react'
import { skills } from '../../Data'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeInBottomVariant, fadeInTopVariant,fadeInRightVariant,fadeInLeftVariant } from '../../assets/Utils'

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`
export const Wrapper=styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap:10px;
  width: 100%;
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
const SkillBox = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`
const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card+50};
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }`
const SkillsTitle = styled.h2`
font-size: 30px;
font-weight: 600;
color: ${({ theme }) => theme.text2};
margin-bottom: 20px;
text-align: center;
`
const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`
const NewSkill = styled(motion.div)`
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.text2};
  border: 1px solid ${({ theme }) => theme.text1 + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    padding: 6px 12px;
  }
  &:hover{
    color:${({ theme }) => theme.primary};
  }
`
const SkillImg = styled.img`
  width: 24px;
  height: 24px;
`
const SkillLogo=styled.span`
  color: ${({ theme }) => theme.text1 };
  font-size: 30px;
  font-weight: bold;
  &:hover{
    color:${({ theme }) => theme.primary};
  }
`
const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title variants={fadeInBottomVariant } initial="hidden" whileInView="visible">Skills</Title>
        <SkillBox variants={fadeInBottomVariant } initial="hidden" whileInView="visible">
        {skills.map((item, idx) => (
        <Skill key={idx} variants={idx%2==0?fadeInLeftVariant:fadeInRightVariant} initial="hidden" whileInView="visible">
          <SkillsTitle>{item.title} </SkillsTitle>
          <SkillList>
            {item.skills.map((skill, index) => (
              <NewSkill key={index} variants={idx%2==0?fadeInLeftVariant:fadeInRightVariant} initial="hidden" whileInView="visible">
                <SkillLogo>
                  <i className={skill.class}></i>
                </SkillLogo>
                {(skill.src)?<SkillImg src={skill.src}></SkillImg>:<></>}
                {skill.name}
              </NewSkill>
            ))}
          </SkillList>
        </Skill>
      ))}
        </SkillBox>
      </Wrapper>
    </Container>
  )
}

export default Skills

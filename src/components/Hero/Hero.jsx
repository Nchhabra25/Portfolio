import { motion } from 'framer-motion'
import React from 'react'
import styled,{keyframes} from 'styled-components'
import Typewriter from 'typewriter-effect';
import { fadeInLeftVariant,fadeInRightVariant } from '../../assets/Utils'
import { Info, links } from '../../Data'
const Container=styled.div`
  background-color: ${({theme})=>theme.cardlight};
  display: flex;
  justify-content: center;
  position: relative;
  padding:30px 30px;
  @media screen and (max-width: 960px){
    padding: 50px 16px;
  }
  @media screen and (max-width: 770px){
    padding: 32px 16px;
  }
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`
const Wrapper=styled.div`
  display: flex;
  justify-content: end;
  overflow: hidden;
  width: 85%;
  height: 100%;
  padding: 0 30px;
  @media screen and (max-width: 960px){
    padding: 0px 0px;
    justify-content: center;
    width: 100%;
    padding: 5px;
  }
  
`
const InnerContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`
const LeftContainer=styled(motion.div)`
  width: 100%;
  order: 1;
  margin-right:1rem ;
  @media screen and (max-width: 960px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
const RightContainer=styled(motion.div)`
  width: 100%;
  order: 2;
  display: flex;
  margin-left:1rem ;
  justify-content: center;
  margin-bottom: 40px;
  gap:12px;
  @media screen and (max-width: 960px){
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px){
    order: 1;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 400px){
   margin-left: -0.3rem;
  }
`
const Link=styled.a`
  text-decoration: none;
  color:${({ theme }) => theme.text1};
  font-size: 2.2rem;
  &:hover{
    color:${({ theme }) => theme.primary};
    transition: 0.3s all ease;
  }
`
const Btncontainer=styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  padding-left: 20px;
  width: 90%;
`
const Button=styled.button`
  background-color: transparent;
  border: none;
  color: ${({theme})=>theme.text1};
`
export const Typewritertext = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text1};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text2};
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const blob = keyframes`
 0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
   max-width: 400px;
  max-height: 400px;

  border-radius: 50%;
  padding: 10px;
  background: -webkit-linear-gradient(135deg, ${({ theme }) => theme.gradientColor1},${({ theme }) => theme.gradientColor2});
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  animation: ${blob} 8s ease-in-out infinite;
  

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
export const ResumeButton = styled.a`
  border: 3px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  height: 70%;
  width: 60%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 10px;
  font-weight: 700;
  text-decoration: none;
  font-size: 25px;
  transition: all 0.6s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text1};     
    }
`;

export const ButtonContainer = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  margin: 1rem;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const Hero = () => {
  return (
    
    <Container id="hero">
      
      <Wrapper>
        <InnerContainer>
          <LeftContainer variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
           <Title>
            Hi, I am <br/> {Info.name}
           </Title>
           <Typewritertext>
            I am a 
            <Span>
              <Typewriter
              options={{
                strings: Info.roles,
                autoStart: true,
                loop: true,
              }}/>
            </Span>
           </Typewritertext>
           <Subtitle>{Info.description}</Subtitle>
           <Btncontainer>
            {
              links.map((social,idx)=>{
                return(
                  <Button key={idx}>
                    <Link href={social.link} target="_blank" aria-label={social.label}>
                    <ion-icon name={social.icon} style={{fontSize:'2.6rem'}}></ion-icon>
                    </Link>
                  </Button>
                )
              })
            }
           </Btncontainer>
           <ButtonContainer>
          <ResumeButton href={Info.resume} target="_blank">Visit Resume</ResumeButton>
          </ButtonContainer>
          </LeftContainer>
          <RightContainer variants={fadeInRightVariant} initial="hidden" whileInView="visible">
          <Img src='./Heroimg.png' alt="hero-image" />
          </RightContainer>
        </InnerContainer>
      </Wrapper>
    </Container>
  )
}

export default Hero

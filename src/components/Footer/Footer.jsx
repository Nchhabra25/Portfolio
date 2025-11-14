import React from 'react'
import { Info } from '../../Data'
import styled from 'styled-components'
const Container = styled.div`
  width: 107%;
  padding: 2rem 0;
  margin-left:-10px;
  margin-bottom: -10px;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.text2+90};
  margin-top: 30px;
  background-color:${({ theme }) => theme.primary+20};
`;


const Wrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text1};
  .credits{
    letter-spacing: 3px;
    position: relative;
    left: 2px;
    margin-top: 4px;
  }
  .name{
    color: ${({ theme }) => theme.text1};
    transition: 0.2s ease-in-out;
    font-family: 'Poppins', sans-serif;
    &:hover{
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
 color: ${({ theme }) => theme.text1};
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Footer = () => {
  return (
    <Container>
    <Wrapper>
      <Logo>{Info.name}</Logo>
      <Nav>
        <NavLink href="#hero">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        {/* <NavLink href="#experience">Experience</NavLink> */}
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#contact">Contact Me</NavLink>
      </Nav>
      <h5 className='credits'>Made with 💖 by  <a className='name' href='https://github.com/Nchhabra25'>Niharika Chhabra</a></h5>
      </Wrapper>
    </Container>
  )
}

export default Footer

import React, { useContext } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme} from './Theme'
import {AppContext} from './Context/Themecontext'
import Navigation from './components/Navbar/Navigation'
import Hero from './components/Hero/Hero'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInTopVariant } from './assets/Utils'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const Body = styled.div`
  background-color: ${({ theme }) => theme.bgprimary};
  overflow: hidden;
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  margin: 0;
  transition: all 1.3s ease-in-out;
  padding: 10px;
  @media screen and (max-width: 768px) {
    
    transition: all 1s ease;
  }
`;

const Wrapper = styled(motion.div)`
  border-radius: 20px;
  background: ${({ theme }) => `linear-gradient(
    38.73deg,
    ${theme.gradientColor1} 0%,
    ${theme.gradientColor2} 50%),
    linear-gradient(
    141.27deg,
    ${theme.gradientColor3} 50%,
    ${theme.gradientColor4} 100%
  )`};
  width: 100%;`
const App = () => {
  const { isDark } = useContext(AppContext);
  return (
    <ThemeProvider theme={isDark?darkTheme:lightTheme}>
      <BrowserRouter>
      <Navigation/>
      <Body>
        <Hero/>
        <Wrapper variants={fadeInTopVariant} initial="hidden" whileInView="visible">
        <Skills/>
        <Education/>
        </Wrapper>
        <Projects/>
        {/* <Experience/> */}
        <Wrapper>
        <Contact/>
        </Wrapper>
        <Footer/>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

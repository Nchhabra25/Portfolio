import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/Themecontext'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink,Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {  Info } from '../../Data';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {MobileItems,Mobile,Icon,Btn,NavItem,Items,MobileMenu,Logo,Container,Navbar} from './Navigationstyles.jsx'
const Navigation = () => {
  const [open,setOpen]=useState(false);
  const {isDark,toggleTheme}=useContext(AppContext)
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); 
    }
  };
  return (
    <Navbar>
      <Container>
        <Logo><Icon><RocketLaunchIcon style={{ fontSize: '2.2rem', paddingRight:'3px' }}/></Icon> {Info.name.replaceAll(" ","")}</Logo>
        <MobileMenu>
          <FaBars onClick={()=>setOpen(!open)}/>
        </MobileMenu>
        <Items>
          <NavLink to="#hero" onClick={()=>handleNavLinkClick('hero')}>
            <NavItem>About</NavItem>
          </NavLink>
          <NavLink to="#skills" onClick={()=>handleNavLinkClick('skills')}>
            <NavItem>Skills</NavItem>
          </NavLink>
          <NavLink to="#education" onClick={()=>handleNavLinkClick('education')}>
            <NavItem>Education</NavItem>
          </NavLink>
          <NavLink to="#projects" onClick={()=>handleNavLinkClick('projects')}>
            <NavItem>Projects</NavItem>
          </NavLink>
          {/* <NavLink to="#experience" onClick={()=>handleNavLinkClick('experience')}>
            <NavItem>Experience</NavItem>
          </NavLink> */}
          
          <NavLink to="#contact" onClick={()=>handleNavLinkClick('contact')}>
            <NavItem>Contact Me</NavItem>
          </NavLink>
        </Items> 
        
        {
        open && (
          <Mobile open={open}>
            <MobileItems to="#hero" onClick={() => {
              setOpen(!open);
              handleNavLinkClick('hero')
            }}>About</MobileItems>
            <MobileItems to='#skills' onClick={() => {
              handleNavLinkClick('skills');
              setOpen(!open)
            }}>Skills</MobileItems>
            <MobileItems to='#education' onClick={() => {
              handleNavLinkClick('education')
              setOpen(!open)
            }}>Education</MobileItems>
            <MobileItems to='#projects' onClick={() => {
              handleNavLinkClick('projects');
              setOpen(!open)
            }}>Projects</MobileItems>
            {/* <MobileItems to='#experience' onClick={() => {
              handleNavLinkClick('experience');
              setOpen(!open)
            }}>Experience</MobileItems> */}
            <MobileItems to='#contact' onClick={() => {
              setOpen(!open);
              handleNavLinkClick('contact')
            }}>Contact Me</MobileItems>
          </Mobile>
        )
      }
      <Btn onClick={()=>toggleTheme()}>
        {
            isDark?<WbSunnyIcon className='sun'/>:<DarkModeIcon/>
        }
      </Btn>
      </Container>
      
    </Navbar>
  )
}

export default Navigation

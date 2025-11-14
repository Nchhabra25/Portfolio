import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Navbar=styled.div`
  background-color: ${({ theme }) => theme.bgsecondary};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width:960px) {
    transition: 0.5s ease-in-out;
  }
`
export const Container=styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`
export const Logo=styled(Link)`
  padding: 0 5px;
  display: flex;
  justify-self: flex-start;
  text-shadow: 0 0 10px ${({theme})=>theme.gradientColor1};
  text-decoration: none;
  color: ${({theme})=>theme.primary};
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  margin-left: -10px;
  text-decoration: none;
  @media screen and (max-width: 840px) {
    padding: 0px 0px;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-left: -20px;
  }
`
export const MobileMenu=styled.div`
  display: none;
  @media screen and (max-width: 840px){
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-100%, 80%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text2};
  }
`
export const Items=styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  @media screen and (max-width: 840px){
    display: none;
  }
`
export const NavItem=styled.a`
  color: ${({ theme }) => theme.text1};
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.4s ease;
  font-size: 1.2rem;
  &:hover{
  color: ${({ theme }) => theme.primary}
  }
`
export const Btn=styled.button`
  background-color: transparent;
  border: none;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  .sun{
    color: white;
  }
  @media screen and (max-width: 840px){
    justify-content: center;
    margin: auto;
  }
`
export const Icon=styled.span`
  padding: 2px;
  size: 8px;
  text-shadow: 0 0 1px ${({theme})=>theme.gradientColor1};
`
export const Mobile=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top:80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px;
  transition: all 0.6s ease-in-out;
  /* transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')}; */
  border-radius: 0 0 20px 20px;
  background: ${({ theme }) => theme.cardlight+99};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`
export const MobileItems=styled.div`
   color: ${({ theme }) => theme.text1};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

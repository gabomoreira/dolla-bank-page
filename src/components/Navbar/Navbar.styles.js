import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-top: -80px;
  position: sticky;
  top: 0;
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 24px;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
    color: #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #01bf71;
  color: #010606;
  font-size: 16px;
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
  }
`;

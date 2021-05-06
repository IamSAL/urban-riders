import React from "react";
import logo from "../images/Urban Riders.png";
import styled from "styled-components";
import { mobileCheck as isMobile } from "../utils";

const NavContainer = styled.div`
  padding: ${isMobile() ? "15px 0px" : "15px 5% 0px 5%"};
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: ${isMobile() ? "1fr" : "1fr 2fr"};
`;
const LogoContainer = styled.div`
  padding: 15px 0px 0px 15px;
  text-align: ${isMobile() ? "center" : "left"};
  img {
    width: ${isMobile() ? "40%" : "50%"};
  }
  margin-bottom: ${isMobile() ? "20px" : "0px"};
`;
const Menu = styled.ul`
  padding: 0px;
  max-width: 100vh;
  list-style: none;
  display: flex;
  gap: ${isMobile() ? "15px" : "30px"};
  flex-wrap: wrap;
  align-content: center;
  justify-content: ${isMobile() ? "center" : "flex-end"};
  li {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    line-height: 20px;
    color: #2d2d2d;
  }
`;

const ContainedButton = styled.button`
  padding: 12px 29px;
  cursor: pointer;
  color: #ffffff;
  background: #ff6e40;
  display: block;
  margin: unset;
  border-radius: 5px;
  &:hover {
    transform: scale(1.07);
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>
      <Menu>
        <li>Home</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>
          <ContainedButton as="a">Login</ContainedButton>
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;

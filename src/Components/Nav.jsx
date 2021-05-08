import React from "react";
import logo from "../images/Urban Riders.png";
import { Link } from "react-router-dom";
import {
  NavContainer,
  LogoContainer,
  Menu,
  ContainedButton,
} from "./StyledComponents/StyledComp";
import { emptyUser, useAuth } from "../Utils/AuthProvider";
import { signOut } from "./../Utils/AuthProvider";
const Nav = () => {
  const [AuthInfo, setAuthInfo] = useAuth();

  function Logout() {
    signOut()
      .then((res) => {
        if (res) {
          setAuthInfo(emptyUser);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <NavContainer>
      <LogoContainer as={Link} to="/">
        <img src={logo} alt="" />
      </LogoContainer>
      <Menu className="mainmenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/Navigate/Car">Destination</Link>
        </li>

        <li>
          {AuthInfo.isLoggedIn ? (
            <>
              <img className="userimg" src={AuthInfo.photoURL} alt=""></img>
              <span>{AuthInfo.username}</span>
            </>
          ) : (
            " "
          )}
        </li>
        <li>
          {AuthInfo.isLoggedIn ? (
            <>
              <ContainedButton onClick={() => Logout()}>Logout</ContainedButton>
            </>
          ) : (
            <ContainedButton as={Link} to="/Login">
              Login
            </ContainedButton>
          )}
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;

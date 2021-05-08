import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { isMobile } from "./StyledComponents/StyledComp";
import styled from "styled-components";
const Vehicle = styled.div`
  cursor: pointer;
  padding: 40px 10px;
  img {
    width: 50%;
  }
  h5 {
    margin: unset;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #2d2d2d;
  }
  background: #ffffff;
  border-radius: 10px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.07);
  }
`;

const Transport = ({ image, name }) => {
  const history = useHistory();
  return (
    <Link to={"/Navigate/" + name}>
      <Vehicle>
        <img src={image} alt="" />
        <h5>{name}</h5>
      </Vehicle>
    </Link>
  );
};

export default Transport;

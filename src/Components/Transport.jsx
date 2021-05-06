import React from "react";
import styled from "styled-components";
import { mobileCheck as isMobile } from "../utils";

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
  return (
    <Vehicle>
      <img src={image} alt="" />
      <h5>{name}</h5>
    </Vehicle>
  );
};

export default Transport;

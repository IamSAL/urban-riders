import React from "react";
import styled from "styled-components";
import homeBG from "../images/Bg.png";
import { mobileCheck as isMobile } from "../utils";
import Transport from "./Transport";
import Car from "../images/Car.png";
import Bike from "../images/Bike.png";
import Train from "../images/Train.png";
import Bus from "../images/Bus.png";

const CityBG = styled.div`
  min-height: 100vh;
  background: url(${homeBG});
  background-size: ${isMobile() ? "cover" : "contain"};
  background-repeat: repeat-x;
  h1 {
    margin: 0;
  }
`;

const Transports = styled.div`
  min-height: 100vh;
  padding: ${isMobile() ? "200px 20px" : "30px"};
  display: grid;
  grid-template-columns: ${isMobile() ? "1fr" : "1fr 1fr 1fr 1fr"};
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
`;
const Home = () => {
  console.log("isMobile", isMobile());
  return (
    <CityBG>
      <Transports>
        <Transport image={Bike} name="Bike"></Transport>
        <Transport image={Car} name="Car"></Transport>
        <Transport image={Bus} name="Bus"></Transport>
        <Transport image={Train} name="Train"></Transport>
      </Transports>
    </CityBG>
  );
};

export default Home;

import styled from "styled-components";
import { mobileCheck as isMobile } from "../../Utils";

export const NavContainer = styled.div`
  padding: ${isMobile() ? "15px 0px" : "15px 5% 0px 5%"};
  position: absolute;
  top: 0;

  display: grid;
  grid-template-columns: ${isMobile() ? "1fr" : "1fr 2fr"};
`;
export const LogoContainer = styled.div`
  padding: 15px 0px 0px 15px;
  text-align: ${isMobile() ? "center" : "left"};
  img {
    width: ${isMobile() ? "40%" : "50%"};
  }
  margin-bottom: ${isMobile() ? "20px" : "0px"};
`;

export const Menu = styled.ul`
  padding: 0px;
  max-width: 100vw;
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

export const ContainedButton = styled.button`
  padding: 12px 29px;
  cursor: pointer;
  color: #ffffff !important;
  background: #ff6e40;
  display: block;
  margin: unset;
  transition: 0.1s;
  border: 0px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.04);
  }
`;

export const SubmitButton = styled(ContainedButton)`
  border: 0px;
  border-radius: 0px;
  width: 100%;
`;

export const RoundedIconButton = styled.button`
  background-color: white;
  border: 1px solid #ababab;
  padding: 10px 5px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  svg {
    margin-right: 10px;
    font-size: 20px;
    color: #ff6e40;
  }
  transition: 0.1s;
  margin-top: 15px;
  &:hover {
    border: 1px solid #ff6e40;
  }
`;
export const StyledForm = styled.form`
  border: 1px solid #ababab;
  padding: 30px;
  margin-bottom: 30px;
`;
export const InputField = styled.input`
  width: 100%;
  margin: 30px 0px 10px 0px;
  height: 30px;
  &::placeholder {
    color: #ababab;
  }
  transition: 0.2s;
  border: 0px;
  border-bottom: 1px solid #ababab;
  display: block;
  &:focus {
    outline: none !important;
    border-bottom: 1px solid #ff6e40;
  }
`;

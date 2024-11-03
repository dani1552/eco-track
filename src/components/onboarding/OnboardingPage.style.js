import styled from "styled-components";
import LogoIcon from "/src/assets/icons/earth-logo-horizon.svg?react";
import ArrowLeftIcon from "/src/assets/icons/arrow-left-icon.svg?react";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 0 20px;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TextContainer = styled.div`
  display: center;
  text-align: center;
  position: flex;
  margin-top: 100px;
`;

export const Text = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: var(--weight-medium);

  &:first-of-type {
    font-size: 20px;
    font-weight: var(--weight-extra-bold);
  }
`;

export const SubmitButton = styled(Link)`
  width: 260px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #216dff;
  color: white;
  margin-top: 80px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  text-decoration: none;
`;

export const SliderWrapper = styled.div`
  width: 300px;
  margin-top: 20px;

  .slick-dots {
    bottom: 0px;
    li {
      margin: 0 5px;
    }
    button:before {
      font-size: 12px;
      color: #bbb;
      opacity: 0.75;
      margin-top: 40px;
    }
    .slick-active button:before {
      color: #216dff;
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: center;
  align-items: center;
`;

export const ArrowLink = styled(Link)`
  position: relative;
  top: 45px;
  left: 70px;
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  width: 20px;
  height: 20px;
`;

export const Logo = styled(LogoIcon)`
  position: relative;
  top: 65px;
  left: 90px;
  width: 130px;
  height: 30px;
  margin-bottom: 40px;
`;

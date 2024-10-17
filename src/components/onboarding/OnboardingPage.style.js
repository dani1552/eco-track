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
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Logo = styled(LogoIcon)`
  position: absolute;
  top: 38px;
  left: 50px;
  width: 130px;
  height: 30px;
  margin-bottom: 40px;
`;

export const TextContainer = styled.div`
  display: center;
  text-align: center;
  position: flex;
  margin-top: 120px;
  margin-bottom: 0px;
`;

export const Text = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: var(--weight-medium);

  &:first-of-type {
    font-size: 20px;
    font-weight: var(--weight-bold);
  }
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 50px;
  background-color: ${(props) => (props.clicked ? "#216DFF" : "#216DFF")};
  color: white;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #216dff;
  }
`;

export const SliderWrapper = styled.div`
  width: 300px;
  .slick-dots {
    bottom: 0px;
    li {
      margin: 0 5px;
    }
    button:before {
      font-size: 12px;
      color: #bbb;
      opacity: 0.75;
    }
    .slick-active button:before {
      color: #216dff;
      opacity: 1;
    }
  }
`;

export const ArrowLink = styled(Link)`
  position: absolute;
  top: 40px;
  left: 20px;
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  width: 20px;
  height: 20px;
`;

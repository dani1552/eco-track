import styled from "styled-components";
import LogoIcon from "/src/assets/icons/logo.svg?react";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden; // 스크롤 방지
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
  top: 50px;
  left: 30px;
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
    font-size: 23px;
    font-weight: var(--weight-bold);
  }
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: ${(props) =>
    props.clicked ? "#5A81FF" : "rgba(90, 129, 255, 0.5)"};
  color: white;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #5a81ff;
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
      color: #5a81ff;
      opacity: 1;
    }
  }
`;

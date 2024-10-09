import { styled } from "styled-components";
import LogoIcon from "/src/assets/icons/logo.svg?react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 300px;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue);
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
  width: 100%;
  height: 200px;
  text-align: left;
  color: white;
  font-weight: var(--weight-bold);
  font-size: 24px;
  margin-top: 120px;
  margin-left: 30px;

  p {
    position: relative;
    margin-bottom: 10px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

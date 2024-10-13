import { styled } from "styled-components";
import LogoIcons from "/src/assets/icons/logo.svg?react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  background-color: var(--color-blue);
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  min-width: 300px;
  //  justify-content: center;
  justify-content: space-between;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 3;
  //  margin-top: 40px;

  & > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex: 7;
`;

export const TitleText = styled.p`
  font-size: 24px;
  font-weight: var(--weight-bold);
  color: var(--color-white);
  text-align: start;
  margin: 5px 30px;
`;

export const LogoIcon = styled(LogoIcons)`
  width: 120px;
  height: 30px;
  margin-top: 20px;
  margin-left: 20px;
`;

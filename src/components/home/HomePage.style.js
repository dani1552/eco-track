import { styled } from "styled-components";
import LogoIcons from "/src/assets/icons/logo-white.svg?react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  background-color: var(--color-blue);
  /*  background: radial-gradient(
    circle,
    rgba(155, 179, 255, 1) 0%,
    rgba(53, 85, 188, 1) 100%
  ); */
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

export const LogoIcon = styled(LogoIcons)`
  width: 100px;
  height: 30px;
  margin-top: 30px;
  margin-left: 30px;
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

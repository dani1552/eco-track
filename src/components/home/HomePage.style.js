import { styled, createGlobalStyle } from "styled-components";
import LogoIcon from "/src/assets/icons/logo.svg?react";

export const Container = styled.div`
  width: 100%; /* 뷰포트 너비를 꽉 채우도록 설정 */
  height: 100vh;
  display: flex;
  align-items: stretch; /* 양옆을 꽉 채우도록 설정 */
  flex-direction: column;
  background-color: var(--color-blue);
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  min-width: 300px;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BottomContainer = styled.div`
  width: 100vw; /* 뷰포트 너비를 꽉 채우도록 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex: 2;
`;

export const TitleText = styled.p`
  font-size: 24px;
  font-weight: var(--weight-bold);
  color: var(--color-white);
  text-align: center;
  margin: 0;
  padding: 0;
`;

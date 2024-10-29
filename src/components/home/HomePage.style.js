import { styled } from "styled-components";
import LogoIcons from "/src/assets/icons/earth-logo-horizon.svg?react";
import SettingsIcon from "/src/assets/icons/setting-icon.svg?react";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  background-color: #f6f5fa;
  /*  background: radial-gradient(
    circle,
    rgba(155, 179, 255, 1) 0%,
    rgba(53, 85, 188, 1) 100%
  ); */
  overflow-x: hidden;
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const LogoIcon = styled(LogoIcons)`
  width: 140px;
  height: 30px;
  margin-left: 30px;
`;

export const LinkWrapper = styled(Link)``;

export const SettingIcon = styled(SettingsIcon)`
  width: 20px;
  color: #515058;
  margin-right: 30px;
  color: 515058;
`;

export const TopContainer = styled.div`
  width: 100%;
  min-width: 300px;
  //  justify-content: center;
  justify-content: space-between;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;

  & > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0px;
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
  font-size: 20px;
  font-weight: var(--weight-extra-bold);
  color: var(--color-black);
  text-align: start;
  margin: 5px 30px;
`;

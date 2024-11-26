import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcons from "/src/assets/icons/home-icon.svg?react";
import ProfileIcons from "/src/assets/icons/profile-icon.svg?react";
import PaperIcons from "/src/assets/icons/paper-icon.svg?react";
import MapIcons from "/src/assets/icons/map-icon.svg?react";
import ChatIcons from "/src/assets/icons/chat-icon.svg?react";

export const Container = styled.footer`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  margin: 0 auto;

  box-sizing: border-box;
  padding: 10px 0;
  z-index: 999;

  background-color: var(--color-white);
  border-top: 1px solid #f3f4f6;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled(Link)`
  width: 100px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: var(--color-gray-200);
  font-weight: var(--weight-light);
  font-size: 12px;

  svg {
    fill: ${(props) => (props.$isActive ? "#216DFF" : "#515058")};
  }
`;

export const HomeIcon = styled(HomeIcons)`
  width: 20px;
  height: 20px;
`;
export const PaperIcon = styled(PaperIcons)`
  width: 20px;
  height: 20px;
`;
export const MapIcon = styled(MapIcons)`
  width: 20px;
  height: 20px;
`;
export const ProfileIcon = styled(ProfileIcons)`
  width: 20px;
  height: 20px;
`;

export const ChatIcon = styled(ChatIcons)`
  width: 20px;
  height: 20px;
`;

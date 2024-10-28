import styled from "styled-components";
import UserIcons from "/src/assets/icons/user-icon.svg?react";
import EarthLogos from "/src/assets/icons/earth-logo-horizon.svg?react";

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const EarthLogo = styled(EarthLogos)`
  width: 140px;
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  justify-content: start;
`;

export const TitleText = styled.p`
  width: 100%;
  height: 20px;
  color: black;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: var(--weight-bold);
`;

export const SubTitleText = styled.p`
  width: 100%;
  height: 20px;
  color: black;
  text-align: start;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: var(--weight-bold);
`;

export const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-color: #f6f5fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: var(--weight-bold);
  color: #333;
  margin: 20px 0px;
`;

export const UserIcon = styled(UserIcons)`
  width: 40px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f6f5fa;
  border-radius: 30px;
`;

import styled from "styled-components";
import UserIcons from "/src/assets/icons/user-icon.svg?react";
import SettingIcons from "/src/assets/icons/setting-icon.svg?react";
// import LogoIcons from "/src/assets/icons/logo.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const AvatarUpload = styled.label`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: var(--color-lightgray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
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
`;

export const UserIcon = styled(UserIcons)`
  width: 50px;
  height: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SettingIcon = styled(SettingIcons)``;

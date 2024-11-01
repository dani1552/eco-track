import styled from "styled-components";
import LogoIcon from "/src/assets/icons/earth-logo-horizon.svg?react";
import NaverIcon from "/src/assets/icons/naver-icon.svg?react";
import AppleIcon from "/src/assets/icons/apple-icon.svg?react";
import KakaoIcon from "/src/assets/icons/kakao-round-icon.svg?react";
import EyesIcon from "/public/assets/icons/eyes-icon.svg?react";
import EyeSlashIcon from "/public/assets/icons/eyeslash-icon.svg?react";

export const Form = styled.form`
  width: 100%;
  margin-top: 80px;
`;

export const Title = styled.div`
  width: 100%;
  min-width: 300px;

  color: var(--color-darkgray);
  font-weight: bold;
  font-size: 22px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const SubText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-bold);
  text-align: start;
  margin-left: 55px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  text-align: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 300px;
  height: 50px;

  background-color: white;
  font-size: 16px;
  color: #000000;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid var(--color-lightgray);
  padding-left: 10px;
  padding-right: 40px;

  &::placeholder {
    font-size: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;

  background-color: ${(props) =>
    props.clicked ? "#216dff" : "rgba(90, 129, 255, 0.5)"};
  color: #ffffff;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
`;

export const AuthOptionsContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  gap: 10px;
`;

export const Link = styled.link`
  &:hover {
    text-decoration: none;
    color: var(--color-darkgray);
  }
  &:last-of-type {
    text-decoration: underline;
    position: absolute;
    right: 0;
  }
`;

export const ErrorText = styled.div`
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  color: #515058;
`;

export const SwitcherWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Switcher = styled.div`
  margin: 20px;
  font-weight: var(--weight-medium);

  a {
    color: var(--color-blue);
  }
`;

export const Logo = styled(LogoIcon)`
  width: 180px;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  p {
    font-weight: var(--weight-medium);
  }
`;

export const SocialLoginButton = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const Naver = styled(NaverIcon)`
  width: 40px;
  height: 40px;
`;

export const Kakao = styled(KakaoIcon)`
  width: 40px;
  height: 40px;
`;

export const Apple = styled(AppleIcon)`
  width: 40px;
  height: 40px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;

  position: absolute;
  left: 305px;

  justify-content: center;
  align-items: center;
`;

export const Eyes = styled(EyesIcon)`
  width: 15px;
  height: 15px;
  color: #515058;
`;

export const EyeSlash = styled(EyeSlashIcon)`
  width: 15px;
  height: 15px;
  color: #515058;
`;

export const CapsLockContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-left: 50px;
  margin-bottom: 10px;
`;

export const CapsLockText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  color: #515058;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

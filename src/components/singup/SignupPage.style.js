import styled from "styled-components";
import LogoIcon from "/src/assets/icons/earth-logo-horizon.svg?react";

export const Form = styled.form`
  width: 100%;
  margin-top: 80px;
`;

export const Title = styled.div`
  width: 100%;
  min-width: 300px;

  color: black;
  font-weight: var(--weight-extra-bold);
  font-size: var(--font-medium);
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 80px;
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
  color: black;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid var(--color-lightgray);
  padding-left: 10px;
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

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .p {
    font-weight: var(--weight-bold);
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const SocialLoginButton = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Error = styled.div`
  font-weight: 600;
  color: tomato;
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

export const SubText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-semi-bold);
  text-align: start;
  margin-left: 55px;
  margin-bottom: 10px;
`;

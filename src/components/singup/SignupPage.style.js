import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  min-width: 300px;

  color: var(--color-darkgray);
  font-weight: bold;
  font-size: var(--font-medium);
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const InputWrapper = styled.div`
  width: 100vw;

  text-align: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 300px;
  height: 50px;

  font-size: 16px;
  color: #000000;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid var(--color-lightgray);
  padding-left: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 315px;
  height: 50px;

  background-color: ${(props) =>
    props.clicked ? "#5A81FF" : "rgba(90, 129, 255, 0.5)"};
  color: #ffffff;
  margin-top: 50px;
  border: none;
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
  a {
    color: var(--color-blue);
  }
`;

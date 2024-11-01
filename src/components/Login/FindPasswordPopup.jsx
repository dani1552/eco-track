import { useState } from "react";
import styled from "styled-components";
import { auth } from "/src/firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import LeftArrowIcon from "/src/assets/icons/arrow-left-icon.svg?react";
import { useNavigate } from "react-router-dom";

function FindPasswordPopup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLeftArrowClick = () => {
    navigate(-1);
  };

  const handlePasswordReset = async () => {
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("이메일이 전송되었습니다.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("이메일 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <PopupContainer>
        <TopContainer>
          <LeftArrowWrapper onClick={handleLeftArrowClick}>
            <LeftArrow />
          </LeftArrowWrapper>
          <TitleText>비밀번호 찾기</TitleText>
        </TopContainer>
        <InputWrapper>
          <SubText>이메일</SubText>
          <TextInput
            type="text"
            name="email"
            placeholder="ecotrack@naver.com"
            value={email}
            onChange={handleEmailChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={handlePasswordReset}>메일 보내기</SubmitButton>
        </ButtonWrapper>
        {message && <Message>{message}</Message>}
        {error && <Error>{error}</Error>}
      </PopupContainer>
    </Container>
  );
}

export default FindPasswordPopup;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;

  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  gap: 70px;
`;

const LeftArrowWrapper = styled.div`
  width: 20px;
  cursor: pointer;
`;

const LeftArrow = styled(LeftArrowIcon)`
  width: 20px;
  height: 20px;
`;

const TitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-extra-bold);
  text-align: center;
`;

const PopupContainer = styled.div`
  width: 300px;
  height: 240px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 30px;
`;

export const SubText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  text-align: start;
  margin-left: 40px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  text-align: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 230px;
  height: 35px;
  background-color: white;
  font-size: 16px;
  color: #000000;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid var(--color-lightgray);
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 230px;
  height: 35px;
  background-color: ${(props) =>
    props.clicked ? "#216dff" : "rgba(90, 129, 255, 1)"};
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const Message = styled.p`
  color: #216dff;
  font-size: 12px;
  font-weight: var(--weight-medium);
  text-align: start;
  margin-top: 10px;
  margin-left: 40px;
`;

export const Error = styled.p`
  color: #216dff;
  font-size: 12px;
  font-weight: var(--weight-medium);
  text-align: start;
  margin-top: 10px;
  margin-left: 40px;
`;

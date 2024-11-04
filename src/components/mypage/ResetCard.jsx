import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "/src/firebase.js";
import { signOut } from "firebase/auth";

function ResetItem() {
  const navigate = useNavigate();

  const handleResetClick = () => {
    navigate("/start");
  };

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("로그아웃 에러: ", error);
    }
  };

  const handlePageIntro = () => {
    navigate("/intro");
  };

  return (
    <Container>
      <ResetButton onClick={handleResetClick}>
        <ButtonText>⚙️ 목표 점수 재설정하기</ButtonText>
      </ResetButton>
      <ResetButton>
        <ButtonText onClick={handleLogoutClick}>👋🏻 로그아웃하기</ButtonText>
      </ResetButton>
      <ResetButton>
        <ButtonText onClick={handlePageIntro}>👀 페이지 설명 보기</ButtonText>
      </ResetButton>
    </Container>
  );
}

export default ResetItem;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ResetButton = styled.button`
  width: 320px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  /* box shadow */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-medium);
  color: black;
`;

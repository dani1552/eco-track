import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ResetItem() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/start");
  };

  return (
    <Container>
      <ResetButton onClick={handleOnClick}>
        <ButtonText>⚙️ 목표 점수 재설정하기</ButtonText>
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
`;

import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import BirthdayIcon from "/src/assets/icons/birthday-icon.png";

function CompletedPopup({ isCompleted }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      openModal();
    }
  }, [isCompleted]);

  const openModal = () => {
    setIsOpen(true);
    document.getElementById("root").inert = true; // 백그라운드 비활성화
  };

  const closeModal = () => {
    setIsOpen(false);
    document.getElementById("root").inert = false; // 백그라운드 비활성화 해제
  };

  return (
    <>
      {isOpen && (
        <StyledModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          overlayElement={(props, contentElement) => (
            <Overlay {...props}>{contentElement}</Overlay>
          )}
        >
          <TitleText>축하해요!</TitleText>
          <SubTitleText>작은 목표들이 모여 큰 성과를 이뤘어요</SubTitleText>
          <StyledImage src={BirthdayIcon} alt="축하 아이콘" />
          <ButtonContainer>
            {/* 버튼을 중앙에 정렬 */}
            <Button onClick={closeModal}>닫기</Button>
          </ButtonContainer>
        </StyledModal>
      )}
    </>
  );
}

export default CompletedPopup;

const StyledModal = styled(Modal)`
  width: 300px;
  height: 300px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #007bff;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: var(--weight-bold);
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SubTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-semi-bold);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border: 1px solid #216dff;
  color: #216dff;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  cursor: pointer;
  font-weight: var(--weight-semi-bold);

  &:hover {
    background-color: #216dff;
    color: white;
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 20px;
`;

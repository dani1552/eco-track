import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  width: 300px;
  height: 200px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
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
  background-color: rgba(0, 0, 0, 0.75); /* 반투명 검정색 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: var(--weight-bold);
`;

const SubTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-semi-bold);
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 5px;

  cursor: pointer;
  font-weight: var(--weight-semi-bold);

  &:hover {
    background-color: #0056b3;
  }
`;

function CompletedPopup({ isCompleted }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      openModal();
    }
  }, [isCompleted]);

  const openModal = () => {
    setIsOpen(true);
    document.getElementById("root").insert = true; // 백그라운드 비활성화
  };

  const closeModal = () => {
    setIsOpen(false);
    document.getElementById("root").insert = false; // 백그라운드 비활성화 해제
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
          <SubTitleText>작은 목표들이 모여 큰 성과를 이뤘어요 👏🏻</SubTitleText>
          <Button onClick={closeModal}>닫기</Button>
        </StyledModal>
      )}
    </>
  );
}

export default CompletedPopup;

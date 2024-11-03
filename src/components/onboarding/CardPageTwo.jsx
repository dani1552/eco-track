import { useState } from "react";
import styled from "styled-components";
import ThermosterIcon from "/src/assets/icons/thermoster-icon.svg?react";
import CupIcon from "/src/assets/icons/cup-icon.svg?react";
import MeatIcon from "/src/assets/icons/meat-icon.svg?react";

function CardPageTwo({ updateScore }) {
  const [clickedCards, setClickedCards] = useState([]);

  const scoreMap = {
    thermoster: 5,
    cup: 3,
    meat: 10,
  };

  const handleClick = (cardName) => {
    if (clickedCards.includes(cardName)) {
      // 이미 선택된 카드일 경우 제거 및 점수 차감
      setClickedCards(clickedCards.filter((name) => name !== cardName));
      updateScore(-scoreMap[cardName]);
    } else {
      // 선택되지 않은 카드일 경우 추가 및 점수 더하기
      setClickedCards([...clickedCards, cardName]);
      updateScore(scoreMap[cardName]);
    }
  };

  return (
    <Container>
      <CardWrapper>
        <WideCard
          $bgColor="#5A81FF"
          $isClicked={clickedCards.includes("thermoster")}
          onClick={() => handleClick("thermoster")}
        >
          <ThermosterIcon />
          <TextContainer>
            <MainText>실내 적정 온도를 유지하지 않아요</MainText>
            <SubText>여름철 24-26°C, 겨울철 18-20°C</SubText>
          </TextContainer>
        </WideCard>
        <VerticalCardWrapper>
          <VerticalCard
            $bgColor="#FF8F00"
            $isClicked={clickedCards.includes("cup")}
            onClick={() => handleClick("cup")}
          >
            <CupIcon />
            <TextContainer>
              <MainText>일회용품을</MainText>
              <MainText>자주 사용해요</MainText>
            </TextContainer>
          </VerticalCard>
          <VerticalCard
            $bgColor="#4CD964"
            $isClicked={clickedCards.includes("meat")}
            onClick={() => handleClick("meat")}
          >
            <MeatIcon />
            <TextContainer>
              <MainText>육류를</MainText>
              <MainText>자주 소비해요</MainText>
            </TextContainer>
          </VerticalCard>
        </VerticalCardWrapper>
      </CardWrapper>
    </Container>
  );
}

export default CardPageTwo;

const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  margin-top: 40px;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 5px 20px;
  svg {
    width: 45px;
    height: 40px;
    margin-bottom: 15px;
  }
`;

const WideCard = styled.div`
  width: 250px;
  height: 120px;
  background-color: ${(props) => props.$bgColor || "#f0f0f0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0;
  margin-left: 8px;
  opacity: ${(props) => (props.$isClicked ? 1 : 0.5)};
  transition: opacity 0.3s ease, background-color 0.3s ease;
`;

const VerticalCard = styled.div`
  width: 50%;
  height: 140px;
  background-color: ${(props) => props.$bgColor || "#f0f0f0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-weight: bold;
  margin: 0px 5px;
  opacity: ${(props) => (props.$isClicked ? 1 : 0.5)};
  transition: opacity 0.3s ease, background-color 0.3s ease;
`;

const VerticalCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainText = styled.p`
  color: white;
  font-weight: var(--weight-bold);
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 4px;
`;

const SubText = styled.p`
  color: white;
  font-weight: var(--weight-medium);
  font-size: 14px;
`;

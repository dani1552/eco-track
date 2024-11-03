import { useState } from "react";
import styled from "styled-components";
import BusIcon from "/src/assets/icons/bus-icon.svg?react";
import BikeIcon from "/src/assets/icons/bike-icon.svg?react";
import WalkerIcon from "/src/assets/icons/walker-icon.svg?react";

function CardPageOne({ updateScore }) {
  const [clickedCards, setClickedCards] = useState([]);
  const scoreMap = {
    bus: 10,
    bike: 5,
    walker: 3,
  };

  const handleCardClick = (cardName) => {
    if (clickedCards.includes(cardName)) {
      setClickedCards(clickedCards.filter((name) => name !== cardName));
      updateScore(-scoreMap[cardName]); // 점수 차감
    } else {
      setClickedCards([...clickedCards, cardName]);
      updateScore(scoreMap[cardName]); // 점수 추가
    }
  };

  return (
    <Container>
      <CardWrapper>
        <CustomCard
          $bgColor="#5A81FF"
          $isClicked={clickedCards.includes("bus")}
          onClick={() => handleCardClick("bus")}
        >
          <BusIcon />
          <TextContainer>
            <MainText>대중교통</MainText>
            <SubText>버스, 지하철, 기차</SubText>
          </TextContainer>
        </CustomCard>

        <CustomCard
          $bgColor="#FF8F00"
          $isClicked={clickedCards.includes("bike")}
          onClick={() => handleCardClick("bike")}
        >
          <BikeIcon />
          <TextContainer>
            <MainText>개인형 이동수단</MainText>
            <SubText>차, 택시, 킥보드</SubText>
          </TextContainer>
        </CustomCard>

        <CustomCard
          $bgColor="#4CD964"
          $isClicked={clickedCards.includes("walker")}
          onClick={() => handleCardClick("walker")}
        >
          <WalkerIcon />{" "}
          <TextContainer>
            <MainText>친환경 이동수단</MainText>
            <SubText>도보, 자전거</SubText>{" "}
          </TextContainer>
        </CustomCard>
      </CardWrapper>
    </Container>
  );
}

export default CardPageOne;

const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 5px 20px;
`;

const CustomCard = styled.div`
  width: 100%;
  height: 100px;
  color: white;
  background-color: ${(props) => props.$bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0;
  opacity: ${(props) => (props.$isClicked ? 1 : 0.5)};
  transition: opacity 0.3s ease, background-color 0.3s ease;

  svg {
    margin-right: 20px;
    width: 45px;
    height: 45px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  margin-left: 10px;
`;

const MainText = styled.p`
  color: white;
  font-weight: var(--weight-bold);
  font-size: 18px;
  margin-bottom: 10px;
`;

const SubText = styled.p`
  color: white;
  font-weight: var(--weight-semi-bold);
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

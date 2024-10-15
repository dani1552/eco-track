import styled from "styled-components";
import BusIcon from "/src/assets/icons/bus-icon.svg?react";
import BikeIcon from "/src/assets/icons/bike-icon.svg?react";
import WalkerIcon from "/src/assets/icons/walker-icon.svg?react";

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
  height: 120px;
  background-color: ${(props) => props.$bgColor || "#f0f0f0"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0;

  svg {
    margin-right: 20px;
    width: 45px;
    height: 45px;
  }
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
  font-size: 18px;
  margin-bottom: 10px;
`;

const SubText = styled.p`
  color: white;
  font-weight: var(--weight-medium);
  font-size: 16px;
`;

function CardPageOne() {
  return (
    <Container>
      <CardWrapper>
        <CustomCard $bgColor="#5A81FF">
          <BusIcon />
          <TextContainer>
            <MainText>대중교통</MainText>
            <SubText>버스, 지하철, 기차</SubText>
          </TextContainer>
        </CustomCard>
        <CustomCard $bgColor="#FF8F00">
          <BikeIcon />
          <TextContainer>
            <MainText>개인형 이동수단</MainText>
            <SubText>차, 택시, 킥보드</SubText>
          </TextContainer>
        </CustomCard>
        <CustomCard $bgColor="#4CD964">
          <WalkerIcon />
          <TextContainer>
            <MainText>친환경 이동수단</MainText>
            <SubText>도보, 자전거</SubText>
          </TextContainer>
        </CustomCard>
      </CardWrapper>
    </Container>
  );
}

export default CardPageOne;

import styled from "styled-components";
import TicketIcon from "/src/assets/icons/ticket-icon.svg?react";
import TrophyIcon from "/src/assets/icons/trophy-icon.svg?react";
import FirstIcon from "/src/assets/icons/star-icon.svg?react";
import CongraduIcon from "/src/assets/icons/congraduation-icon.svg?react";

function RecordCard() {
  return (
    <Container>
      <CardWrppaer>
        <Card>
          <Ticket />
          <TextWrapper>
            <TitleText>모은 포인트</TitleText>
            <SubTitleText>76</SubTitleText>
          </TextWrapper>
        </Card>
        <Card>
          <Trophy />
          <TextWrapper>
            <TitleText>참여한 시간</TitleText>
            <SubTitleText>16:37</SubTitleText>
          </TextWrapper>
        </Card>
      </CardWrppaer>
      <CardWrppaer>
        <Card>
          <First />
          <TextWrapper>
            <TitleText>참여한 날 (일)</TitleText>
            <SubTitleText>18</SubTitleText>
          </TextWrapper>
        </Card>
        <Card>
          <Congraduation />
          <TextWrapper>
            <TitleText>완료한 (일)</TitleText>
            <SubTitleText>13</SubTitleText>
          </TextWrapper>
        </Card>
      </CardWrppaer>
    </Container>
  );
}

export default RecordCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

const CardWrppaer = styled.div`
  display: flex;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  width: 160px;
  height: 80px;
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 20px;
  justify-content: center;
`;

const TitleText = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: var(--weight-medium);
  margin-bottom: 5px;
  text-align: start;
  color: #9190a0;
`;

const SubTitleText = styled.p`
  text-align: center;
  font-weight: var(--weight-extra-bold);
  font-size: 18px;
  text-align: start;
`;

const Ticket = styled(TicketIcon)`
  width: 35px;
  height: 35px;
`;

const Trophy = styled(TrophyIcon)`
  width: 35px;
  height: 35px;
`;

const First = styled(FirstIcon)`
  width: 35px;
  height: 35px;
`;

const Congraduation = styled(CongraduIcon)`
  width: 35px;
  height: 35px;
`;

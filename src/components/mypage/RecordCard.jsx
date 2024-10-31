import styled from "styled-components";
import TicketIcon from "/src/assets/icons/ticket-icon.svg?react";
import TrophyIcon from "/src/assets/icons/trophy-icon.svg?react";
import FirstIcon from "/src/assets/icons/star-icon.svg?react";
import CongraduIcon from "/src/assets/icons/congraduation-icon.svg?react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "/src/firebase.js";

function RecordCard() {
  const [participationDays, setParticipationDays] = useState(0);
  const [completedDays, setCompletedDays] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [participationTime, setParticipationTime] = useState("00:00");

  const loadUserRecords = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const datesCollection = collection(db, "users", user.uid, "dates");
        const datesSnapshot = await getDocs(datesCollection);

        // 참여한 날
        const totalParticipationDays = datesSnapshot.size;

        // 완료한 날
        const totalCompletedDays = datesSnapshot.docs.filter(
          (doc) => doc.data().iscompleted === true
        ).length;

        // 모은 포인트
        const totalSelectedScore = datesSnapshot.docs.reduce((acc, doc) => {
          const data = doc.data();
          return acc + (data.selectedScore || 0);
        }, 0);

        // 완료한 날
        const totalHours = totalParticipationDays * 24;
        const timeFormatted = convertHoursToHHMM(totalHours);

        setParticipationDays(totalParticipationDays);
        setCompletedDays(totalCompletedDays);
        setTotalPoints(totalSelectedScore);
        setParticipationTime(timeFormatted);
      } catch (error) {
        console.error("Failed to load user records:", error);
      }
    }
  };

  const convertHoursToHHMM = (hours) => {
    const totalMinutes = hours * 60;
    const hh = Math.floor(totalMinutes / 60);
    const mm = totalMinutes % 60;
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  };

  useEffect(() => {
    loadUserRecords();
  }, []);

  return (
    <Container>
      <CardWrppaer>
        <Card>
          <Ticket />
          <TextWrapper>
            <TitleText>모은 포인트</TitleText>
            <SubTitleText>{totalPoints}</SubTitleText>
          </TextWrapper>
        </Card>
        <Card>
          <Trophy />
          <TextWrapper>
            <TitleText>참여한 시간</TitleText>
            <SubTitleText>{participationTime}</SubTitleText>
          </TextWrapper>
        </Card>
      </CardWrppaer>
      <CardWrppaer>
        <Card>
          <First />
          <TextWrapper>
            <TitleText>참여한 날 (일)</TitleText>
            <SubTitleText>{participationDays}</SubTitleText>
          </TextWrapper>
        </Card>
        <Card>
          <Congraduation />
          <TextWrapper>
            <TitleText>완료한 날 (일)</TitleText>
            <SubTitleText>{completedDays}</SubTitleText>
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
  font-size: 16px;
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

import styled from "styled-components";
import UnclickedCheckBoxIcon from "/src/assets/icons/checkbox-icon.svg?react";
import ClickedCheckBoxIcon from "/src/assets/icons/clicked-checkbox-icon.svg?react";
import { useEffect, useState } from "react";
import moment from "moment";

function TodayGoal({ selectedDate }) {
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");

  useEffect(() => {
    console.log("Selected date in Todaygoal: ", selectedDate);
  }, [selectedDate]);

  return (
    <Container>
      <TitleText>오늘의 목표 {formattedDate}</TitleText>
      <SubTitleText>1/3개 완료</SubTitleText>

      <GoalItem title="실내 적정 온도 유지하기" points="+ 10포인트" />
      <GoalItem title="대중교통 이용하기" points="+ 20포인트" />
      <GoalItem title="분리수거 철저히 하기" points="+ 15포인트" />
    </Container>
  );
}

function GoalItem({ title, points }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <BottomContainer onClick={handleClick}>
      {clicked ? <ClickedCheckBox /> : <UnclickedCheckBox />}
      <GoalTextContainer>
        <GoalTitleText>{title}</GoalTitleText>
        <GoalSubText>{`${points}`}</GoalSubText>
      </GoalTextContainer>
    </BottomContainer>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 40px;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: var(--weight-bold);
  color: black;
  margin-top: 40px;
`;

const SubTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-medium);
  margin-top: 10px;
  margin-bottom: 20px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

const UnclickedCheckBox = styled(UnclickedCheckBoxIcon)`
  width: 40px;
  height: 40px;
`;

const ClickedCheckBox = styled(ClickedCheckBoxIcon)`
  width: 40px;
  height: 40px;
`;

const GoalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const GoalTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-bold);
  margin-bottom: 8px;
`;

const GoalSubText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-medium);
  color: var(--color-darkgray);
`;

export default TodayGoal;

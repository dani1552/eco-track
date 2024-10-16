import styled from "styled-components";
import UnclickedCheckBoxIcon from "/src/assets/icons/checkbox-icon.svg?react";
import ClickedCheckBoxIcon from "/src/assets/icons/clicked-checkbox-icon.svg?react";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "/src/firebase.js";
import moment from "moment";

function TodayGoal({ selectedDate, onProgressUpdate }) {
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
  const [goals, setGoals] = useState([]);

  const loadUserGoal = async () => {
    const user = auth.currentUser;
    if (user) {
      const goalsCollection = collection(
        db,
        "users",
        user.uid,
        "dates",
        formattedDate,
        "goals"
      );
      const goalsSnapshot = await getDocs(goalsCollection);
      const goalsList = goalsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGoals(goalsList);
    }
  };

  useEffect(() => {
    loadUserGoal();
  }, [selectedDate]);

  useEffect(() => {
    const completedGoals = goals.filter(
      (goal) => goal.completed && goal.selected
    ).length;
    const selectedGoals = goals.filter((goal) => goal.selected).length;

    // 진행률 계산
    const progress =
      selectedGoals > 0 ? (completedGoals / selectedGoals) * 100 : 0;

    onProgressUpdate(progress); // 부모 컴포넌트에 progress 전달
  }, [goals, onProgressUpdate]);

  const handleGoalUpdate = (goalId, updatedCompleted) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: updatedCompleted } : goal
      )
    );
  };

  return (
    <Container>
      <TitleText>오늘의 목표 {formattedDate}</TitleText>
      <SubTitleText>{`${
        goals.filter((goal) => goal.completed && goal.selected).length
      }/${goals.filter((goal) => goal.selected).length}개 완료`}</SubTitleText>
      {goals
        .filter((goal) => goal.selected)
        .map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            title={goal.title}
            points={goal.points}
            completed={goal.completed ?? false}
            formattedDate={formattedDate}
            onStatusChange={handleGoalUpdate}
          />
        ))}
    </Container>
  );
}

function GoalItem({
  id,
  title,
  points,
  completed,
  formattedDate,
  onStatusChange,
}) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const user = auth.currentUser;

  // 체크박스 클릭 시 Firestore에 completed 상태 업데이트
  const handleCheckClick = async () => {
    const updatedCompleted = !isCompleted;
    setIsCompleted(updatedCompleted); // 상태 토글

    if (user) {
      try {
        const goalDocRef = doc(
          db,
          "users",
          user.uid,
          "dates",
          formattedDate,
          "goals",
          id
        );
        // Firestore에 completed 상태 업데이트
        await updateDoc(goalDocRef, {
          completed: updatedCompleted,
        });

        // 상태 변경 후 부모 컴포넌트로 상태 업데이트 알림
        onStatusChange(id, updatedCompleted);
      } catch (error) {
        console.error("데이터 업데이트 실패:", error);
      }
    } else {
      console.log("로그인이 필요합니다 (GoalItem)");
    }
  };

  return (
    <BottomContainer onClick={handleCheckClick}>
      {isCompleted ? <ClickedCheckBox /> : <UnclickedCheckBox />}
      <GoalTextContainer>
        <GoalTitleText>{title}</GoalTitleText>
        <GoalSubText>{`+ ${points}포인트`}</GoalSubText>
      </GoalTextContainer>
    </BottomContainer>
  );
}

export default TodayGoal;

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

import styled from "styled-components";
import UnclickedCheckBoxIcon from "/src/assets/icons/checkbox-icon.svg?react";
import ClickedCheckBoxIcon from "/src/assets/icons/clicked-checkbox-icon.svg?react";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "/src/firebase.js";
import moment from "moment";

function TodayGoal({ selectedDate }) {
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
  const [goals, setGoals] = useState([]);

  // Firestore에서 목표 데이터를 가져오는 함수
  const loadUserGoal = async () => {
    const user = auth.currentUser;
    if (user) {
      // Firestore에서 goals 데이터를 가져옴
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

  // 목표 업데이트 시 호출되는 함수
  const handleGoalUpdate = (goalId, updatedCompleted) => {
    // goals 배열을 업데이트하여 실시간 반영 (각 목표의 id === 함수에 전달된 id면 completed 상태만 업데이트)
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: updatedCompleted } : goal
      )
    );
  };

  return (
    <Container>
      <TitleText>오늘의 목표 {formattedDate}</TitleText>
      <SubTitleText>{`${goals.filter((goal) => goal.completed).length}/${
        goals.length
      }개 완료`}</SubTitleText>

      {goals
        .filter((goal) => goal.selected)
        .map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            title={goal.title}
            points={goal.points}
            completed={goal.completed ?? false} // completed == null이면 기본값 false
            formattedDate={formattedDate}
            onStatusChange={handleGoalUpdate} // 상태 변경 콜백 전달
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

import styled from "styled-components";
import UnclickedCheckBoxIcon from "/src/assets/icons/uncheck-circle-icon.svg?react";
import ClickedCheckBoxIcon from "/src/assets/icons/check-circle-icon.svg?react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
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

    const progress =
      selectedGoals > 0 ? (completedGoals / selectedGoals) * 100 : 0;

    onProgressUpdate(progress);

    const totalScore = goals.reduce((acc, goal) => acc + goal.points, 0);
    const selectedScore = goals
      .filter((goal) => goal.selected && goal.completed)
      .reduce((acc, goal) => acc + goal.points, 0);

    const user = auth.currentUser;

    if (user) {
      const dateDocRef = doc(db, "users", user.uid, "dates", formattedDate);

      getDoc(dateDocRef).then((docSnapshot) => {
        // selectedScore < totalScore -> iscompleted: false
        if (selectedScore < totalScore) {
          updateDoc(dateDocRef, { iscompleted: false })
            .then(() => {
              console.log(
                `selectedScore < totalScore, iscompleted set to false for ${formattedDate}`
              );
            })
            .catch((error) => {
              console.error("Failed to update iscompleted field:", error);
            });
        } else if (completedGoals === selectedGoals && selectedGoals > 0) {
          // selectedScore >= totalScore -> iscompleted: true
          if (docSnapshot.exists()) {
            updateDoc(dateDocRef, { iscompleted: true })
              .then(() => {
                console.log(
                  `All goals completed for ${formattedDate}. iscompleted: true`
                );
              })
              .catch((error) => {
                console.error("Failed to update iscompleted field:", error);
              });
          } else {
            setDoc(dateDocRef, { iscompleted: true })
              .then(() => {
                console.log(
                  `Document created for ${formattedDate}. iscompleted: true`
                );
              })
              .catch((error) => {
                console.error("Failed to create document:", error);
              });
          }
        }
      });
    }
  }, [goals, onProgressUpdate, formattedDate]);

  const handleGoalUpdate = (goalId, updatedCompleted) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, completed: updatedCompleted } : goal
      )
    );
  };

  return (
    <Container>
      <TitleText>{formattedDate} 오늘의 목표 </TitleText>
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

        await updateDoc(goalDocRef, {
          completed: updatedCompleted,
        });

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
  margin-left: 60px;
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
  margin-top: 8px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

const ClickedCheckBox = styled(ClickedCheckBoxIcon)`
  margin-top: 8px;
  margin-right: 8px;
  width: 20px;
  height: 20px;
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

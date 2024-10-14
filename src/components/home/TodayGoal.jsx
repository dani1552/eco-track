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
  const fetchGoals = async () => {
    const user = auth.currentUser;
    if (user) {
      const goalsCollection = collection(db, "users", user.uid, "goals");
      const goalsSnapshot = await getDocs(goalsCollection);
      const goalsList = goalsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGoals(goalsList);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, [selectedDate]);

  return (
    <Container>
      <TitleText>오늘의 목표 {formattedDate}</TitleText>
      <SubTitleText>{`${goals.filter((goal) => goal.completed).length}/${
        goals.length
      }개 완료`}</SubTitleText>

      {goals
        .filter((goal) => goal.completed) // completed가 true인 것만 필터링
        .map((goal) => (
          <GoalItem
            key={goal.id}
            id={goal.id}
            title={goal.title}
            points={goal.points}
            completed={goal.completed}
            onStatusChange={fetchGoals} // 상태가 변경될 때 화면 갱신
          />
        ))}
    </Container>
  );
}

function GoalItem({ id, title, points, completed, onStatusChange }) {
  const [clicked, setClicked] = useState(completed);
  const user = auth.currentUser;
  const [checkClicked, setCheckClicked] = useState(false);

  const handleCheckClick = () => {
    setCheckClicked(!checkClicked);
  };

  const handleClick = async () => {
    setClicked(!clicked);

    if (user) {
      // Firestore에 데이터 업데이트
      try {
        const goalDocRef = doc(db, "users", user.uid, "goals", id);
        await updateDoc(goalDocRef, {
          completed: !clicked,
        });
        console.log(`update ${goalDocRef} to ${completed}`);
        onStatusChange(); // 상태 변경 후 부모 컴포넌트에서 데이터 다시 불러오기
      } catch (error) {
        console.error("데이터 업데이트 실패:", error);
      }
    } else {
      console.log("로그인이 필요합니다 (GoalItem)");
    }
  };

  return (
    <BottomContainer onClick={handleClick}>
      {checkClicked ? (
        <ClickedCheckBox onClick={handleCheckClick} />
      ) : (
        <UnclickedCheckBox onClick={handleClick} />
      )}
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

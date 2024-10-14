import { useState, useEffect } from "react";
import {
  Container,
  GoalContainer,
  IconWrapper,
  GoalTextContainer,
  GoalTitleText,
  GoalSubText,
  SubmitButton,
} from "/src/components/task-setting/TaskSettingPage.style.js";
import CupIcon from "/src/assets/icons/cup-icon.svg?react";
import ThermosterIcon from "/src/assets/icons/thermoster-icon.svg?react";
import BusIcon from "/src/assets/icons/bus-icon.svg?react";
import WalkerIcon from "/src/assets/icons/walker-icon.svg?react";

// firebase
import { db, auth } from "/src/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

function TaskSettingPage() {
  return (
    <Container>
      <GoalItem icon={CupIcon} title="실내 적정 온도 유지하기" points={10} />
      <GoalItem icon={ThermosterIcon} title="대중교통 이용하기" points={20} />
      <GoalItem icon={BusIcon} title="분리수거 철저히 하기" points={8} />
      <GoalItem icon={WalkerIcon} title="가까운 거리는 걸어가기" points={12} />
      <GoalItem icon={CupIcon} title="일회용품 사용 줄이기" points={15} />
    </Container>
  );
}

function GoalItem({ icon: Icon, title, points }) {
  const [clicked, setClicked] = useState(false);
  const user = auth.currentUser;

  // Firestore에서 현재 상태를 가져오는 함수
  const fetchGoalState = async () => {
    if (user) {
      const goalDocRef = doc(db, "users", user.uid, "goals", title);
      const goalDoc = await getDoc(goalDocRef);

      if (goalDoc.exists()) {
        setClicked(goalDoc.data().completed);
      }
    }
  };

  useEffect(() => {
    fetchGoalState();
  }, []);

  const handleClick = async () => {
    if (user) {
      try {
        const newClickedState = !clicked; // toggle
        setClicked(newClickedState);

        // Firestore에 데이터 저장
        await setDoc(doc(db, "users", user.uid, "goals", title), {
          title: title,
          points: points,
          completed: newClickedState,
          userId: user.uid,
        });
      } catch (error) {
        console.error("데이터 저장 실패:", error);
        setClicked(!clicked);
      }
    } else {
      console.log("로그인이 필요합니다 (TaskSetting)");
    }
  };

  return (
    <GoalContainer onClick={handleClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <GoalTextContainer>
        <GoalTitleText>{title}</GoalTitleText>
        <GoalSubText>{`+ ${points}포인트`}</GoalSubText>
      </GoalTextContainer>
      <SubmitButton onClick={handleClick} clicked={clicked}>
        {clicked ? "취소하기" : "등록하기"}
      </SubmitButton>
    </GoalContainer>
  );
}

export default TaskSettingPage;

import { useState } from "react";
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
import { doc, setDoc } from "firebase/firestore";

function TaskSetting() {
  return (
    <Container>
      <GoalItem icon={CupIcon} title="실내 적정 온도 유지하기" points={10} />
      <GoalItem icon={ThermosterIcon} title="대중교통 이용하기" points={10} />
      <GoalItem icon={BusIcon} title="분리수거 철저히 하기" points={10} />
      <GoalItem icon={WalkerIcon} title="가까운 거리는 걸어가기" points={10} />
      <GoalItem icon={CupIcon} title="일회용품 사용 줄이기" points={10} />
    </Container>
  );
}

function GoalItem({ icon: Icon, title, points }) {
  const [clicked, setClicked] = useState(false);
  const user = auth.currentUser;

  const handleClick = async () => {
    setClicked(!clicked);

    if (user) {
      // Firestore에 데이터 저장
      try {
        await setDoc(doc(db, "users", user.uid, "goals", title), {
          title: title,
          points: points,
          completed: !clicked, // 현재 클릭 상태 반대로 저장
          userId: user.uid,
        });
        console.log("목표 저장 성공");
      } catch (error) {
        console.error("데이터 저장 실패:", error);
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
        등록하기
      </SubmitButton>
    </GoalContainer>
  );
}

export default TaskSetting;

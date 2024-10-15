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
import moment from "moment";

function TaskSettingPage() {
  const todayDate = moment().format("YYYY-MM-DD");

  return (
    <Container>
      <GoalItem
        icon={CupIcon}
        title="실내 적정 온도 유지하기"
        points={10}
        date={todayDate}
      />
      <GoalItem
        icon={ThermosterIcon}
        title="대중교통 이용하기"
        points={20}
        date={todayDate}
      />
      <GoalItem
        icon={BusIcon}
        title="분리수거 철저히 하기"
        points={8}
        date={todayDate}
      />
      <GoalItem
        icon={WalkerIcon}
        title="가까운 거리는 걸어가기"
        points={12}
        date={todayDate}
      />
      <GoalItem
        icon={CupIcon}
        title="일회용품 사용 줄이기"
        points={15}
        date={todayDate}
      />
    </Container>
  );
}

function GoalItem({ icon: Icon, title, points, date }) {
  const [clicked, setClicked] = useState(false);
  const user = auth.currentUser;

  const goalDocRef = user
    ? doc(db, "users", user.uid, "dates", date, "goals", title)
    : null;

  // Firestore에서 현재 상태를 가져오는 함수
  const fetchGoalState = async () => {
    if (goalDocRef) {
      const goalDoc = await getDoc(goalDocRef);

      if (goalDoc.exists()) {
        setClicked(goalDoc.data().selected);
      } else {
        console.log("데이터가 존재하지 않습니다.");
      }
    }
  };

  useEffect(() => {
    fetchGoalState();
  }, []);

  const handleClick = async () => {
    if (goalDocRef) {
      try {
        const toggleSelected = !clicked;
        setClicked(toggleSelected);

        // Firestore에 데이터 저장 (업데이트 / 생성)
        await setDoc(goalDocRef, {
          title: title,
          points: points,
          selected: toggleSelected,
          userId: user.uid,
        });

        // 상태에 따라 콘솔에 메시지 출력
        if (toggleSelected) {
          console.log(`${title}를 등록했습니다`);
        } else {
          console.log(`${title}를 해지했습니다`);
        }
      } catch (error) {
        console.error("데이터 저장 실패:", error);
        setClicked(!clicked); // 에러 발생 시 원래 상태로 복원
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
      <SubmitButton onClick={handleClick} $clicked={clicked}>
        {clicked ? "취소하기" : "등록하기"}
      </SubmitButton>
    </GoalContainer>
  );
}

export default TaskSettingPage;

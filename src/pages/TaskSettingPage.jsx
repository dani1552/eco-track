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

function TaskSetting() {
  return (
    <Container>
      <GoalItem
        icon={CupIcon}
        title="실내 적정 온도 유지하기"
        points="+ 10포인트"
      />
      <GoalItem
        icon={ThermosterIcon}
        title="대중교통 이용하기"
        points="+ 20포인트"
      />
      <GoalItem
        icon={BusIcon}
        title="분리수거 철저히 하기"
        points="+ 15포인트"
      />
      <GoalItem
        icon={WalkerIcon}
        title="가까운 거리는 걸어가기"
        points="+ 15포인트"
      />
      <GoalItem
        icon={CupIcon}
        title="일회용품 사용 줄이기"
        points="+ 15포인트"
      />
    </Container>
  );
}

function GoalItem({ icon: Icon, title, points }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <GoalContainer onClick={handleClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <GoalTextContainer>
        <GoalTitleText>{title}</GoalTitleText>
        <GoalSubText>{points}</GoalSubText>
      </GoalTextContainer>
      <SubmitButton onClick={handleClick} clicked={clicked}>
        등록하기
      </SubmitButton>
    </GoalContainer>
  );
}

export default TaskSetting;

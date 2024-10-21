import { useNavigate } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  ChallengeIcon1,
  IconWrapper,
  ChallengeTitleText,
  ChallengeSubTitleText,
  SubmitButton,
  ExplainTitleText,
  ExplainSubTitleText,
  ChallengeSubTitleWrapper,
  TimeIcon,
  UserIcon,
} from "/src/components/challenge-popup/ChallengePopup.style.js";
import { useState } from "react";
import TumblerIcon from "/src/assets/icons/tumbler-icon.jpg";

function ChallengePopup1() {
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    // 파이어베이스에 챌린지1 저장
  };

  const handleArrowClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <TopContainer backgroundImage={TumblerIcon}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <ChallengeIcon1 />
        </IconWrapper>

        <ChallengeTitleText>일회용 플라스틱 줄이기 챌린지</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>24.11.01 - 24.11.30</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>121</ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText>
          11월 한달 간 주 3회 이상 일상에서 무분별하게 사용되는 일회용
          플라스틱을 줄이고, 커피나 음료를 구매할 때 텀블러와 같은 재사용 가능한
          용기를 사용하는 것을 목표로 도전하세요!
        </ExplainSubTitleText>
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText>
          • 커피숍, 음료 가게 또는 회사에서 음료를 구매할 때 재사용 가능한
          텀블러를 지참하세요. <br /> • 외출할 때 개인 물병을 휴대하여, 일회용
          페트병 사용을 줄이세요. <br />• 식당에서 포장을 하거나 배달 음식을
          주문할 때, 가능한 경우 재사용 가능한 도시락통을 사용해 보세요. <br />•
          친구와 가족에게도 챌린지에 대해 이야기하고, 함께 동참할 수 있도록
          권유하세요.
        </ExplainSubTitleText>
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText>
          • 일부 매장에서는 위상 또는 정책 상 다회용기 사용이 어려울 수
          있으므로, 미리 확인하세요. <br />
          • 일부 매장은 다회용기를 사용하면 할인 혜택을 적용합니다.
          <br /> • 꼭 필요한 경우나 위생적으로 어려울 때는 일회용기를 사용할 수
          있지만, 사용 후에는 올바르게 분리수거하여 환경에 미치는 영향을
          최소화하세요!
        </ExplainSubTitleText>
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopup1;

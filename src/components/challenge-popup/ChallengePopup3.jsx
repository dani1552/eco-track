import { useNavigate } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  ChallengeIcon3,
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
import WalkBgIcon from "/src/assets/icons/walk-bg-icon.jpg";

function ChallengePopupPage() {
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
      <TopContainer backgroundImage={WalkBgIcon}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <ChallengeIcon3 />
        </IconWrapper>

        <ChallengeTitleText>가까운 거리 걸어가기 챌린지</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>24.11.01 - 24.11.30</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>730</ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText>
          일상에서 짧은 거리를 걸어서 이동함으로써 건강을 증진하고, 동시에
          자동차나 대중교통 이용을 줄여 환경 보호에 기여하는 것을 목표로 합니다.
          1~2km 이내의 거리를 걷는 습관을 통해 신체 활동을 늘리고, 배출되는
          탄소를 줄이며, 작은 실천으로 큰 변화를 만들어보세요.
        </ExplainSubTitleText>
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText>
          • 1~2km 이내의 거리를 설정해, 가능한 걸어서 이동합니다. <br /> •
          대중교통을 이용할 때 한두 정거장 정도는 미리 내려서 걷는 연습을
          합니다. <br />• 걸은 거리를 기록해주는 앱을 이용해 도전 기록을
          관리하세요. <br />• 친구와 가족에게도 챌린지에 대해 이야기하고, 걷는
          습관을 함께 만들 수 있도록 권유하세요.
        </ExplainSubTitleText>
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText>
          • 걸을 때 안전한 길인지, 보행로가 있는지 확인한 후 걷기를 시작하세요.
          <br />
          • 더운 날에는 물을 충분히 마시고, 추운 날에는 옷을 따뜻하게 입고
          걸으세요.
          <br /> • 건강 상태에 맞게 걷기 거리를 조정하며, 무리하지 않도록
          유의하세요.
        </ExplainSubTitleText>
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopupPage;

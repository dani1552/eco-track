import { useNavigate } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  ChallengeIcon4,
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
import ShowerIcon from "/src/assets/icons/shower-icon.avif";

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
      <TopContainer backgroundImage={ShowerIcon}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <ChallengeIcon4 />
        </IconWrapper>

        <ChallengeTitleText>낭비 없는 샤워 챌린지</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>24.11.01 - 24.11.30</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>407</ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText>
          주 5회 샤워 시간을 줄여 물 낭비를 최소화하고, 물을 절약함으로써 환경
          보호에 기여하는 챌린지입니다. 많은 양의 물이 샤워 중 낭비되기 쉬운데,
          이를 줄이기 위해 샤워 시간을 5분 이내로 관리하며 지속 가능한 생활
          습관을 형성하는 것이 목표입니다!
        </ExplainSubTitleText>
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText>
          • 샤워를 시작하기 전 타이머를 설정해 5분 이내로 샤워 시간을
          관리하세요. <br /> • 비누칠을 할 때는 물을 잠그고, 씻는 순서를 미리
          계획해 시간을 줄이세요. <br />• 물 사용량을 줄일 수 있는 저수압
          샤워기를 사용해 절약을 실천하세요. <br />• 물 사용량을 줄일 수 있는
          저수압 샤워기를 사용해 절약을 실천하세요.
        </ExplainSubTitleText>
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText>
          • 짧은 샤워 시간을 위해 지나치게 차가운 물이나 뜨거운 물을 사용하지
          않도록 주의하세요. 적정 온도의 물을 사용해 피부와 건강을 보호하세요.
          <br />
          • 짧은 시간 내에 샤워를 완료하려고 너무 무리하지 마세요. 건강과 위생을
          최우선으로 유지하세요.
          <br /> • 수압이 너무 세지 않게 조절하여 물이 낭비되지 않도록 신경 쓰고
          물 절약에 도움이 되는 샤워기와 욕실 장비를 사용해보세요.
        </ExplainSubTitleText>
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopupPage;

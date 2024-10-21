import { useNavigate } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  ChallengeIcon2,
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
import RecycleIcon from "/src/assets/icons/recycle-icon.jpg";

function ChallengePopupPage() {
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    // 파이어베이스에 챌린지2 저장
  };

  const handleArrowClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <TopContainer backgroundImage={RecycleIcon}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <ChallengeIcon2 />
        </IconWrapper>

        <ChallengeTitleText>제로웨이스트 챌린지</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>24.11.01 - 24.11.30</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>1030</ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText>
          주 3회 이상 쓰레기 배출을 최소화하거나 전혀 배출하지 않는 것을 목표로
          하는 환경 보호 캠페인이에요. 일상 속에서 불필요한 쓰레기를 줄이고,
          재사용 가능한 제품을 사용하는 것을 통해 자원 낭비를 방지하고 환경에
          긍정적인 영향을 기여해요!
        </ExplainSubTitleText>
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText>
          • 외출할 때 텀블러, 에코백, 도시락통 등을 준비하여 일회용품 사용을
          줄이세요. <br /> • 장을 볼 때, 포장되지 않은 채소나 과일을 선택하거나,
          개인 용기를 사용하여 필요한 양만큼만 구매하세요. <br />• 장볼 때나
          물건을 살 때 비닐봉지 대신 항상 에코백을 지참하세요. <br />• 만약
          쓰레기를 배출해야 할 경우, 정확한 분리수거를 통해 재활용할 수 있도록
          하세요.
        </ExplainSubTitleText>
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText>
          • 일부 매장에서는 위상 또는 정책 상 다회용기 사용이 어려울 수
          있으므로, 미리 확인하세요. <br />
          • 모든 쓰레기를 배출하지 못하는 경우라도, 가능한 한 최소화하고 정확한
          분리수거로 환경에 미치는 영향을 줄이도록 노력하세요.
          <br /> • 처음부터 완벽하게 쓰레기를 배출하지 않으려는 부담감을 가질
          필요는 없습니다. 작은 실천도 큰 변화를 만들 수 있으니 꾸준히
          도전하세요!
        </ExplainSubTitleText>
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopupPage;

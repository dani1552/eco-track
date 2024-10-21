import { useNavigate } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  ChallengeIcon5,
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
import VeganIcon from "/src/assets/icons/vegan-icon.jpg";

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
      <TopContainer backgroundImage={VeganIcon}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <ChallengeIcon5 />
        </IconWrapper>

        <ChallengeTitleText>채식 하루 도전 챌린지</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>24.11.01 - 24.11.30</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>1217</ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText>
          매주 하루 동안 육류를 소비하지 않고 채식 위주의 식사를 실천하는
          도전입니다. 채식은 육류 생산 과정에서 발생하는 탄소 배출과 자원 낭비를
          줄이고, 지구에 긍정적인 변화를 일으키기 위한 작은 실천입니다. 건강한
          채식 메뉴를 계획하고 즐겁게 채식의 이점을 경험해보세요!
        </ExplainSubTitleText>
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText>
          • 본인의 일정에 맞춰 매주 하루를 채식하는 날로 지정하세요. <br /> •
          영양이 균형 잡힌 채식 식단을 미리 계획하세요. 다양한 채소, 과일, 곡물,
          콩류 등으로 맛있고 건강한 식단을 구성할 수 있습니다. <br />• 콩고기,
          두부, 버섯 등 육류를 대체할 수 있는 다양한 식재료를 활용해보세요.
          <br />• 가족이나 친구들과 함께 채식 도전에 동참하면 더 즐겁고 의미
          있는 경험이 될 수 있습니다.
        </ExplainSubTitleText>
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText>
          • 채식하는 동안 단백질, 철분, 비타민 B12 등 부족할 수 있는 영양소를
          충분히 섭취할 수 있도록 신경 쓰세요. 콩, 두부, 견과류 등으로 단백질을
          보충하고, 철분이 풍부한 녹황색 채소나 보충제를 활용하세요.
          <br />
          • 평소 육류 위주 식단을 하던 분들은 갑작스러운 채식이 몸에 부담이 될
          수 있으니, 본인의 몸 상태에 맞게 도전하세요.
          <br /> • 채식 도전이 처음엔 어려울 수 있지만, 서서히 익숙해질 수
          있도록 긍정적인 마음으로 시작하세요. 채식의 장점에 집중하며, 환경과
          건강을 위해 지속적인 노력을 기울이세요.
        </ExplainSubTitleText>
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopupPage;

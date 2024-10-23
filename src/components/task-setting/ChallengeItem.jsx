import {
  ChallengeCard,
  ChallengeSubTitleText,
  ChallengeTitleText,
  TextContainer,
} from "./TaskSettingPage.style";

const ChallengeItem = ({ icon: Icon, title, subtitle, routeTo }) => {
  return (
    <>
      <ChallengeCard onClick={routeTo} style={{ cursor: "pointer" }}>
        <Icon />
        <TextContainer>
          <ChallengeTitleText>{title}</ChallengeTitleText>
          <ChallengeSubTitleText>{subtitle}</ChallengeSubTitleText>
        </TextContainer>
      </ChallengeCard>
    </>
  );
};

export default ChallengeItem;

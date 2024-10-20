import {
  ChallengeCard,
  ChallengeSubTitleText,
  ChallengeTitleText,
  TextContainer,
} from "./TaskSettingPage.style";

const ChallengeItem = ({ icon: Icon, title, subtitle }) => {
  return (
    <>
      <ChallengeCard>
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

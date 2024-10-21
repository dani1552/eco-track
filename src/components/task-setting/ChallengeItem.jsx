import { useNavigate } from "react-router-dom";
import {
  ChallengeCard,
  ChallengeSubTitleText,
  ChallengeTitleText,
  TextContainer,
} from "./TaskSettingPage.style";

const ChallengeItem = ({ icon: Icon, title, subtitle, routeTo }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("handlecardclick is running!");
    navigate(routeTo);
  };

  return (
    <>
      <ChallengeCard onClick={handleCardClick}>
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

const ChallengeCard = ({ Icon, title, subtitle }) => {
  return (
    <ChallengeCardStyled>
      <ChallengeIconStyled as={Icon} />
      <TextContainer>
        <ChallengeTitleText>{title}</ChallengeTitleText>
        <ChallengeSubTitleText>{subtitle}</ChallengeSubTitleText>
      </TextContainer>
    </ChallengeCardStyled>
  );
};

export default ChallengeCard;

// ChallengeCard.style.js
import styled from "styled-components";

export const ChallengeCardStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  width: 350px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 10px;
`;

export const ChallengeIconStyled = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChallengeTitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  margin-bottom: 5px;
`;

export const ChallengeSubTitleText = styled.p`
  font-size: 14px;
  color: var(--color-darkgray);
`;

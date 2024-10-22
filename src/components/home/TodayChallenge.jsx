import styled from "styled-components";
import ChallengeIcons1 from "/public/assets/icons/challenge-1.svg?react";
import ChallengeIcons2 from "/public/assets/icons/challenge-2.svg?react";
import ChallengeIcons3 from "/public/assets/icons/challenge-3.svg?react";
import ChallengeIcons4 from "/public/assets/icons/challenge-4.svg?react";
import ChallengeIcons5 from "/public/assets/icons/challenge-5.svg?react";

function TodayChallenge() {
  return (
    <Container>
      <TitleText>참여중인 챌린지</TitleText>
      <IconWrapper>
        <ChallengeIcon1 />
        <ChallengeIcon2 />
        <ChallengeIcon3 />
        <ChallengeIcon4 />
        <ChallengeIcon5 />
      </IconWrapper>
    </Container>
  );
}

export default TodayChallenge;

const Container = styled.div`
  width: 100%;
`;

const TitleText = styled.p`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: var(--weight-bold);
  margin-top: 30px;
  margin-left: 30px;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 80px;
`;

const ChallengeIcon1 = styled(ChallengeIcons1)`
  width: 40px;
`;
const ChallengeIcon2 = styled(ChallengeIcons2)`
  width: 40px;
`;
const ChallengeIcon3 = styled(ChallengeIcons3)`
  width: 40px;
`;
const ChallengeIcon4 = styled(ChallengeIcons4)`
  width: 40px;
`;
const ChallengeIcon5 = styled(ChallengeIcons5)`
  width: 40px;
`;

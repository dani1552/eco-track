import styled from "styled-components";
import LogoIcons from "/src/assets/icons/earth-logo-horizon.svg?react";
import ChallengeIcons1 from "/src/assets/icons/challenge-1.svg?react";
import ChallengeIcons2 from "/src/assets/icons/challenge-2.svg?react";
import ChallengeIcons3 from "/src/assets/icons/challenge-3.svg?react";
import ChallengeIcons4 from "/src/assets/icons/challenge-4.svg?react";
import ChallengeIcons5 from "/src/assets/icons/challenge-5.svg?react";

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`;

export const TopContainer = styled.div`
  width: 100%;
`;

export const LogoIcon = styled(LogoIcons)`
  width: 140px;
  min-height: 30px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  cursor: pointer;
  justify-content: space-between;
`;

export const TitleText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 8px;
`;

export const SubTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-medium);
  margin-left: 30px;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 30px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const GoalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 10px;
  align-items: start;
`;

export const GoalTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-extra-bold);
  margin-bottom: 8px;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const GoalSubText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-medium);
  color: var(--color-darkgray);
  text-align: start;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #216dff;
  border-radius: 20px;
  background-color: ${(props) => (props.$clicked ? "#216DFF" : "#FFFFFF")};
  color: ${(props) => (props.$clicked ? "#FFFFFF" : "#216DFF")};
  margin-right: 60px;
  font-weight: var(--weight-semi-bold);
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 12px;
    font-weight: var(--weight-bold);
    width: 130px;
  }
`;

export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;
  :hover {
    background-color: #f6f5fa;
  }
`;

export const ChallengeCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9190a0;
  width: 350px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 10px;
  color: black;
`;

export const ChallengeIcon1 = styled(ChallengeIcons1)`
  width: 40px;
  height: 40px;
`;

export const ChallengeIcon2 = styled(ChallengeIcons2)`
  width: 40px;
  height: 40px;
`;

export const ChallengeIcon3 = styled(ChallengeIcons3)`
  width: 40px;
  height: 40px;
`;

export const ChallengeIcon4 = styled(ChallengeIcons4)`
  width: 40px;
  height: 40px;
`;

export const ChallengeIcon5 = styled(ChallengeIcons5)`
  width: 40px;
  height: 40px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: start;
`;

export const ChallengeTitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-bold);
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
`;

export const ChallengeSubTitleText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: black;
`;

export const SizedBox10 = styled.div`
  width: 100%;
  height: 10px;
`;

export const SizedBox20 = styled.div`
  width: 100%;
  height: 20px;
`;

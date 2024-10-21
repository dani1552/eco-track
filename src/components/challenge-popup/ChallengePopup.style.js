import styled from "styled-components";
import LeftArrowIcons from "/src/assets/icons/arrow-left-icon.svg?react";
import ChallengeIcons1 from "/src/assets/icons/challenge-1.svg?react";
import ChallengeIcons2 from "/src/assets/icons/challenge-2.svg?react";
import ChallengeIcons3 from "/src/assets/icons/challenge-3.svg?react";
import ChallengeIcons4 from "/src/assets/icons/challenge-4.svg?react";
import ChallengeIcons5 from "/src/assets/icons/challenge-5.svg?react";
import TimeIcons from "/src/assets/icons/time-icon.svg?react";
import UserIcons from "/src/assets/icons/user-icon.svg?react";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const LeftArrowIcon = styled(LeftArrowIcons)`
  width: 30px;
  height: 30px;
  color: black;
`;

export const TitleText = styled.p`
  font-size: 18px;
  font-weight: var(--weight-bold);

  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-left: 130px;
  margin-right: 150px;
  color: black;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImage});
`;

export const BottomContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
  overflow-y: auto;
  padding: 20px;
`;

export const JoinChallengeContainer = styled.div`
  width: 80%;
  height: auto;
  padding: 20px;
  background-color: white;
  margin: -50px auto 0;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChallengeTitleText = styled.p`
  font-size: 18px;
  font-weight: var(--weight-bold);

  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  margin-top: 20px;
`;

export const ChallengeSubTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 15px 0px;
`;

export const ChallengeSubTitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-medium);

  color: #9190a0;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.button.attrs((props) => ({
  isClicked: props.isClicked,
}))`
  width: 100%;
  height: 35px;
  font-size: 14px;
  font-weight: var(--weight-bold);

  background-color: ${(props) => (props.isClicked ? " #9190A0" : "#216dff")};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const ExplainTitleText = styled.p`
  font-size: 18px;
  font-weight: var(--weight-extra-bold);
  margin-top: 30px;
  margin-left: 20px;
`;

export const ExplainSubTitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-medium);
  color: #515058;
  margin-top: 10px;
  margin-left: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const TimeIcon = styled(TimeIcons)`
  width: 15px;
  height: 15px;
  color: #9190a0;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 10px;
`;

export const UserIcon = styled(UserIcons)`
  width: 15px;
  height: 15px;
  color: #9190a0;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  margin-right: 10px;
`;

export const ChallengeIcon1 = styled(ChallengeIcons1)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
export const ChallengeIcon2 = styled(ChallengeIcons2)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
export const ChallengeIcon3 = styled(ChallengeIcons3)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
export const ChallengeIcon4 = styled(ChallengeIcons4)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
export const ChallengeIcon5 = styled(ChallengeIcons5)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

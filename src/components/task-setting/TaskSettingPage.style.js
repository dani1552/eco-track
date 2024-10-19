import styled from "styled-components";
import LogoIcons from "/src/assets/icons/earth-logo-horizon.svg?react";

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
  margin-bottom: 40px;
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
  font-weight: var(--weight-bold);
  margin-bottom: 8px;
`;

export const GoalSubText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-medium);
  color: var(--color-darkgray);
  text-align: start;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-blue);
  border-radius: 20px;
  background-color: ${(props) => (props.$clicked ? "#216DFF" : "#FFFFFF")};
  color: ${(props) => (props.$clicked ? "#FFFFFF" : "#216DFF")};
  margin-right: 60px;
  font-weight: var(--weight-semi-bold);
  font-size: 14px;
`;

export const RecommendContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 10px;
`;

export const RecommendCard = styled.button`
  width: 150px;
  height: 50px;
  background-color: gray;
`;

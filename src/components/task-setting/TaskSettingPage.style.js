import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 40px;
`;

export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
  justify-content: space-between;
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
  position: center;
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
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-blue);
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "#5A81FF" : "#FFFFFF")};
  color: ${(props) => (props.clicked ? "#FFFFFF" : "#5A81FF")};
  margin-right: 60px;
  font-weight: var(--weight-semibold);
`;

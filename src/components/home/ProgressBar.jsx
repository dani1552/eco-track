import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBars from "react-bootstrap/ProgressBar";
import { styled } from "styled-components";

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-white);
`;

const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-white);
`;

const CustomProgressBar = styled(ProgressBars)`
  .progress-bar {
    background-color: #4caf50;
  }
`;

function ProgressBar() {
  const now = 70; // 진행률 값 받아오도록 수정하기!
  return (
    <ProgressWrapper>
      <Label>진행률</Label>
      <CustomProgressBar now={now} style={{ flex: 0.8, height: "10px" }} />
      <Percentage>{`${now}%`}</Percentage>
    </ProgressWrapper>
  );
}

export default ProgressBar;

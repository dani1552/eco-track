import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBars from "react-bootstrap/ProgressBar";
import { styled } from "styled-components";

function ProgressBar({ progress }) {
  return (
    <ProgressWrapper>
      <Label>진행률</Label>
      <CustomProgressBar
        now={progress}
        style={{ flex: 0.75, height: "10px" }}
      />
      <Percentage>{`${Math.round(progress)}%`}</Percentage>
    </ProgressWrapper>
  );
}

export default ProgressBar;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 370px;
  margin-top: 20px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #515058;
`;

const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: 515058;
`;

const CustomProgressBar = styled(ProgressBars)`
  background-color: #9190a0;

  .progress-bar {
    border-radius: 10px;
    background-color: #7bd58f;
  }
`;

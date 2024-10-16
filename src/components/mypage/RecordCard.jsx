import styled from "styled-components";

function RecordCard() {
  return (
    <Container>
      <TitleText>성공 일 수</TitleText>
      <SubTitleText>23</SubTitleText>
    </Container>
  );
}

export default RecordCard;

const Container = styled.div`
  width: 180px;
  height: 80px;
  background-color: white;
  color: black;
  border-radius: 10px;
  margin-left: 20px;
  padding: 15px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const TitleText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: var(--weight-medium);
  margin-bottom: 10px;
`;

const SubTitleText = styled.p`
  text-align: center;
  font-weight: var(--weight-extra-bold);
  font-size: 24px;
`;

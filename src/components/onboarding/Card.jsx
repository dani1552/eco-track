import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  display: block;
  justify-content: space-around;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 120px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 40px 0;
`;

function Card() {
  return (
    <CardWrapper>
      <CardContainer>대중교통</CardContainer>
      <CardContainer>개인형 이동수단</CardContainer>
      <CardContainer>친환경 이동수단</CardContainer>
    </CardWrapper>
  );
}

export default Card;

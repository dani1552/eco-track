import styled from "styled-components";
import { Link } from "react-router-dom";
import HelloIcon from "/src/assets/icons/hello-icon.svg?react";
import ArrowLeftIcon from "/src/assets/icons/arrow-left-icon.svg?react";

function OnboardingStart() {
  return (
    <Container>
      <Content>
        <ArrowLink to="/login">
          <ArrowLeft />
        </ArrowLink>
        <CardWrapper>
          <SubText>EcoTrack 200% 활용 방법</SubText>
          <TitleText>목표 점수를 설정하고,</TitleText>
          <TitleText>지속가능한 성장을 위한</TitleText>
          <TitleText>최적의 제안을 만나보세요!</TitleText>
          <Hello />
          <SubText>저장된 점수는 다시 설정할 수 있어요!</SubText>
        </CardWrapper>
        <SubmitButton to="/onboarding">목표 설정하기</SubmitButton>
        <LaterLink to="/home"> 나중에 할게요 </LaterLink>
      </Content>
    </Container>
  );
}

export default OnboardingStart;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 20px;
`;

const Content = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CardWrapper = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 120px;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: var(--weight-bold);
  margin-bottom: 10px;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-semibold);

  &:first-of-type {
    color: var(--color-blue);
    font-weight: var(--weight-semi-bold);
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled(Link)`
  display: inline-block;
  width: 300px;
  height: 50px;
  background-color: #216dff;
  color: white;
  text-align: center;
  line-height: 50px;
  margin-top: 80px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
`;

const LaterLink = styled(Link)`
  margin-top: 20px;
  font-size: 16px;
  color: black;
  text-decoration: underline;
`;

const Hello = styled(HelloIcon)`
  width: 100px;
  height: 100px;
  margin: 60px 0px;
`;

const ArrowLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  width: 20px;
  height: 20px;
`;

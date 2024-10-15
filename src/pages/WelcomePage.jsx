import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BlueLogoIcon from "/src/assets/icons/blue-logo-2.png";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <BlueLogo src={BlueLogoIcon} alt="Logo" />
      <SignupButton onClick={() => navigate("/signup")}>회원가입</SignupButton>
      <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
    </Container>
  );
}

export default WelcomePage;

const Container = styled.div`
  background-color: white;
  margin: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BlueLogo = styled.img`
  width: 160px;
  margin-top: 200px;
  margin-bottom: 180px;
`;

const SignupButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #216dff;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: var(--weight-extra-bold);
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #eaeaea;
  color: #216dff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: var(--weight-extra-bold);
  margin-bottom: 10px;
`;

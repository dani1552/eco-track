import { useState } from "react";
import {
  Title,
  TextInput,
  SubmitButton,
  AuthOptionsContainer,
  Link,
  SocialLoginContainer,
} from "@/components/Login/loginPage.style.js";
import KakaoLogin from "../components/Login/kakaoLogin";

function LoginPage() {
  const [clicked, setIsClicked] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  return (
    <>
      <Title>로그인</Title>
      <TextInput
        type="text"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <SubmitButton clicked={clicked} onClick={handleLoginClick}>
        로그인
      </SubmitButton>

      <AuthOptionsContainer>
        <Link>아이디 찾기</Link>
        <span>|</span>
        <Link>비밀번호 찾기</Link>
        <Link>회원가입</Link>
      </AuthOptionsContainer>

      <SocialLoginContainer>
        <p>간편 로그인</p>
        <KakaoLogin />
      </SocialLoginContainer>
    </>
  );
}

export default LoginPage;

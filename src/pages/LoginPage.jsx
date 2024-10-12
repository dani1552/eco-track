import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Title,
  TextInput,
  SubmitButton,
  SocialLoginContainer,
  SocialLoginButton,
  Error,
  Switcher,
  InputWrapper,
  ButtonWrapper,
  SwitcherWrapper,
} from "@/components/Login/loginPage.style.js";
import KakaoLogin from "../components/Login/kakaoLogin";
import { auth } from "/src/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "") return;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      if (error && error.message) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Title>로그인</Title>
        <InputWrapper>
          <TextInput
            type="text"
            name="email"
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={onChange}
          />
          <TextInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <SubmitButton clicked={clicked.toString()} onClick={handleLoginClick}>
            로그인
          </SubmitButton>
        </ButtonWrapper>

        {/* 에러 메시지 표시 */}
        {error && <Error>{error}</Error>}

        {/*         <AuthOptionsContainer>
          <Link>아이디 찾기</Link>
          <span>|</span>
          <Link>비밀번호 찾기</Link>
          <Link>회원가입</Link>
        </AuthOptionsContainer> */}

        <SwitcherWrapper>
          <Switcher>
            계정이 없으신가요? <Link to="/signup"> 회원가입하기 &rarr;</Link>
          </Switcher>
        </SwitcherWrapper>

        <SocialLoginContainer>
          <p>간편 로그인</p>
          <SocialLoginButton>
            <KakaoLogin />
          </SocialLoginButton>
        </SocialLoginContainer>
      </Form>
    </>
  );
}

export default LoginPage;

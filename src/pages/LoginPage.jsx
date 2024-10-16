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
  Logo,
  SubText,
  Naver,
  Kakao,
  Apple,
} from "@/components/Login/loginPage.style.js";
// import KakaoLogin from "../components/Login/kakaoLogin";
import { auth, db } from "/src/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
      // 사용자 인증 (로그인)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      // 사용자가 이미 Firestore에 등록되어 있는지 문서 확인
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // isFirstLogin 값에 따라 온보딩 여부 결정
        const isFirstLogin = userData.isFirstLogin ?? true;
        const nextRoute = isFirstLogin ? "/start" : "/home";

        navigate(nextRoute);
      } else {
        // Firestore에 사용자 문서가 없는 경우 새로 문서를 생성하고 첫 로그인으로 기록
        await setDoc(userDocRef, { isFirstLogin: true });
        navigate("/onboarding");
      }
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
        <Title>
          {" "}
          <Logo />
        </Title>
        <InputWrapper>
          <SubText>이메일</SubText>
          <TextInput
            type="text"
            name="email"
            placeholder="ecotrack@naver.com"
            value={email}
            onChange={onChange}
          />

          <SubText>비밀번호</SubText>
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
            {isLoading ? "로딩중" : "로그인"}
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
            <Naver />
            {/* <KakaoLogin /> */}
            <Kakao />
            <Apple />
          </SocialLoginButton>
        </SocialLoginContainer>
      </Form>
    </>
  );
}

export default LoginPage;

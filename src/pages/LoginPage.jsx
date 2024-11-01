import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FindPasswordPopup from "/src/components/Login/FindPasswordPopup.jsx";
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
  IconContainer,
  Eyes,
  EyeSlash,
  CapsLockContainer,
  CapsLockText,
  ModalBackground,
} from "@/components/Login/loginPage.style.js";
// import KakaoLogin from "../components/Login/kakaoLogin";
import { auth, db } from "/src/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { IoMdInformationCircleOutline } from "react-icons/io";

function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPW(!showPW);
  };

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      // 비밀번호에 대문자 포함 여부 확인
      setHasUpperCase(/[A-Z]/.test(value));
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

      // 사용자가 이미 Firestore에 등록되어 있을 때
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
      {showPasswordReset && (
        <ModalBackground>
          <FindPasswordPopup onClose={() => setShowPasswordReset(false)} />
        </ModalBackground>
      )}
      <Form onSubmit={onSubmit}>
        <Title>
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
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            <TextInput
              type={showPW ? "text" : "password"}
              name="password"
              placeholder="비밀번호를 입력해주세요 (6자리 이상)"
              value={password}
              onChange={onChange}
            />
            <IconContainer
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                pointerEvents: "auto",
              }}
            >
              {showPW ? <Eyes /> : <EyeSlash />}
            </IconContainer>
          </div>
        </InputWrapper>

        {hasUpperCase && (
          <CapsLockContainer>
            <IoMdInformationCircleOutline />
            <CapsLockText>
              비밀번호 입력 시 대문자가 포함되어 있습니다
            </CapsLockText>
          </CapsLockContainer>
        )}

        <ButtonWrapper>
          <SubmitButton clicked={clicked.toString()} onClick={handleLoginClick}>
            {isLoading ? "로딩중" : "로그인"}
          </SubmitButton>
        </ButtonWrapper>

        {error && <Error>{error}</Error>}

        <SwitcherWrapper>
          <Switcher>
            <Link to="/signup"> 회원가입하기 &rarr;</Link>
          </Switcher>
          <Switcher>
            <span
              onClick={() => setShowPasswordReset(true)}
              style={{ cursor: "pointer", color: "#216dff" }}
            >
              비밀번호 찾기 &rarr;
            </span>
          </Switcher>
        </SwitcherWrapper>

        <SocialLoginContainer>
          <p>간편 로그인</p>
          <SocialLoginButton>
            <Naver />
            <Kakao />
            <Apple />
          </SocialLoginButton>
        </SocialLoginContainer>
      </Form>
    </>
  );
}

export default LoginPage;

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
  ErrorText,
} from "@/components/Login/loginPage.style.js";
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
    let errorMessage = "";

    if (name === "email") {
      setEmail(value);

      // 이메일 형식 유효성 검사
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "유효한 이메일 형식이 아닙니다.";
      }
    } else if (name === "password") {
      setPassword(value);

      // 비밀번호 길이 유효성 검사
      if (value.length < 6) {
        errorMessage = "비밀번호는 최소 6자 이상이어야 합니다.";
      }

      // 비밀번호 필드가 비었을 때 오류 메시지를 공백으로 설정
      if (value.length === 0) {
        errorMessage = " ";
      }

      // 비밀번호에 대문자 포함 여부 확인
      setHasUpperCase(/[A-Z]/.test(value));
    }

    setError(errorMessage);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "") return;

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const isFirstLogin = userData.isFirstLogin ?? true;
        const nextRoute = isFirstLogin ? "/start" : "/home";
        navigate(nextRoute);
      } else {
        await setDoc(userDocRef, { isFirstLogin: true });
        navigate("/onboarding");
      }
    } catch (error) {
      let errorMessage = "로그인 중 문제가 발생했습니다. 다시 시도해주세요.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "해당 이메일로 등록된 계정이 없습니다.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "비밀번호가 올바르지 않습니다.";
      } else if (error.code === "auth/invalid-email" && email.trim() !== "") {
        // 이메일 필드가 비어있지 않을 때만 오류 메시지 설정
        errorMessage = "유효하지 않은 이메일 형식입니다.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "잘못된 인증 정보입니다. 다시 시도해주세요.";
      }
      setError(errorMessage);
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
            <CapsLockText>비밀번호에 대문자가 포함되어 있습니다</CapsLockText>
          </CapsLockContainer>
        )}

        {error.trim() && (
          <CapsLockContainer>
            <IoMdInformationCircleOutline />
            <ErrorText>{error}</ErrorText>
          </CapsLockContainer>
        )}

        <ButtonWrapper>
          <SubmitButton clicked={clicked.toString()} onClick={handleLoginClick}>
            {isLoading ? "로딩중" : "로그인"}
          </SubmitButton>
        </ButtonWrapper>

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

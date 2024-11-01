import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Title,
  TextInput,
  SubmitButton,
  ErrorText,
  Switcher,
  Logo,
  SubText,
  IconContainer,
  Eyes,
  EyeSlash,
  CapsLockContainer,
  CapsLockText,
} from "/src/components/singup/SignupPage.style.js";
import { auth } from "/src/firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputWrapper } from "../components/Login/loginPage.style";
import {
  ButtonWrapper,
  SwitcherWrapper,
} from "../components/singup/SignupPage.style";
import { IoMdInformationCircleOutline } from "react-icons/io";

function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  const togglePasswordVisibility = () => {
    setShowPW(!showPW);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
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
      } else if (value.length === 0) {
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

    if (isLoading || name === "" || email === "" || password === "") return;

    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate("/login");
    } catch (error) {
      let errorMessage = "계정 생성 중 문제가 발생했습니다. 다시 시도해주세요.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "이미 사용 중인 이메일입니다.";
      } else if (error.code === "auth/invalid-email" && email.trim() !== "") {
        errorMessage = "유효하지 않은 이메일 형식입니다.";
      } else if (error.code === "auth/weak-password") {
        errorMessage =
          "비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용하세요.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Title>
          <Logo />
        </Title>
        <InputWrapper>
          <SubText>닉네임</SubText>
          <TextInput
            type="text"
            name="name"
            placeholder="닉네임을 입력해주세요"
            value={name}
            onChange={onChange}
          />

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
          <SubmitButton
            type="submit"
            clicked={clicked.toString()}
            onClick={handleLoginClick}
          >
            {isLoading ? "로딩중" : "계정 생성하기"}
          </SubmitButton>
        </ButtonWrapper>
        <SwitcherWrapper>
          <Switcher>
            이미 계정이 있으신가요? <Link to="/login">로그인하기 &rarr;</Link>
          </Switcher>
        </SwitcherWrapper>
      </Form>
    </>
  );
}

export default SignupPage;

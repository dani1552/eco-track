import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Title,
  TextInput,
  SubmitButton,
  Error,
  Switcher,
} from "/src/components/singup/SignupPage.style.js";
import { auth } from "/src/firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputWrapper } from "../components/Login/loginPage.style";
import {
  ButtonWrapper,
  SwitcherWrapper,
} from "../components/singup/SignupPage.style";

function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setError("");

    if (isLoading || name === "" || email === "" || password === "") return;

    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: name,
      });

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
        <Title>계정 생성하기</Title>
        <InputWrapper>
          <TextInput
            type="text"
            name="name"
            placeholder="닉네임을 입력해주세요"
            value={name}
            onChange={onChange}
          />
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
          <SubmitButton
            type="submit"
            clicked={clicked.toString()}
            onClick={handleLoginClick}
          >
            {isLoading ? "Loading..." : "Create Account"}
          </SubmitButton>
        </ButtonWrapper>

        {/*   <AuthOptionsContainer>
          <Link>아이디 찾기</Link>
          <span>|</span>
          <Link>비밀번호 찾기</Link>
          <Link>회원가입</Link>
        </AuthOptionsContainer> */}
        <SwitcherWrapper>
          <Switcher>
            이미 계정이 있으신가요? <Link to="/login">로그인하기 &rarr;</Link>
          </Switcher>
        </SwitcherWrapper>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </>
  );
}

export default SignupPage;

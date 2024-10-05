import { Title, TextInput } from "@/components/Login/loginPage.style.js";

function LoginPage() {
  return (
    <>
      <Title>로그인</Title>
      <TextInput placeholder="아이디를 입력해주세요"></TextInput>
      <TextInput placeholder="비밀번호를 입력해주세요"></TextInput>
    </>
  );
}

export default LoginPage;

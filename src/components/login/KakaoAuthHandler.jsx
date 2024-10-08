import { useEffect } from "react";
import { getToken } from "/src/components/api/index.js";

export const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
export const redirect_uri = import.meta.env.VITE_LOGIN_REDIRECT_URI;
export const response_type = import.meta.env.VITE_RESPONSE_TYPE;

const LoginAuth = ({ onTokenReceived }) => {
  // 토큰 요청 함수
  const handleGetToken = async (code) => {
    const { access_token } = await getToken(code);

    if (access_token) {
      // 액세스 토큰을 localStorage에 저장
      localStorage.setItem("access_token", access_token);
      console.log("Access token saved:", access_token);
      if (onTokenReceived) {
        onTokenReceived(access_token);
      }
    } else {
      console.error("Failed to get access token");
    }
  };

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const code = search.get("code"); // 인가 코드 추출
    const accessToken = localStorage.getItem("access_token");

    // 인가 코드 o 토큰 x -> 토큰 요청
    if (code && !accessToken) {
      handleGetToken(code); // POST /oauth/token 보내기
    }
  }, []);

  return null; // UI 렌더링 x (로직 처리만 수행)
};

export default LoginAuth;

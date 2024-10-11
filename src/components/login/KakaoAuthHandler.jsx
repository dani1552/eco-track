/* // 카카오 로그인 인증 로직 (인가코드 받기 - 액세스 토큰 요청 - 로컬 스토리지에 저장)

import { useEffect } from "react";
import { getToken } from "/src/components/api/index.js";

export const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
export const redirect_uri = import.meta.env.VITE_LOGIN_REDIRECT_URI;
export const response_type = import.meta.env.VITE_RESPONSE_TYPE;

const KakaoAuthHandler = ({ onTokenReceived }) => {
  // 토큰 요청 함수
  const handleGetToken = async (code) => {
    const { access_token } = await getToken(code);

    if (access_token) {
      // 액세스 토큰을 localStorage에 저장
      localStorage.setItem("access_token", access_token);
      console.log("Access token saved:", access_token);
      if (onTokenReceived) {
        onTokenReceived(access_token); // 콜백 함수로 전달
      }
    } else {
      console.error("Failed to get access token");
    }
  };

  useEffect(() => {
    // 카카오로부터 받은 인가 코드 추출
    const search = new URLSearchParams(window.location.search);
    const code = search.get("code");
    const accessToken = localStorage.getItem("access_token"); // 액세스 토큰 저장되어 있는지 확인

    // 인가 코드 o 토큰 x -> 액세스 토큰 요청
    if (code && !accessToken) {
      handleGetToken(code);
    }
  }, []);

  return null;
};

export default KakaoAuthHandler;
 */

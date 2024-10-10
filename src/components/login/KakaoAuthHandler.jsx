// src/components/login/KakaoAuthHandler.jsx

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
      try {
        // Firebase 프록시 서버를 통해 토큰 전송
        const response = await fetch("/api/proxy/sendToken", {
          // 1. 프록시 경로 사용
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access_token }),
        });

        const data = await response.json();

        if (response.ok && data.firebase_token) {
          // Firebase에서 받은 토큰을 localStorage에 저장
          localStorage.setItem("firebase_token", data.firebase_token);
          console.log("Firebase token saved:", data.firebase_token);

          if (onTokenReceived) {
            onTokenReceived(data.firebase_token); // 콜백 함수로 전달
          }
        } else {
          console.error("Failed to get Firebase token:", data);
        }
      } catch (error) {
        console.error("Error sending token to Firebase:", error);
      }
    } else {
      console.error("Failed to get access token");
    }
  };

  useEffect(() => {
    // 카카오로부터 받은 인가 코드 추출
    const search = new URLSearchParams(window.location.search);
    const code = search.get("code");
    const accessToken = localStorage.getItem("firebase_token"); // Firebase 토큰 저장 여부 확인

    // 인가 코드가 있고 Firebase 토큰이 없을 때만 요청
    if (code && !accessToken) {
      handleGetToken(code);
    }
  }, []);

  return null; // UI 렌더링 x (로직 처리만 수행)
};

export default KakaoAuthHandler;

// API 호출 로직

import {
  client_id,
  redirect_uri,
} from "/src/components/login/KakaoAuthHandler.jsx";

export const getToken = async (code) => {
  if (!code) {
    return {};
  }

  const param = new URLSearchParams({
    grant_type: "authorization_code",
    client_id,
    redirect_uri,
    code,
  });

  // 카카오 서버에 액세스 토큰 요청
  const response = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: param,
  });

  const result = await response.json();
  console.log("result: ", result);

  return result;
};

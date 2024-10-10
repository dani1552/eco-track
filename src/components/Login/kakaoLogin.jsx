// src/components/login/KakaoLogin.jsx

import { useState } from "react";
import KakaoAuthHandler, {
  client_id,
  redirect_uri,
  response_type,
} from "/src/components/login/KakaoAuthHandler.jsx";
import KakaoRoundIcon from "/src/assets/icons/kakao-round-icon.svg";
import ExchangeKakaoToken from "/src/firebase/ExchangeKakaoToken.jsx";

function KakaoLogin() {
  const [accessToken, setAccessToken] = useState(null);

  console.log("VITE_KAKAO_JS_API_KEY: ", client_id);
  console.log("VITE_LOGIN_REDIRECT_URI: ", redirect_uri);
  console.log("VITE_RESPONSE_TYPE: ", response_type);

  // Firebase에서 받은 토큰을 상태로 저장
  const handleTokenReceived = (token) => {
    setAccessToken(token);
  };

  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });
  console.log("authParam values: ", authParam.toString());

  // 카카오 인증 URL로 리다이렉트
  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`;
  };

  return (
    <>
      <img src={KakaoRoundIcon} onClick={handleKakaoLogin} />
      {/* KakaoAuthHandler 컴포넌트에 onTokenReceived 콜백 전달 */}
      <KakaoAuthHandler onTokenReceived={handleTokenReceived} />
      {/* accessToken이 있을 때만 ExchangeKakaoToken을 렌더링 */}
      {accessToken && <ExchangeKakaoToken accessToken={accessToken} />}
    </>
  );
}

export default KakaoLogin;

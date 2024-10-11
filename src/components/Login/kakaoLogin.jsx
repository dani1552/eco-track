/* import KakaoAuthHandler, {
  client_id,
  redirect_uri,
  response_type,
} from "/src/components/login/KakaoAuthHandler.jsx";
import KakaoRoundIcon from "/src/assets/icons/kakao-round-icon.svg";

function KakaoLogin() {
  console.log("VITE_KAKAO_JS_API_KEY: ", client_id);
  console.log("VITE_LOGIN_REDIRECT_URI: ", redirect_uri);
  console.log("VITE_RESPONSE_TYPE: ", response_type);

  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });
  console.log("authParam values: ", authParam.toString());

  // 카카오 인증 URL로 리다리엑트
  const handleKakaoLOgin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`;
  };
  return (
    <>
      <img src={KakaoRoundIcon} onClick={handleKakaoLOgin} />
      <KakaoAuthHandler />
    </>
  );
}

export default KakaoLogin;
 */

import KakaoRoundIcon from "/src/assets/icons/kakao-round-icon.svg";

function KakaoLogin() {
  return (
    <>
      <img src={KakaoRoundIcon} />
    </>
  );
}

export default KakaoLogin;

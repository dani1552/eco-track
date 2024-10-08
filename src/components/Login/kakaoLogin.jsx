import KakaoAuthHandler, {
  client_id,
  redirect_uri,
  response_type,
} from "/src/components/login/KakaoAuthHandler.jsx";

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

  return (
    <>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}
      >
        로그인
      </a>

      <KakaoAuthHandler />
    </>
  );
}

export default KakaoLogin;

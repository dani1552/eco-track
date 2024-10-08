const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
const response_type = import.meta.env.VITE_RESPONSE_TYPE;

function KakaoLogin() {
  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });

  console.log(import.meta.env);
  return (
    <a href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}>
      로그인
    </a>
  );
}

export default KakaoLogin;

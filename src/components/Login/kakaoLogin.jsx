import { useEffect } from "react";
import { getToken } from "/src/components/api/index.js";

export const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
export const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
export const response_type = import.meta.env.VITE_RESPONSE_TYPE;

function KakaoLogin() {
  //  code 형태의 url 받으면 kakao에서 받은 인가 코드로 판단
  useEffect(() => {
    const search = new URLSearchParams(window.location.search); // http://localhost:5173/home?code=fZ22
    const code = search.get("code"); // fZ22
    const accessToken = localStorage.getItem("access_token");

    // kakao -> redirect 받아서 진입
    if ((code && !accessToken) || accessToken === "undefined") {
      // POST /oauth/token 보내기
      handleGetToken();
    }
  }, []); // 최초 진입 시 발동 (최초 접속 or 카카오에서 리다이렉트 시)

  const handleGetToken = async () => {
    // server -> kakao server로 전송
    const {
      token_type,
      access_token,
      expires_in,
      refresh_token,
      refresh_token_expires_in,
    } = await getToken();

    localStorage.setItem("access_token", access_token);
  };

  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });

  console.log("authParam values: ", authParam.toString());

  return (
    // 인가 코드 요청: (server) -> kakao server
    <a href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}>
      로그인
    </a>
  );
}

export default KakaoLogin;

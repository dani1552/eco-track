import { client_id, redirect_uri } from "/src/components/login/kakaoLogin.jsx";

// kakao로 api 날리기: kakao에게 redirect 받은 상황 -> code 추출해서 다시 토큰 받기 api 쏘기
export const getToken = async () => {
  const search = new URLSearchParams(window.location.search);
  const code = search.get("code");

  if (!code) {
    return {};
  }

  const param = new URLSearchParams({
    grant_type: "authorization_code",
    client_id,
    redirect_uri,
    code,
  });

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

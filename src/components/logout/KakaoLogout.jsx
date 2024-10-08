import { useEffect } from "react";

export const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
export const logout_redirect_uri = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

const KakaoLogout = () => {
  // Kakao SDK 초기화
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(client_id); // Kakao SDK 초기화
    }
  }, []);

  const handleLogout = () => {
    if (window.Kakao && window.Kakao.Auth) {
      window.Kakao.Auth.logout(() => {
        console.log("Kakao logout successful");
        localStorage.removeItem("access_token"); // localStorage에서 토큰 삭제
        window.location.href = logout_redirect_uri; // 로그아웃 후 리디렉션
      });
    }
  };
  const logoutParam = new URLSearchParams({
    client_id,
    logout_redirect_uri,
  });

  return (
    <button
      href={`https://kauth.kakao.com/v1/user/logout?${logoutParam.toString()}`}
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default KakaoLogout;

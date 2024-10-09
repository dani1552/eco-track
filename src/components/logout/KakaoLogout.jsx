export const client_id = import.meta.env.VITE_KAKAO_JS_API_KEY;
export const logout_redirect_uri = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

const KakaoLogout = () => {
  const handleLogout = async () => {
    const accessToken = localStorage.getItem("access_token"); // 저장된 액세스 토큰 가져오기

    if (accessToken) {
      try {
        // 카카오 API로 로그아웃 요청 보내기 (POST 요청)
        const response = await fetch("https://kapi.kakao.com/v1/user/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`, // 액세스 토큰을 헤더에 포함
          },
        });

        if (response.ok) {
          console.log("Kakao logout successful");
          localStorage.removeItem("access_token"); // localStorage에서 토큰 삭제
          window.location.href = logout_redirect_uri; // 로그아웃 후 리디렉션
        } else {
          console.error("Failed to logout from Kakao:", response.status);
        }
      } catch (error) {
        console.error("Error during Kakao logout:", error);
      }
    } else {
      console.error("No access token found");
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default KakaoLogout;

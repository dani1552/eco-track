import { useState } from "react";
import LoginAuth from "/src/components/login/KakaoAuthHandler.jsx";

const HomePage = () => {
  const [token, setToken] = useState(null);

  const handleTokenReceived = (accessToken) => {
    setToken(accessToken);
  };

  return (
    <div>
      <h2>카카오 로그인 성공 후 /home 페이지</h2>
      {token && <p>Access Token: {token}</p>}

      {/* LoginAuth에서 토큰 처리 */}
      <LoginAuth onTokenReceived={handleTokenReceived} />
    </div>
  );
};

export default HomePage;

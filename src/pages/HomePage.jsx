import { useState, useEffect, useRef } from "react";
import KakaoAuthHandler from "/src/components/login/KakaoAuthHandler.jsx";
import {
  Container,
  Logo,
  TextContainer,
  ContentWrapper,
} from "/src/components/home/HomePage.style.js";
import { BottomSheet } from "react-spring-bottom-sheet";

const HomePage = () => {
  const [token, setToken] = useState(null);
  const sheetRef = useRef(null);

  // 토큰 수신 함수
  const handleTokenReceived = (accessToken) => {
    console.log("Received Access Token:", accessToken);
    setToken(accessToken);
  };

  // 로컬 스토리지에서 토큰을 다시 불러오는 useEffect
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
      console.log("Token from localStorage:", storedToken);
    }
  }, []);

  // 토큰이 변경될 때마다 콘솔에 출력하는 useEffect
  useEffect(() => {
    if (token) {
      console.log("Access Token:", token);
    }
  }, [token]);

  return (
    <Container>
      <KakaoAuthHandler onTokenReceived={handleTokenReceived} />

      {/* 토큰이 있을 때만 KakaoUserInfo 렌더링 */}
      {/* {token && <KakaoUserInfo token={token} />} */}

      <Logo />
      <TextContainer>
        <p>안녕하세요, 다은님</p>
        <p>오늘도 목표를 달성해봐요!</p>
      </TextContainer>

      <BottomSheet
        open
        blocking={true}
        ref={sheetRef}
        defaultSnap={() => 80} // 초기 위치
        snapPoints={({ maxHeight }) => [
          Math.floor(maxHeight * 0.95),
          Math.floor(maxHeight * 0.55),
        ]}
      />

      <ContentWrapper>qkrtm</ContentWrapper>
    </Container>
  );
};

export default HomePage;

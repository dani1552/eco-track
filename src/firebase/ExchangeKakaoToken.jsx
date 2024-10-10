// src/firebase/ExchangeKakaoToken.jsx

import { useEffect } from "react";

const ExchangeKakaoToken = ({ accessToken }) => {
  useEffect(() => {
    const exchangeToken = async () => {
      try {
        if (!accessToken) {
          console.error("No access token provided");
          return;
        }

        // Firebase로 사용자 정보 요청
        const firebaseUserResponse = await fetch(
          "https://your-firebase-function-url/userinfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const firebaseUser = await firebaseUserResponse.json();

        if (!firebaseUser.id) {
          console.error("Failed to get Firebase user info");
          return;
        }

        // 사용자 정보를 localStorage에 저장
        localStorage.setItem("firebase_user", JSON.stringify(firebaseUser));
        console.log("User Info:", firebaseUser);
      } catch (error) {
        console.error("Error during user info exchange:", error);
      }
    };

    exchangeToken();
  }, [accessToken]);

  return null; // 렌더링할 내용이 없으므로 null 반환
};

export default ExchangeKakaoToken;

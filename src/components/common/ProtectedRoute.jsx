import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "/src/firebase.js";
import LoadingPage from "../../pages/LoadingPage";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // 인증 상태 변경시 호출되는 콜백 함수 (로그인/로그아웃 감지)
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true); // 로그인 상태
      } else {
        setIsAuthenticated(false); // 로그아웃 상태
      }
    });

    // 컴포넌트 언마운트 or useEffect 재실행 시 구독 해제 (메모리 누수 방지)
    return () => unsubscribe();
  }, []);

  // 초기 상태
  if (isAuthenticated === null) {
    return <LoadingPage />;
  }

  // 인증 x -> /login 페이지로 리다이렉트
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // 인증 o -> 자식 컴포넌트 렌더링
  return children;
}

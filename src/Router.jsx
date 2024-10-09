import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import KakaoLogin from "/src/components/Login/KakaoLogin.jsx";
import KakaoLogout from "./components/logout/KakaoLogout.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
import KakaoUserInfo from "./components/userinfo/KakaoUserInfo.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/welcome"} element={<WelcomePage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/logout"} element={<KakaoLogout />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/kakao"} element={<KakaoLogin />} />
          <Route path={"/userinfo"} element={<KakaoUserInfo />} />
        </Route>
        <Route path={"/onboard"} element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

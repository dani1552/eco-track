import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import LoginPage from "/src/pages/LoginPage.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import SignupPage from "/src/pages/SignUpPage.jsx";
import OnboardingPage from "/src/pages/OnboardingPage.jsx";
import KakaoLogin from "/src/components/Login/KakaoLogin.jsx";
import KakaoLogout from "/src/components/logout/KakaoLogout.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
import KakaoUserInfo from "/src/components/userinfo/KakaoUserInfo.jsx";
import TaskSetting from "/src/pages/TaskSetting.jsx";
import MyPage from "/src/pages/MyPage.jsx";
import TaskCalendar from "/src/components/home/TaskCalendar.jsx";

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
          <Route path={"/setting"} element={<TaskSetting />} />
          <Route path={"/mypage"} element={<MyPage />} />
          <Route path={"/calendar"} element={<TaskCalendar />} />
        </Route>
        <Route path={"/onboard"} element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import SignupPage from "/src/pages/SignupPage.jsx";
import LoginPage from "/src/pages/LoginPage.jsx";
import HomePage from "/src/pages/HomePage.jsx";
// import KakaoLogin from "/src/components/Login/KakaoLogin.jsx";
// import KakaoLogout from "/src/components/logout/KakaoLogout.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
// import KakaoUserInfo from "/src/components/userinfo/KakaoUserInfo.jsx";
import MyPage from "/src/pages/MyPage.jsx";
import TaskCalendar from "/src/components/home/TaskCalendar.jsx";
import ProtectedRoute from "/src/components/common/ProtectedRoute.jsx";
import OnboardingPage from "./pages/OnboardingPage";
import NoFooterLayout from "/src/components/common/Layout/Footer/NoFooterLayout.jsx";
import CardPageOne from "./components/onboarding/CardPageOne";
import CardPageTwo from "./components/onboarding/CardPageTwo";
import TaskSettingPage from "/src/pages/TaskSettingPage.jsx";
import OnboardingStart from "/src/components/onboarding/OnboardingStart.jsx";
import KakaoMapPage from "/src/pages/KakaoMapPage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Footer 사용 o */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/setting"} element={<TaskSettingPage />} />
          <Route path={"/mypage"} element={<MyPage />} />
          <Route path={"/calendar"} element={<TaskCalendar />} />
          <Route path={"/kakaomap"} element={<KakaoMapPage />} />
        </Route>

        {/* Footer 사용 x */}
        <Route
          element={
            <ProtectedRoute>
              <NoFooterLayout />
            </ProtectedRoute>
          }
        >
          <Route path={"/"} element={<WelcomePage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/onboarding"} element={<OnboardingPage />} />
          <Route path={"/card1"} element={<CardPageOne />} />
          <Route path={"/card2"} element={<CardPageTwo />} />
          <Route path={"/start"} element={<OnboardingStart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

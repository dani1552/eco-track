import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import SignupPage from "/src/pages/SignupPage.jsx";
import LoginPage from "/src/pages/LoginPage.jsx";
import HomePage from "/src/pages/HomePage.jsx";
// import KakaoLogin from "/src/components/Login/KakaoLogin.jsx";
// import KakaoLogout from "/src/components/logout/KakaoLogout.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
// import KakaoUserInfo from "/src/components/userinfo/KakaoUserInfo.jsx";
import TaskSetting from "/src/pages/TaskSetting.jsx";
import MyPage from "/src/pages/MyPage.jsx";
import TaskCalendar from "/src/components/home/TaskCalendar.jsx";
import ProtectedRoute from "/src/components/common/ProtectedRoute.jsx";
import OnboardingPage from "./pages/OnboardingPage";
import NoFooterLayout from "/src/components/common/Layout/Footer/NoFooterLayout.jsx";
import CardPageOne from "./components/onboarding/CardPageOne";
import CardPageTwo from "./components/onboarding/CardPageTwo";

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
          <Route path={"/welcome"} element={<WelcomePage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/setting"} element={<TaskSetting />} />
          <Route path={"/mypage"} element={<MyPage />} />
          <Route path={"/calendar"} element={<TaskCalendar />} />
        </Route>

        {/* Footer 사용 x */}
        <Route
          element={
            <ProtectedRoute>
              <NoFooterLayout />
            </ProtectedRoute>
          }
        >
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/onboarding"} element={<OnboardingPage />} />
          <Route path={"/card1"} element={<CardPageOne />} />
          <Route path={"/card2"} element={<CardPageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import KakaoLogin from "/src/components/Login/KakaoLogin.jsx";
import KakaoLogout from "./components/logout/KakaoLogout.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
import KakaoUserInfo from "./components/userinfo/KakaoUserInfo.jsx";
import TaskSetting from "/src/pages/TaskSetting.jsx";
import MyPage from "/src/pages/MyPage.jsx";
import TaskCalendar from "/src/components/home/TaskCalendar.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

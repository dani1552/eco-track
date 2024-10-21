import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import SignupPage from "/src/pages/SignupPage.jsx";
import LoginPage from "/src/pages/LoginPage.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import WelcomePage from "/src/pages/WelcomePage.jsx";
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

import ChallengePopup1 from "/src/components/challenge-popup/ChallengePopup1";
import ChallengePopup2 from "/src/components/challenge-popup/ChallengePopup2";
import ChallengePopup3 from "/src/components/challenge-popup/ChallengePopup3";
import ChallengePopup4 from "/src/components/challenge-popup/ChallengePopup4";
import ChallengePopup5 from "/src/components/challenge-popup/ChallengePopup5";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* With Footer (Protected routes) */}
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
          <Route path={"/challenge1"} element={<ChallengePopup1 />} />
          <Route path={"/challenge2"} element={<ChallengePopup2 />} />
          <Route path={"/challenge3"} element={<ChallengePopup3 />} />
          <Route path={"/challenge4"} element={<ChallengePopup4 />} />
          <Route path={"/challenge5"} element={<ChallengePopup5 />} />
        </Route>

        {/* Without Footer (Protected routes) */}
        <Route
          element={
            <ProtectedRoute>
              <NoFooterLayout />
            </ProtectedRoute>
          }
        >
          <Route path={"/onboarding"} element={<OnboardingPage />} />
          <Route path={"/card1"} element={<CardPageOne />} />
          <Route path={"/card2"} element={<CardPageTwo />} />
          <Route path={"/start"} element={<OnboardingStart />} />
        </Route>

        {/* No Footer, No Protected Route */}
        <Route element={<NoFooterLayout />}>
          <Route path={"/"} element={<WelcomePage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

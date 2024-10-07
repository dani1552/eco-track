import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/home"} element={<HomePage />} />
        </Route>
        <Route path={"/onboard"} element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

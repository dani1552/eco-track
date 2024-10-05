import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/common/Layout/index.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/home"} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

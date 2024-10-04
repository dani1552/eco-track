import { NavItem } from "./Footer.style.js";
import { useLocation } from "react-router-dom";

const NavItemContainer = ({ children, path }) => {
  const location = useLocation(); // 현재 경로 정보 제공 (ex) /home

  return (
    // path: 사용자가 원하는 경로
    // location.pathname: 사용자가 접속해 있는 경로
    <NavItem to={path} $isActive={path === location.pathname}>
      {children}
    </NavItem>
  );
};

export default NavItemContainer;

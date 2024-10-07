import { Container, Nav } from "./Footer.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import HomeIcon from "/src/assets/icons/home-icon.svg?react";
import ProfileIcon from "/src/assets/icons/profile-icon.svg?react";
import PaperIcon from "/src/assets/icons/paper-icon.svg?react";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer path={"/"}>
          <HomeIcon />
        </NavItemContainer>
        <NavItemContainer path={"/mypage"}>
          <ProfileIcon />
        </NavItemContainer>
        <NavItemContainer path={"goal-setting"}>
          <PaperIcon />
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;

import {
  Container,
  Nav,
  HomeIcon,
  PaperIcon,
  MapIcon,
  ProfileIcon,
} from "./Footer.style.js";
import NavItemContainer from "./NavItemContainer.jsx";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer path={"/home"}>
          <HomeIcon />
        </NavItemContainer>
        <NavItemContainer path={"/setting"}>
          <PaperIcon />
        </NavItemContainer>{" "}
        <NavItemContainer path={"/kakaomap"}>
          <MapIcon />
        </NavItemContainer>
        <NavItemContainer path={"/mypage"}>
          <ProfileIcon />
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;

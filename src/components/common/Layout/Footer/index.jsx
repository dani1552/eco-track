import { Container, Nav } from "./Footer.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import HomeIcon from "@/assets/icons/home-icon.svg?react";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer path={"/"}>
          <HomeIcon />
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;

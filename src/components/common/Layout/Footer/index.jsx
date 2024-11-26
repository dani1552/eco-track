import {
  Container,
  Nav,
  HomeIcon,
  PaperIcon,
  MapIcon,
  ProfileIcon,
  ChatIcon,
} from "./Footer.style.js";
import NavItemContainer from "./NavItemContainer.jsx";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer path={"/home"}>
          <HomeIcon />
          <TitleText>HOME</TitleText>
        </NavItemContainer>
        <NavItemContainer path={"/setting"}>
          <PaperIcon />
          <TitleText>SETTING</TitleText>
        </NavItemContainer>
        <NavItemContainer path={"/kakaomap"}>
          <MapIcon />
          <TitleText>MAP</TitleText>
        </NavItemContainer>
        <NavItemContainer path={"/chat-ai"}>
          <ChatIcon />
          <TitleText>CHAT AI</TitleText>
        </NavItemContainer>
        <NavItemContainer path={"/mypage"}>
          <ProfileIcon />
          <TitleText>PROFILE</TitleText>
        </NavItemContainer>
      </Nav>
    </Container>
  );
};

export default Footer;

const TitleText = styled.p`
  font-size: 12px;
  font-weight: var(--weight-bold);
  margin-top: 5px;
`;

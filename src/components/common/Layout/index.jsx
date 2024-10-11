import { Outlet } from "react-router-dom";
import { Container, Content, GlobalStyle } from "./Layout.style.js";
import Footer from "./Footer/index.jsx";

const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;

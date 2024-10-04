import { Outlet } from "react-router-dom";
import { Container, Content } from "./Layout.style.js";
import Footer from "./Footer/index.jsx";

const Layout = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import {
  Container,
  Content,
  GlobalStyle,
} from "/src/components/common/Layout/Layout.style.js";

const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;

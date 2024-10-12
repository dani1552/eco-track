import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  width: 100%;
  max-width: 400px;
  height: 70px;
  display: flex;
  margin: 0 auto;

  box-sizing: border-box;
  padding: 10px 0;
  z-index: 999;

  background-color: var(--color-white);
  border-top: 1px solid #f3f4f6;
  position: fixed;
  // 중앙정렬
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled(Link)`
  width: 100px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: var(--color-gray-200);
  font-weight: var(--weight-light);
  font-size: 12px;

  svg {
    fill: ${(props) => (props.$isActive ? "#97DF47" : "#BBBEC2")};
  }
`;

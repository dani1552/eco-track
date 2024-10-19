import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    // overflow: hidden;
  }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  /*   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

export const Content = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

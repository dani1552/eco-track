import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center; // 세로 정렬
  align-items: center; // 가로 정렬
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 0 20px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

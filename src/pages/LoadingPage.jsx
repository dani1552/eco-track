import styled, { keyframes } from "styled-components";

function LoadingPage() {
  return (
    <Container>
      <SpinLoadingIcon />
    </Container>
  );
}
export default LoadingPage;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinLoadingIcon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 6px solid var(--color-blue);
  border-radius: 50%;

  border-top-color: transparent;
  animation: ${spin} 1s ease-in-out infinite;
  margin: 15px auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 30%;
`;

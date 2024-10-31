import { BottomSheet } from "react-spring-bottom-sheet";
import styled, { createGlobalStyle } from "styled-components";
import "react-spring-bottom-sheet/dist/style.css";
import { useRef, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  [data-rsbs-overlay], [data-rsbs-backdrop], [data-rsbs-root]:after {
    max-width: 400px; 
    margin: 0 auto; 
    right: 0;
    left: 0;
  }
`;

function MapBottomSheet({ children, openToSnap }) {
  const sheetRef = useRef(null);

  useEffect(() => {
    if (openToSnap && sheetRef.current) {
      sheetRef.current.snapTo(({ maxHeight }) => Math.floor(maxHeight * 0.35));
    }
  }, [openToSnap]);

  return (
    <Container>
      <GlobalStyle />
      <BottomSheet
        open
        blocking={false}
        ref={sheetRef}
        defaultSnap={({ maxHeight }) => Math.floor(maxHeight * 0.2)}
        snapPoints={({ maxHeight }) => [
          Math.floor(maxHeight * 0.2),
          Math.floor(maxHeight * 0.35),
        ]}
        expandOnContentDrag
      >
        {children}
      </BottomSheet>
    </Container>
  );
}

export default MapBottomSheet;

const Container = styled.div`
  width: 100%;
`;

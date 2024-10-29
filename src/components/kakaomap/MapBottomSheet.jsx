import { BottomSheet } from "react-spring-bottom-sheet";
import styled, { createGlobalStyle } from "styled-components";
import "react-spring-bottom-sheet/dist/style.css";
import { useRef } from "react";

const GlobalStyle = createGlobalStyle`
  [data-rsbs-overlay], [data-rsbs-backdrop], [data-rsbs-root]:after {
    max-width: 400px; 
    margin: 0 auto; 
    right: 0;
    left: 0;
  }
`;

function MapBottomSheet({ children }) {
  const sheetRef = useRef(null);

  return (
    <Container>
      <GlobalStyle />
      <BottomSheet
        open
        blocking={false}
        ref={sheetRef}
        defaultSnap={() => 80}
        snapPoints={({ maxHeight }) => [
          Math.floor(maxHeight * 0.45),
          Math.floor(maxHeight * 0.15),
        ]}
        expandOnContentDrag
      >
        {children}
        <SheetContent>검색어를 입력해주세요.</SheetContent>
      </BottomSheet>
    </Container>
  );
}

export default MapBottomSheet;

const Container = styled.div`
  width: 100%;
`;

const SheetContent = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

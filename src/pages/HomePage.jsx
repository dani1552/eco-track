import { useState, useEffect, useRef } from "react";
import {
  Container,
  TopContainer,
  BottomContainer,
  TitleText,
} from "/src/components/home/HomePage.style.js";

function HomePage() {
  return (
    <>
      <Container>
        <TopContainer>
          <TitleText>안녕하세요, 다은님</TitleText>
          <TitleText>오늘도 목표를 달성해보세요</TitleText>
        </TopContainer>
        <BottomContainer></BottomContainer>
      </Container>
    </>
  );
}

export default HomePage;

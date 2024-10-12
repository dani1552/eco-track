import {
  Container,
  TopContainer,
  BottomContainer,
  TitleText,
  LogoIcon,
} from "/src/components/home/HomePage.style.js";
import { auth } from "/src/firebase.js";
import ProgressBar from "/src/components/home/ProgressBar.jsx";
import Calendar from "/src/components/home/TaskCalendar.jsx";

function HomePage() {
  const user = auth.currentUser;
  return (
    <>
      <Container>
        <TopContainer>
          <LogoIcon />
          <div>
            <TitleText>안녕하세요, {user?.displayName ?? "익명"}님</TitleText>
            <TitleText>오늘도 목표를 달성해보세요!</TitleText>
            <ProgressBar />
          </div>
        </TopContainer>
        <BottomContainer>
          <Calendar />
        </BottomContainer>
      </Container>
    </>
  );
}

export default HomePage;

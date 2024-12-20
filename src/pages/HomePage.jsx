import {
  Container,
  HeaderContainer,
  TopContainer,
  BottomContainer,
  TitleText,
  LogoIcon,
  LinkWrapper,
} from "/src/components/home/HomePage.style.js";
import { auth } from "/src/firebase.js";
import ProgressBar from "/src/components/home/ProgressBar.jsx";
import Calendar from "/src/components/home/TaskCalendar.jsx";
import TodayGoal from "/src/components/home/TodayGoal.jsx";
import CompletedPopup from "/src/components/home/CompletedPopup.jsx";
import { useState } from "react";
import TodayChallenge from "/src/components/home/TodayChallenge.jsx";
import moment from "moment";

function HomePage() {
  const user = auth.currentUser;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleProgressUpdate = (newProgress) => {
    setProgress(newProgress);
  };

  const handleCompletionStatusChange = (status) => {
    setIsCompleted(status);
  };

  const todayDate = moment().format("YYYY-MM-DD");
  const selectedFormattedDate = moment(selectedDate).format("YYYY-MM-DD");

  return (
    <>
      <Container>
        <HeaderContainer>
          <LogoIcon />
          <LinkWrapper to="/start"></LinkWrapper>
        </HeaderContainer>
        <TopContainer>
          <div>
            <TitleText>안녕하세요, {user?.displayName ?? "익명"}님</TitleText>
            <TitleText>오늘도 목표를 달성해보세요!</TitleText>
            <ProgressBar progress={progress} />
          </div>
        </TopContainer>
        <BottomContainer>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <TodayGoal
            selectedDate={selectedDate}
            onProgressUpdate={handleProgressUpdate}
            onCompletionStatusChange={handleCompletionStatusChange}
          />
          <TodayChallenge />
        </BottomContainer>
        {isCompleted && selectedFormattedDate === todayDate && (
          <CompletedPopup isCompleted={isCompleted} />
        )}
      </Container>
    </>
  );
}

export default HomePage;

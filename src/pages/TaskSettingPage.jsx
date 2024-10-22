import { useEffect, useState } from "react";
import {
  Container,
  TopContainer,
  LogoIcon,
  TitleText,
  SubTitleText,
  ChallengeContainer,
  ChallengeIcon1,
  ChallengeIcon2,
  ChallengeIcon3,
  ChallengeIcon4,
  ChallengeIcon5,
} from "/src/components/task-setting/TaskSettingPage.style.js";
import GoalItem from "/src/components/task-setting/GoalItem.jsx";
import ChallengeItem from "/src/components/task-setting/ChallengeItem.jsx";
import CupIcon from "/src/assets/icons/cup-icon.svg?react";
import ThermosterIcon from "/src/assets/icons/thermoster-icon.svg?react";
import BusIcon from "/src/assets/icons/bus-icon.svg?react";
import WalkerIcon from "/src/assets/icons/walker-icon.svg?react";
import { db, auth } from "/src/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function TaskSettingPage() {
  const [points, setPoints] = useState(0);
  const [selectedPoints, setSelectedPoints] = useState(0);
  const todayDate = moment().format("YYYY-MM-DD");

  const navigate = useNavigate();

  const handleChallengeClick = (challengedId) => {
    navigate(`/challenge/${challengedId}`);
  };

  const resetSelectedScore = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        const userDoc = await getDoc(userDocRef);
        const data = userDoc.data();

        // selectedScore가 0일 때만 초기화
        if (data.selectedScore === 0) {
          await updateDoc(userDocRef, {
            selectedScore: 0,
          });
          setSelectedPoints(0);
          console.log("selectedScore 0으로 초기화");
        }
      } catch (error) {
        console.error("firebase에서 selectedScore 초기화 실패: ", error);
      }
    }
  };

  useEffect(() => {
    const fetchTotalScore = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const data = userDoc.data();
            setPoints(data.totalScore || 0);
            setSelectedPoints(data.selectedScore || 0);

            // selectedScore가 0일 때만 초기화
            if (data.selectedScore === 0) {
              resetSelectedScore();
            }
          } else {
            console.log("User document does not exist.");
          }
        } catch (error) {
          console.error("Error fetching totalScore:", error);
        }
      } else {
        console.log("User is not logged in.");
      }
    };

    fetchTotalScore();
  }, [todayDate]);

  useEffect(() => {
    console.log(`선택된 포인트 합계: ${selectedPoints}`);
  }, [selectedPoints]);

  const updateSelectedPointsInFirebase = async (newPoints) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userDocRef, {
          selectedScore: newPoints,
        });
        console.log(`selectedScore 업데이트: ${newPoints}`);
      } catch (error) {
        console.error("Firebase에 selectedScore 업데이트 실패:", error);
      }
    }
  };

  const remainingPoints = points - selectedPoints;

  return (
    <Container>
      <TopContainer>
        <LogoIcon />
        <TitleText>오늘의 목표는 {points}포인트에요! </TitleText>
        <SubTitleText>
          {remainingPoints > 0
            ? `${remainingPoints} 포인트 더 채우고 멋진 하루를 완성해봐요`
            : `오늘의 목표를 모두 설정했어요! 이제 시작해볼까요?`}
        </SubTitleText>
      </TopContainer>
      <GoalItem
        icon={CupIcon}
        title="실내 적정 온도 유지하기"
        points={10}
        date={todayDate}
        onUpdateTotal={setSelectedPoints}
        updateSelectedPointsInFirebase={updateSelectedPointsInFirebase}
      />
      <GoalItem
        icon={ThermosterIcon}
        title="대중교통 이용하기"
        points={20}
        date={todayDate}
        onUpdateTotal={setSelectedPoints}
        updateSelectedPointsInFirebase={updateSelectedPointsInFirebase}
      />
      <GoalItem
        icon={BusIcon}
        title="분리수거 철저히 하기"
        points={8}
        date={todayDate}
        onUpdateTotal={setSelectedPoints}
        updateSelectedPointsInFirebase={updateSelectedPointsInFirebase}
      />
      <GoalItem
        icon={WalkerIcon}
        title="가까운 거리는 걸어가기"
        points={12}
        date={todayDate}
        onUpdateTotal={setSelectedPoints}
        updateSelectedPointsInFirebase={updateSelectedPointsInFirebase}
      />
      <GoalItem
        icon={CupIcon}
        title="일회용품 사용 줄이기"
        points={15}
        date={todayDate}
        onUpdateTotal={setSelectedPoints}
        updateSelectedPointsInFirebase={updateSelectedPointsInFirebase}
      />

      <TitleText>챌린지에 참여해 보세요</TitleText>
      <SubTitleText>혼자보다 함께라면 더 멀리 갈 수 있어요</SubTitleText>
      <ChallengeContainer>
        <ChallengeItem
          icon={ChallengeIcon1}
          title={"일회용 플라스틱 줄이기 챌린지"}
          subtitle={"텀블러 등 재사용 가능한 용기를 사용해요"}
          routeTo={() => handleChallengeClick("challenge1")}
        />
        <ChallengeItem
          icon={ChallengeIcon2}
          title={"제로웨이스트 챌린지"}
          subtitle={"하루 동안 쓰레기를 배출하지 않아요"}
          routeTo={() => handleChallengeClick("challenge2")}
        />
        <ChallengeItem
          icon={ChallengeIcon3}
          title={"가까운 거리 걸어가기 챌린지"}
          subtitle={"1~2km 이내의 가까운 거리는 걸어다녀요"}
          routeTo={() => handleChallengeClick("challenge3")}
        />
        <ChallengeItem
          icon={ChallengeIcon4}
          title={"낭비 없는 샤워 챌린지"}
          subtitle={"샤워 시간을 5분 이내로 줄여, 물 낭비를 방지해요"}
          routeTo={() => handleChallengeClick("challenge4")}
        />
        <ChallengeItem
          icon={ChallengeIcon5}
          title={"채식 하루 도전 챌린지"}
          subtitle={"육류 소비를 줄이고 매주 하루는 채식을 도전해요"}
          routeTo={() => handleChallengeClick("challenge5")}
        />
      </ChallengeContainer>
    </Container>
  );
}

export default TaskSettingPage;

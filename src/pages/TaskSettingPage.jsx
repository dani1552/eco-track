import { useState, useEffect } from "react";
import {
  Container,
  LogoIcon,
  GoalContainer,
  IconWrapper,
  GoalTextContainer,
  GoalTitleText,
  GoalSubText,
  SubmitButton,
  TitleText,
  RecommendContainer,
  SubTitleText,
} from "/src/components/task-setting/TaskSettingPage.style.js";
import CupIcon from "/src/assets/icons/cup-icon.svg?react";
import ThermosterIcon from "/src/assets/icons/thermoster-icon.svg?react";
import BusIcon from "/src/assets/icons/bus-icon.svg?react";
import WalkerIcon from "/src/assets/icons/walker-icon.svg?react";

// firebase
import { db, auth } from "/src/firebase.js";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";

function TaskSettingPage() {
  const [points, setPoints] = useState(0);
  const [selectedPoints, setSelectedPoints] = useState(0);
  const todayDate = moment().format("YYYY-MM-DD");

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
  }, []);
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
    <>
      <Container>
        <LogoIcon />
        <TitleText>오늘의 목표는 {points}포인트에요! </TitleText>
        <SubTitleText>
          {" "}
          {remainingPoints > 0
            ? `${remainingPoints} 포인트 더 채우고 멋진 하루를 완성해봐요`
            : `오늘의 목표를 모두 설정했어요! 이제 시작해볼까요? 💪`}
        </SubTitleText>
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
      </Container>
      <RecommendContainer>
        <TitleText> 챌린지에 도전하세요</TitleText>
      </RecommendContainer>
    </>
  );
}

function GoalItem({
  icon: Icon,
  title,
  points,
  date,
  onUpdateTotal,
  updateSelectedPointsInFirebase,
}) {
  const [clicked, setClicked] = useState(false);
  const [goalPoints, setGoalPoints] = useState(points);
  const user = auth.currentUser;

  const goalDocRef = user
    ? doc(db, "users", user.uid, "dates", date, "goals", title)
    : null;

  const fetchGoalState = async () => {
    if (goalDocRef) {
      const goalDoc = await getDoc(goalDocRef);

      if (goalDoc.exists()) {
        const data = goalDoc.data();
        setClicked(data.selected);
        setGoalPoints(data.points || points);
        console.log(`${title}: ${data.points || points}포인트를 가져왔습니다!`);

        if (data.selected) {
          onUpdateTotal((prev) => prev + data.points);
        }
      } else {
        console.log("데이터가 존재하지 않습니다.");
      }
    }
  };

  useEffect(() => {
    fetchGoalState();
  }, []);

  const handleClick = async () => {
    if (goalDocRef) {
      try {
        const toggleSelected = !clicked;
        setClicked(toggleSelected);

        await setDoc(goalDocRef, {
          title: title,
          points: goalPoints,
          selected: toggleSelected,
          userId: user.uid,
        });

        if (toggleSelected) {
          onUpdateTotal((prev) => {
            const newTotal = prev + goalPoints;
            updateSelectedPointsInFirebase(newTotal);
            console.log(`점수 추가: ${goalPoints}, 총 점수: ${newTotal}`);
            return newTotal;
          });
          console.log(`${title}를 등록했습니다`);
        } else {
          onUpdateTotal((prev) => {
            const newTotal = prev - goalPoints;
            updateSelectedPointsInFirebase(newTotal);
            console.log(`점수 제거: ${goalPoints}, 총 점수: ${newTotal}`);
            return newTotal;
          });
          console.log(`${title}를 해지했습니다`);
        }
      } catch (error) {
        console.error("데이터 저장 실패:", error);
        setClicked(!clicked);
      }
    } else {
      console.log("로그인이 필요합니다 (TaskSetting)");
    }
  };

  return (
    <GoalContainer>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <GoalTextContainer>
        <GoalTitleText>{title}</GoalTitleText>
        <GoalSubText>{`+ ${goalPoints}포인트`}</GoalSubText>
      </GoalTextContainer>
      <SubmitButton onClick={handleClick} $clicked={clicked}>
        {clicked ? "취소하기" : "등록하기"}
      </SubmitButton>
    </GoalContainer>
  );
}

export default TaskSettingPage;

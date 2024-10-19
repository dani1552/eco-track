import { useEffect, useState } from "react";
import {
  GoalContainer,
  IconWrapper,
  GoalTextContainer,
  GoalTitleText,
  GoalSubText,
  SubmitButton,
} from "/src/components/task-setting/TaskSettingPage.style.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "/src/firebase";

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
        if (data.selected) {
          onUpdateTotal((prev) => prev + data.points);
        }
      }
    }
  };

  useEffect(() => {
    fetchGoalState();
  }, []);

  const handleClick = async () => {
    if (goalDocRef) {
      const toggleSelected = !clicked;
      setClicked(toggleSelected);

      await setDoc(goalDocRef, {
        title: title,
        points: goalPoints,
        selected: toggleSelected,
        userId: user.uid,
      });

      onUpdateTotal((prev) => {
        const newTotal = toggleSelected ? prev + goalPoints : prev - goalPoints;
        updateSelectedPointsInFirebase(newTotal);
        return newTotal;
      });
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

export default GoalItem;

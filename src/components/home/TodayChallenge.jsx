import styled from "styled-components";
import { useState, useEffect } from "react";
import ChallengeIcons1 from "/public/assets/icons/challenge-1.svg?react";
import ChallengeIcons2 from "/public/assets/icons/challenge-2.svg?react";
import ChallengeIcons3 from "/public/assets/icons/challenge-3.svg?react";
import ChallengeIcons4 from "/public/assets/icons/challenge-4.svg?react";
import ChallengeIcons5 from "/public/assets/icons/challenge-5.svg?react";
import { db, auth } from "/src/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import moment from "moment";

const challengeIconComponents = {
  challenge1: ChallengeIcons1,
  challenge2: ChallengeIcons2,
  challenge3: ChallengeIcons3,
  challenge4: ChallengeIcons4,
  challenge5: ChallengeIcons5,
};

function TodayChallenge({ selectedDate }) {
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");

  const fetchSelectedChallenges = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const q = query(
          collection(
            db,
            "users",
            user.uid,
            "dates",
            formattedDate,
            "challenges"
          ),
          where("selected", "==", true)
        );
        const querySnapshot = await getDocs(q);
        const challenges = [];
        querySnapshot.forEach((doc) => {
          challenges.push(doc.id);
        });
        setSelectedChallenges(challenges);
      } catch (error) {
        console.error("Firestore에서 챌린지 가져오기 실패: ", error);
      }
    }
  };

  useEffect(() => {
    fetchSelectedChallenges();
  }, []);

  return (
    <Container>
      <HorizontalLine />
      <TitleText>참여중인 챌린지</TitleText>
      <IconWrapper>
        {selectedChallenges.length > 0 ? (
          selectedChallenges.map((challengeId) => {
            const ChallengeIcon = challengeIconComponents[challengeId];
            return ChallengeIcon ? (
              <ChallengeIcon key={challengeId} width={40} />
            ) : null;
          })
        ) : (
          <SubTitleWrapper>
            <SubTitleText>챌린지가 선택되지 않았습니다.</SubTitleText>
          </SubTitleWrapper>
        )}
      </IconWrapper>
    </Container>
  );
}

export default TodayChallenge;

const Container = styled.div`
  width: 100%;
`;

const TitleText = styled.p`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: var(--weight-bold);
  margin-top: 30px;
  margin-left: 30px;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 100px;
`;

const SubTitleWrapper = styled.div`
  text-align: start;
  width: 100%;
  margin-left: 10px;
`;

const SubTitleText = styled.p`
  font-size: 16px;
  font-weight: var(--weight-medium);
  margin-top: 10px;
  margin-bottom: 20px;
  color: #9190a0;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #9190a0;
  margin: 20px 0;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
`;

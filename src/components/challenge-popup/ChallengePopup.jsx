import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  TopContainer,
  BottomContainer,
  HeaderContainer,
  LeftArrowIcon,
  TitleText,
  JoinChallengeContainer,
  IconWrapper,
  ChallengeTitleText,
  ChallengeSubTitleText,
  SubmitButton,
  ExplainTitleText,
  ExplainSubTitleText,
  ChallengeSubTitleWrapper,
  TimeIcon,
  UserIcon,
} from "/src/components/challenge-popup/ChallengePopup.style.js";
import { useState, useEffect } from "react";
import { db, auth } from "/src/firebase.js";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import moment from "moment";

const challengeData = {
  challenge1: {
    name: "일회용 플라스틱 줄이기 챌린지",
    background: "/assets/icons/tumbler-icon.jpg",
    icon: "/assets/icons/challenge-1.svg",
    date: "24.11.01 - 24.11.30",
    participants: 333,
    description:
      "일상 속에서 일회용 플라스틱 사용을 줄이고, 환경을 보호하는 작은 실천을 도전하는 챌린지입니다. 텀블러, 에코백 등 다회용 제품을 사용함으로써 쓰레기 배출을 줄이고, 지속 가능한 소비를 실천해보세요!",
    methods:
      "• 외출 시 텀블러, 에코백, 도시락통을 준비하여 일회용품 사용을 줄이세요. <br /> • 구매 시 포장이 없는 제품을 선택하거나, 개인 용기를 사용하여 필요한 만큼만 구입하세요. <br /> • 플라스틱 포장 대신 다회용 또는 재활용 가능한 포장을 사용하도록 노력하세요. <br /> • 가정에서 재사용 가능한 물건을 사용하여 쓰레기 배출을 최소화하세요.",
    precautions:
      "• 일부 매장에서는 다회용기 사용이 제한될 수 있으니, 정책을 미리 확인하세요. <br /> • 완벽하게 일회용 플라스틱 사용을 줄이는 것이 처음에는 어려울 수 있지만, 꾸준히 실천하면 큰 변화를 만들 수 있습니다. <br /> • 일상에서 작은 변화를 통해 플라스틱 사용을 줄이고, 환경 보호에 기여할 수 있는 방법을 계속 고민해보세요.",
  },
  challenge2: {
    name: "제로웨이스트 챌린지",
    background: "/assets/icons/recycle-icon.jpg",
    icon: "/assets/icons/challenge-2.svg",
    date: "24.11.01 - 24.11.30",
    participants: 1030,
    description:
      "주 3회 이상 쓰레기 배출을 최소화하거나 전혀 배출하지 않는 것을 목표로 하는 환경 보호 캠페인이에요. 일상 속에서 불필요한 쓰레기를 줄이고, 재사용 가능한 제품을 사용하는 것을 통해 자원 낭비를 방지하고 환경에 긍정적인 영향을 기여해요!",
    methods:
      "• 외출할 때 텀블러, 에코백, 도시락통 등을 준비하여 일회용품 사용을 줄이세요. <br /> • 장을 볼 때, 포장되지 않은 채소나 과일을 선택하거나, 개인 용기를 사용하여 필요한 양만큼만 구매하세요. <br />• 장볼 때나 물건을 살 때 비닐봉지 대신 항상 에코백을 지참하세요. <br />• 만약 쓰레기를 배출해야 할 경우, 정확한 분리수거를 통해 재활용할 수 있도록 하세요.",
    precautions:
      "• 일부 매장에서는 위상 또는 정책 상 다회용기 사용이 어려울 수 있으므로, 미리 확인하세요. <br /> • 모든 쓰레기를 배출하지 못하는 경우라도, 가능한 한 최소화하고 정확한 분리수거로 환경에 미치는 영향을 줄이도록 노력하세요. <br /> • 처음부터 완벽하게 쓰레기를 배출하지 않으려는 부담감을 가질 필요는 없습니다. 작은 실천도 큰 변화를 만들 수 있으니 꾸준히 도전하세요!",
  },
  challenge3: {
    name: "가까운 거리 걸어가기 챌린지",
    background: "/assets/icons/walk-bg-icon.jpg",
    icon: "/assets/icons/challenge-3.svg",
    date: "24.11.01 - 24.11.30",
    participants: 730,
    description:
      "일상에서 짧은 거리를 걸어서 이동함으로써 건강을 증진하고, 동시에 자동차나 대중교통 이용을 줄여 환경 보호에 기여하는 것을 목표로 합니다. 1~2km 이내의 거리를 걷는 습관을 통해 신체 활동을 늘리고, 배출되는 탄소를 줄이며, 작은 실천으로 큰 변화를 만들어보세요.",
    methods:
      "• 1~2km 이내의 거리를 설정해, 가능한 걸어서 이동합니다. <br /> • 대중교통을 이용할 때 한두 정거장 정도는 미리 내려서 걷는 연습을 합니다. <br />• 걸은 거리를 기록해주는 앱을 이용해 도전 기록을 관리하세요. <br />• 친구와 가족에게도 챌린지에 대해 이야기하고, 걷는 습관을 함께 만들 수 있도록 권유하세요.",
    precautions:
      "• 걸을 때 안전한 길인지, 보행로가 있는지 확인한 후 걷기를 시작하세요. <br />• 더운 날에는 물을 충분히 마시고, 추운 날에는 옷을 따뜻하게 입고 걸으세요. <br /> • 건강 상태에 맞게 걷기 거리를 조정하며, 무리하지 않도록 유의하세요.",
  },
  challenge4: {
    name: "낭비 없는 샤워 챌린지",
    background: "/assets/icons/shower-icon.jpg",
    icon: "/assets/icons/challenge-4.svg",
    date: "24.11.01 - 24.11.30",
    participants: 407,
    description:
      "주 5회 샤워 시간을 줄여 물 낭비를 최소화하고, 물을 절약함으로써 환경 보호에 기여하는 챌린지입니다. 많은 양의 물이 샤워 중 낭비되기 쉬운데, 이를 줄이기 위해 샤워 시간을 5분 이내로 관리하며 지속 가능한 생활 습관을 형성하는 것이 목표입니다!",
    methods:
      "• 샤워를 시작하기 전 타이머를 설정해 5분 이내로 샤워 시간을 관리하세요. <br /> • 비누칠을 할 때는 물을 잠그고, 씻는 순서를 미리 계획해 시간을 줄이세요. <br />• 물 사용량을 줄일 수 있는 저수압 샤워기를 사용해 절약을 실천하세요. <br />",
    precautions:
      "• 짧은 샤워 시간을 위해 지나치게 차가운 물이나 뜨거운 물을 사용하지 않도록 주의하세요. 적정 온도의 물을 사용해 피부와 건강을 보호하세요. <br /> • 짧은 시간 내에 샤워를 완료하려고 너무 무리하지 마세요. 건강과 위생을 최우선으로 유지하세요. <br /> • 수압이 너무 세지 않게 조절하여 물이 낭비되지 않도록 신경 쓰고 물 절약에 도움이 되는 샤워기와 욕실 장비를 사용해보세요.",
  },
  challenge5: {
    name: "채식 하루 도전 챌린지",
    background: "/assets/icons/vegan-icon.jpg",
    icon: "/assets/icons/challenge-5.svg",
    date: "24.11.01 - 24.11.30",
    participants: 1217,
    description:
      "매주 하루 동안 육류를 소비하지 않고 채식 위주의 식사를 실천하는 도전입니다. 채식은 육류 생산 과정에서 발생하는 탄소 배출과 자원 낭비를 줄이고, 지구에 긍정적인 변화를 일으키기 위한 작은 실천입니다. 건강한 채식 메뉴를 계획하고 즐겁게 채식의 이점을 경험해보세요!",
    methods:
      "• 본인의 일정에 맞춰 매주 하루를 채식하는 날로 지정하세요. <br /> • 영양이 균형 잡힌 채식 식단을 미리 계획하세요. 다양한 채소, 과일, 곡물, 콩류 등으로 맛있고 건강한 식단을 구성할 수 있습니다. <br />• 콩고기, 두부, 버섯 등 육류를 대체할 수 있는 다양한 식재료를 활용해보세요. <br />• 가족이나 친구들과 함께 채식 도전에 동참하면 더 즐겁고 의미 있는 경험이 될 수 있습니다.",
    precautions:
      "• 채식하는 동안 단백질, 철분, 비타민 B12 등 부족할 수 있는 영양소를 충분히 섭취할 수 있도록 신경 쓰세요. 콩, 두부, 견과류 등으로 단백질을 보충하고, 철분이 풍부한 녹황색 채소나 보충제를 활용하세요. <br /> • 평소 육류 위주 식단을 하던 분들은 갑작스러운 채식이 몸에 부담이 될 수 있으니, 본인의 몸 상태에 맞게 도전하세요. <br /> • 채식 도전이 처음엔 어려울 수 있지만, 서서히 익숙해질 수 있도록 긍정적인 마음으로 시작하세요. 채식의 장점에 집중하며, 환경과 건강을 위해 지속적인 노력을 기울이세요.",
  },
};

function ChallengePopup() {
  const { challengeId } = useParams(); // URL 파라미터에서 챌린지 ID 가져오기 (동적 경로 매개변수))
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const formattedDate = moment().format("YYYY-MM-DD");

  const challenge = challengeData[challengeId]; // 해당 챌린지 정보 가져오기

  // Firestore에 저장된 챌린지 상태를 가져오는 함수
  const fetchChallengeStatus = async () => {
    const user = auth.currentUser;
    if (user) {
      const challengeDocRef = doc(
        db,
        "users",
        user.uid,
        "dates",
        formattedDate,
        "challenges",
        challengeId
      );

      try {
        const challengeDoc = await getDoc(challengeDocRef);
        if (challengeDoc.exists()) {
          const challengeData = challengeDoc.data();
          setIsButtonClicked(challengeData.selected);
        } else {
          console.log("챌린지 데이터가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error(
          "Firestore에서 챌린지 상태를 가져오는 데 오류가 발생했습니다:",
          error
        );
      }
    }
  };

  useEffect(() => {
    fetchChallengeStatus();
  }, [challengeId]);

  // Firestore에 챌린지 상태를 저장하거나 업데이트하는 함수
  const saveChallengeToFirestore = async (selected) => {
    const user = auth.currentUser;
    if (user) {
      const challengeDocRef = doc(
        db,
        "users",
        user.uid,
        "dates",
        formattedDate,
        "challenges",
        challengeId
      );

      try {
        const challengeDoc = await getDoc(challengeDocRef);

        if (challengeDoc.exists()) {
          await updateDoc(challengeDocRef, { selected });
          console.log("챌린지 상태가 업데이트되었습니다.");
        } else {
          await setDoc(challengeDocRef, { name: challenge.name, selected });
          console.log("챌린지가 Firestore에 저장되었습니다.");
        }
      } catch (error) {
        console.error("Firestore에 챌린지 저장 오류:", error);
      }
    } else {
      console.log("사용자가 로그인되어 있지 않습니다.");
    }
  };

  const handleButtonClick = () => {
    const newButtonClickedState = !isButtonClicked;
    setIsButtonClicked(newButtonClickedState);
    saveChallengeToFirestore(newButtonClickedState);
  };

  const handleArrowClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <TopContainer image={challenge.background}>
        <HeaderContainer>
          <LeftArrowIcon onClick={handleArrowClick} />
          <TitleText>챌린지</TitleText>
        </HeaderContainer>
      </TopContainer>
      <JoinChallengeContainer>
        <IconWrapper>
          <img
            src={challenge.icon}
            alt={`${challenge.name} 아이콘`}
            width={60}
            height={60}
          />
        </IconWrapper>

        <ChallengeTitleText>{challenge.name}</ChallengeTitleText>
        <ChallengeSubTitleWrapper>
          <TimeIcon />
          <ChallengeSubTitleText>{challenge.date}</ChallengeSubTitleText>
          <UserIcon />
          <ChallengeSubTitleText>
            {challenge.participants}
          </ChallengeSubTitleText>
        </ChallengeSubTitleWrapper>

        <SubmitButton onClick={handleButtonClick} isClicked={isButtonClicked}>
          {isButtonClicked ? "참여중" : "참여하기"}
        </SubmitButton>
      </JoinChallengeContainer>
      <BottomContainer>
        <ExplainTitleText>챌린지 소개</ExplainTitleText>
        <ExplainSubTitleText
          dangerouslySetInnerHTML={{ __html: challenge.description }}
        />
        <ExplainTitleText>참여 방법</ExplainTitleText>
        <ExplainSubTitleText
          dangerouslySetInnerHTML={{ __html: challenge.methods }}
        />
        <ExplainTitleText>주의사항</ExplainTitleText>
        <ExplainSubTitleText
          dangerouslySetInnerHTML={{ __html: challenge.precautions }}
        />
      </BottomContainer>
    </Container>
  );
}

export default ChallengePopup;

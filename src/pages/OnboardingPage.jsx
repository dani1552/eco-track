import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  Logo,
  Text,
  SubmitButton,
  TextContainer,
  SliderWrapper,
  ArrowLink,
  ArrowLeft,
} from "@/components/onboarding/OnboardingPage.style.js";
import CardPageOne from "/src/components/onboarding/CardPageOne.jsx";
import CardPageTwo from "/src/components/onboarding/CardPageTwo.jsx";
import { auth, db } from "/src/firebase";
import { doc, updateDoc } from "firebase/firestore";

function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const updateScore = (scoreChange) => {
    setTotalScore((prevScore) => prevScore + scoreChange);
  };

  // 완료하기 버튼 클릭 시 Firestore에 totalScore 저장
  const goToNextSlide = async () => {
    if (currentSlide === 0) {
      sliderRef.current.slickNext();
    } else if (currentSlide === 1) {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        try {
          await updateDoc(userDocRef, {
            totalScore: totalScore,
            isFirstLogin: false,
          });
          console.log(`Firestore에 totalScore ${totalScore} 저장 완료!`);
        } catch (error) {
          console.error("Firestore 저장 오류:", error);
        }
      }
      navigate("/home");
    }
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <Container>
      <ArrowLink to="/start">
        <ArrowLeft />
      </ArrowLink>
      <Logo />
      <TextContainer>
        <Text>평소 생활 습관을 선택해주세요</Text>
        {currentSlide === 0 ? (
          <Text>주로 이용하는 교통수단은 무엇인가요?</Text>
        ) : (
          <Text>일상에서 자주 하는 활동은 무엇인가요?</Text>
        )}
      </TextContainer>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          <CardPageOne updateScore={updateScore} />{" "}
          <CardPageTwo updateScore={updateScore} />{" "}
        </Slider>
      </SliderWrapper>
      <SubmitButton onClick={goToNextSlide}>
        {currentSlide === 0 ? "다음으로" : "완료하기"}
      </SubmitButton>
    </Container>
  );
}

export default OnboardingPage;

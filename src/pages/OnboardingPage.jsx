// react-slick library
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
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPageOne from "/src/components/onboarding/CardPageOne.jsx";
import CardPageTwo from "/src/components/onboarding/CardPageTwo.jsx";
import { auth, db } from "/src/firebase";
import { doc, updateDoc } from "firebase/firestore";

function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const goToNextSlide = async () => {
    if (currentSlide === 0) {
      sliderRef.current.slickNext();
    } else if (currentSlide === 1) {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, { isFirstLogin: false });
      }
      navigate("/home");
    }
  };

  // Slider 설정
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
        <Text>평소 생활 습관을 알려주세요</Text>
        {currentSlide == 0 ? (
          <Text>주로 이용하는 교통수단은 무엇인가요?</Text>
        ) : (
          <Text>일상에서 자주 하는 활동을 체크해주세요</Text>
        )}
      </TextContainer>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          <CardPageOne />
          <CardPageTwo />
        </Slider>
      </SliderWrapper>

      <SubmitButton onClick={goToNextSlide}>
        {currentSlide === 0 ? "다음으로" : "완료하기"}
      </SubmitButton>
    </Container>
  );
}

export default OnboardingPage;

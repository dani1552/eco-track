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
      sliderRef.current.slickNext(); // 다음 슬릭 페이지로 이동
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
      <Logo />
      <TextContainer>
        <Text>평소 생활 패턴을 알려주세요</Text>
        <Text>이동할 때 어떤 교통수단을 이용하시나요?</Text>
      </TextContainer>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          <CardPageOne />
          <CardPageTwo />
        </Slider>
      </SliderWrapper>

      <SubmitButton onClick={goToNextSlide}>다음으로</SubmitButton>
    </Container>
  );
}

export default OnboardingPage;

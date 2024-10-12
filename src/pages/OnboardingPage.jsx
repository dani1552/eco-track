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
import { useState } from "react";
import CardPageOne from "/src/components/onboarding/CardPageOne.jsx";
import CardPageTwo from "/src/components/onboarding/CardPageTwo.jsx";

function OnboardingPage() {
  const [clicked, setIsClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = () => {
    setIsClicked(!clicked);
  };

  // Slider 설정
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
  };

  return (
    <Container>
      <Logo />
      <TextContainer>
        <Text>평소 생활 패턴을 알려주세요</Text>
        <Text>이동할 때 어떤 교통수단을 이용하시나요?</Text>
      </TextContainer>
      <SliderWrapper>
        <Slider {...settings}>
          <CardPageOne />
          <CardPageTwo />
        </Slider>
      </SliderWrapper>

      <SubmitButton clicked={clicked.toString()} onClick={handleButtonClick}>
        다음으로
      </SubmitButton>
    </Container>
  );
}

export default OnboardingPage;

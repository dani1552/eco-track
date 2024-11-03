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
  HeaderContainer,
  HomeNav,
  SettingNav,
  MapNav,
  ProfileNav,
  TitleWrapper,
  SettingIntroImage,
  BlueText,
} from "/src/components/intro/IntroPage.style.js";
import {
  HomeIntroImage,
  MapIntroImage,
  ProfileIntroImage,
} from "../components/intro/IntroPage.style";

function IntroPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const goToNextSlide = async () => {
    if (currentSlide === 0) {
      sliderRef.current.slickNext();
    } else if (currentSlide === 1) {
      sliderRef.current.slickNext();
    } else if (currentSlide === 2) {
      sliderRef.current.slickNext();
    } else {
      navigate("/mypage");
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
      <HeaderContainer>
        <ArrowLink to="/mypage">
          <ArrowLeft />
        </ArrowLink>
        <Logo />
      </HeaderContainer>
      <TextContainer>
        {currentSlide === 0 ? (
          <TitleWrapper>
            <SettingNav />
            <Text>오늘의 목표와 챌린지를</Text>
            <Text>
              <BlueText>세팅 페이지</BlueText>에서 설정하고
            </Text>
          </TitleWrapper>
        ) : currentSlide === 1 ? (
          <TitleWrapper>
            <HomeNav />
            <Text>
              <BlueText>홈 화면</BlueText>에서 투두리스트로
            </Text>
            <Text>오늘의 목표를 관리해요!</Text>
          </TitleWrapper>
        ) : currentSlide === 2 ? (
          <TitleWrapper>
            <MapNav />
            <Text>
              <BlueText>카카오맵</BlueText>과 연동하여
            </Text>
            <Text>친환경 장소를 찾아가고</Text>
          </TitleWrapper>
        ) : (
          <TitleWrapper>
            <ProfileNav />
            <Text>
              <BlueText>마이페이지</BlueText>에서
            </Text>
            <Text>활동 기록을 볼 수 있어요!</Text>
          </TitleWrapper>
        )}
      </TextContainer>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <SettingIntroImage />
          </div>
          <div>
            <HomeIntroImage />
          </div>
          <div>
            <MapIntroImage />
          </div>
          <div>
            <ProfileIntroImage />
          </div>
        </Slider>
      </SliderWrapper>
      <SubmitButton onClick={goToNextSlide}>
        {currentSlide === 3 ? "완료하기" : "다음으로"}
      </SubmitButton>
    </Container>
  );
}

export default IntroPage;

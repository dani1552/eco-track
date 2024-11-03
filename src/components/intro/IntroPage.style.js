import styled from "styled-components";
import LogoIcon from "/src/assets/icons/earth-logo-horizon.svg?react";
import ArrowLeftIcon from "/src/assets/icons/arrow-left-icon.svg?react";
import { Link } from "react-router-dom";
import HomeNavBar from "/public/assets/icons/home-nav.png";
import SettingNavBar from "/public/assets/icons/setting-nav.png";
import MapNavBar from "/public/assets/icons/map-nav.png";
import ProfileNavBar from "/public/assets/icons/profile-nav.png";
import SettingIntro from "/public/assets/icons/setting-intro.png";
import HomeIntro from "/public/assets/icons/home-intro.png";
import MapIntro from "/public/assets/icons/map-intro.png";
import ProfileIntro from "/public/assets/icons/mypage-intro.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: var(--weight-bold);
  margin-bottom: 5px;
  display: flex;
  :first-of-type {
    color: #216dff;
  }
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 40px;
  background-color: #216dff;
  color: white;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: var(--weight-bold);

  &:hover {
    background-color: #1d5bcc;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 40px;
  width: 300px;
  .slick-dots {
    bottom: 0px;

    li {
      margin: 0 5px;
    }
    button:before {
      font-size: 12px;
      color: #bbb;
      opacity: 0.75;
    }
    .slick-active button:before {
      color: #216dff;
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const ArrowLink = styled(Link)`
  position: relative;
  left: 70px;
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  width: 20px;
  height: 20px;
`;

export const Logo = styled(LogoIcon)`
  position: relative;
  top: 20px;
  left: 90px;
  width: 130px;
  height: 30px;
  margin-bottom: 40px;
`;

export const HomeNav = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${HomeNavBar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const SettingNav = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${SettingNavBar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const MapNav = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${MapNavBar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const ProfileNav = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${ProfileNavBar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const SettingIntroImage = styled.img.attrs({
  src: SettingIntro,
  alt: "Setting Intro",
})`
  width: 180px;
  height: auto;
  margin: 0 auto;
  display: block;

  margin-bottom: 40px;
`;

export const HomeIntroImage = styled.img.attrs({
  src: HomeIntro,
  alt: "Setting Intro",
})`
  width: 180px;
  height: auto;
  margin: 0 auto;
  display: block;

  margin-bottom: 40px;
`;

export const MapIntroImage = styled.img.attrs({
  src: MapIntro,
  alt: "Setting Intro",
})`
  width: 180px;
  height: auto;
  margin: 0 auto;
  display: block;

  margin-bottom: 40px;
`;

export const ProfileIntroImage = styled.img.attrs({
  src: ProfileIntro,
  alt: "Setting Intro",
})`
  width: 180px;
  height: auto;
  margin: 0 auto;
  display: block;

  margin-bottom: 40px;
`;
export const BlueText = styled.div`
  color: #216dff;
  display: flex;
`;

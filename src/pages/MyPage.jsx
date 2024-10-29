import { useState } from "react";
import {
  TopContainer,
  AvatarUpload,
  AvatarImg,
  AvatarInput,
  Name,
  UserIcon,
  BottomContainer,
  SubTitleText,
  EarthLogo,
  HeaderContainer,
  TitleText,
  MarginBottomContainer,
} from "/src/components/mypage/MyPage.style.js";
import { auth, storage } from "/src/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import RecordCard from "/src/components/mypage/RecordCard.jsx";
import Magazine from "../components/mypage/Magazine";

function MyPage() {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL);

  const onAvatarChange = async (e) => {
    const { files } = e.target;
    if (!user) return;

    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);

      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };
  return (
    <>
      <HeaderContainer>
        <EarthLogo />
        <TitleText>내 활동</TitleText>
      </HeaderContainer>
      <TopContainer>
        <AvatarUpload htmlFor="avatar">
          {avatar ? <AvatarImg src={avatar} /> : <UserIcon />}
        </AvatarUpload>
        <AvatarInput
          onChange={onAvatarChange}
          id="avatar"
          type="file"
          accept="image/*"
        />
        <Name>{user?.displayName ?? "익명"}</Name>
      </TopContainer>
      <BottomContainer>
        <SubTitleText>내 활동 기록</SubTitleText>
        <RecordCard />
        <SubTitleText>다양한 정보를 얻어보세요</SubTitleText>
        <Magazine />
        <MarginBottomContainer />
      </BottomContainer>
    </>
  );
}

export default MyPage;

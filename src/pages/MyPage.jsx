import { useState } from "react";
import {
  Container,
  AvatarUpload,
  AvatarImg,
  AvatarInput,
  Name,
  UserIcon,
} from "/src/components/mypage/MyPage.style.js";
import { auth, storage } from "/src/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

function MyPage() {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL); // 프로필 사진 설정

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
      <Container>
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
      </Container>
    </>
  );
}

export default MyPage;

const KakaoUserInfo = ({ token }) => {
  const GetUserInfo = async () => {
    if (!token) {
      console.log("Token is not available (KakaoUserInfo)");
      return;
    }
    try {
      const response = await fetch("https://kapi.kakao.com/v2/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": `application/x-www-form-urlencoded;charset=utf-8`,
        },
      });
      const result = await response.json();
      console.log("회원 정보: ", result);
    } catch (error) {
      console.error("Error fetching user info: ", error);
    }
  };
  return <button onClick={GetUserInfo}>계정 정보 추출</button>;
};

export default KakaoUserInfo;

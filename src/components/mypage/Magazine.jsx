import styled from "styled-components";

function Magazine() {
  return (
    <>
      <MagazineCardWrppaer>
        <MagazineCard href="https://blog.naver.com/knoc3/223246962420">
          <ImageWrapper>
            <Image
              src="/src/assets/icons/magazine-bg.png"
              alt="매거진 배경이미지"
            />
          </ImageWrapper>
          <TextContainer>
            <Title>탄소발자국이란?</Title>
            <SubTitle>네이버 블로그</SubTitle>
          </TextContainer>
        </MagazineCard>
        <MagazineCard href="https://cpoint.or.kr/netzero/main.do">
          <ImageWrapper>
            <Image
              src="/src/assets/icons/magazine-bg-2.png"
              alt="매거진 배경이미지"
            />
          </ImageWrapper>
          <TextContainer>
            <Title>탄소중립포인트 바로가기</Title>
            <SubTitle>공식 홈페이지</SubTitle>
          </TextContainer>
        </MagazineCard>
      </MagazineCardWrppaer>
    </>
  );
}

export default Magazine;

const MagazineCardWrppaer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  position: center;
  align-items: center;
  justify-content: center;
`;

const MagazineCard = styled.a`
  width: 160px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  padding: 10px;
  text-align: left;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 12px;
  color: gray;
  margin: 5px 0 0;
`;

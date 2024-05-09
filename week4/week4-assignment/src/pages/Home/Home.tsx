import React from "react";
import * as S from "./Home.styled";
import img from "../../assets/임화랑_개인사진.png";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();

  return (
    <S.HomePageWrapper>
      <S.HomePageHeader>새싹웹팟과 만난지 35일째</S.HomePageHeader>
      <S.HomePageImg src={img} alt="메인페이지 이미지" />
      <S.ButtonsContainer>
        <RoutingBtn route={`mypage/${params.memberId}`} btnText="내 정보" />
        <RoutingBtn route="signup" btnText="회원가입" />
      </S.ButtonsContainer>
    </S.HomePageWrapper>
  );
};

export default Home;

import React from "react";
import ReactPlayer from "react-player";
import * as S from "./Home.styled";
import video from "../../assets/homeVideo.mp4";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();

  return (
    <S.HomePageWrapper>
      <S.HomePageHeader>4주차 과제중~ing</S.HomePageHeader>
      <ReactPlayer url={video} controls playing />
      <S.ButtonsContainer>
        <RoutingBtn route={`mypage/${params.memberId}`} btnText="내 정보" />
        <RoutingBtn route="signup" btnText="회원가입" />
      </S.ButtonsContainer>
    </S.HomePageWrapper>
  );
};

export default Home;

import React, { useEffect } from "react";
import * as S from "./MyPage.styled";
import useMypage from "../../hooks/useMypage";
import { useParams } from "react-router-dom";
import FormInput from "../../components/@common/FormInput/FormInput";
import FnBtn from "../../components/@common/FnBtn/FnBtn";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";

const MyPage = () => {
  const {
    myInfo,
    getMyPageInfo,
    handlePreviousPassword,
    handleNewPassword,
    handleNewPasswordVerification,
    handleChangePw,
  } = useMypage();
  const params = useParams();

  useEffect(() => {
    getMyPageInfo(params.memberId);
  }, []);

  const handleChangePwClick = () => {
    handleChangePw(params.memberId);
  };

  return (
    <S.MyPageWrapper>
      <S.MyPageBox>
        <S.MyPageBoxHeader>마이페이지</S.MyPageBoxHeader>
        <S.MyPageBoxInfo>
          <S.MyPageBoxInfoDetail>
            <div>Id</div>
            <div>{myInfo.authenticationId}</div>
          </S.MyPageBoxInfoDetail>
          <S.MyPageBoxInfoDetail>
            <div>닉네임</div>
            <div>{myInfo.nickname}</div>
          </S.MyPageBoxInfoDetail>
          <S.MyPageBoxInfoDetail>
            <div>전화번호</div>
            <div>{myInfo.phone}</div>
          </S.MyPageBoxInfoDetail>
        </S.MyPageBoxInfo>
        <S.PasswordChange>
          <S.PwChangeToggle>비밀번호 변경</S.PwChangeToggle>
          <FormInput
            labelText="기존 비밀번호"
            inputType="text"
            id="previousPw"
            onChange={handlePreviousPassword}
          />
          <FormInput
            labelText="새로운 비밀번호"
            inputType="text"
            id="newPw"
            onChange={handleNewPassword}
          />
          <FormInput
            labelText="비밀번호 확인"
            inputType="text"
            id="newPwV"
            onChange={handleNewPasswordVerification}
          />
          <FnBtn onClick={handleChangePwClick}>비밀번호 변경</FnBtn>
        </S.PasswordChange>
        <RoutingBtn route={`main/${params.memberId}`} btnText="홈으로" />
      </S.MyPageBox>
    </S.MyPageWrapper>
  );
};

export default MyPage;

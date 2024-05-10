import React, { useRef, useState } from "react";
import * as S from "./SignUp.styled";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import FormTitle from "../../components/@common/FormTitle/FormTitle";
import FormInput from "../../components/@common/FormInput/FormInput";
import FnBtn from "../../components/@common/FnBtn/FnBtn";
import useSignup from "../../hooks/useSignup";
import { VERIFYCOMMENT } from "../../constants/verifyComment";

const SignUp = () => {
  const {
    idErrMessage,
    pwErrMessage,
    nErrMessage,
    phoneErrMessage,
    handleIdChange,
    handlePwChange,
    handleNicknameChange,
    handlePhoneChange,
    handleSignup,
  } = useSignup();
  console.log(!!idErrMessage);
  return (
    <S.SignUpPageWrapper>
      <S.SignUpBox>
        <S.SignUpHeader>
          <FormTitle>회원가입 페이지</FormTitle>
        </S.SignUpHeader>
        <S.FormBox>
          <FormInput
            labelText="ID"
            inputType="text"
            id="id"
            autoFocus
            onChange={handleIdChange}
            isInputEmpty={!!idErrMessage}
          />
          <S.ErrorMessage>{idErrMessage ? idErrMessage : ""}</S.ErrorMessage>
          <FormInput
            labelText="비밀번호"
            inputType="password"
            id="pw"
            onChange={handlePwChange}
          />
          <S.ErrorMessage>{pwErrMessage}</S.ErrorMessage>
          <S.InputVerify>{VERIFYCOMMENT.PW}</S.InputVerify>
          <FormInput
            labelText="닉네임"
            inputType="text"
            id="nickname"
            onChange={handleNicknameChange}
          />
          <S.ErrorMessage>{nErrMessage}</S.ErrorMessage>
          <FormInput
            labelText="전화번호"
            inputType="text"
            id="pn"
            onChange={handlePhoneChange}
          />
          <S.ErrorMessage>{phoneErrMessage}</S.ErrorMessage>
          <S.InputVerify>{VERIFYCOMMENT.PHONE}</S.InputVerify>
        </S.FormBox>
        <S.ButtonsContainer>
          <FnBtn onClick={handleSignup}>회원가입</FnBtn>
          <RoutingBtn route="-1" btnText="뒤로가기" />
        </S.ButtonsContainer>
      </S.SignUpBox>
    </S.SignUpPageWrapper>
  );
};

export default SignUp;

import React from "react";
import * as S from "./SignUp.styled";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import FormTitle from "../../components/@common/FormTitle/FormTitle";
import FormInput from "../../components/@common/FormInput/FormInput";
import FnBtn from "../../components/@common/FnBtn/FnBtn";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const {
    handleIdChange,
    handlePwChange,
    handleNicknameChange,
    handlePhoneChange,
    handleSignup,
  } = useSignup();

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
          />
          <FormInput
            labelText="비밀번호"
            inputType="password"
            id="pw"
            onChange={handlePwChange}
          />
          <FormInput
            labelText="닉네임"
            inputType="text"
            id="nickname"
            onChange={handleNicknameChange}
          />
          <FormInput
            labelText="전화번호"
            inputType="text"
            id="pn"
            onChange={handlePhoneChange}
          />
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

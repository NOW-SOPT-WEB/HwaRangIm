import React from "react";
import * as S from "./Login.styled";
import img from "../../assets/새싹img.png";
import FormTitle from "../../components/@common/FormTitle/FormTitle";
import FormInput from "../../components/@common/FormInput/FormInput";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import FnBtn from "../../components/@common/FnBtn/FnBtn";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { handleIdChange, handlePwChange, handleLogin } = useLogin();
  return (
    <S.LoginPageWrapper>
      <S.LoginBox>
        <S.LoginHeader>
          <FormTitle>Login</FormTitle>
        </S.LoginHeader>
        <img src={img} alt="새싹이미지" width="150px" />
        <S.FormBox>
          <FormInput
            labelText="ID"
            inputType="text"
            id="id"
            autoFocus
            onChange={handleIdChange}
          />
          <FormInput
            labelText="PW"
            inputType="password"
            id="pw"
            onChange={handlePwChange}
          />
        </S.FormBox>
        <S.ButtonsContainer>
          <FnBtn onClick={handleLogin}>로그인</FnBtn>
          <RoutingBtn route="signup" btnText="회원가입" />
        </S.ButtonsContainer>
      </S.LoginBox>
    </S.LoginPageWrapper>
  );
};

export default Login;

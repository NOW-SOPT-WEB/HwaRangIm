import React from "react";
import * as S from "./Login.styled";
import img from "../../assets/새싹img.png";
import FormTitle from "../../components/@common/FormTitle/FormTitle";
import FormInput from "../../components/@common/FormInput/FormInput";
import RoutingBtn from "../../components/@common/RoutingBtn/RoutingBtn";
import FnBtn from "../../components/@common/FnBtn/FnBtn";

const Login = () => {
  const handleLogin = () => {
    console.log("click login");
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginBox>
        <FormTitle>Login</FormTitle>
        <img src={img} width="200px" />
        <FormInput labelText="ID" inputType="text" />
        <FormInput labelText="PW" inputType="password" />
        <S.ButtonsContainer>
          <FnBtn onClick={handleLogin}>로그인</FnBtn>
          <RoutingBtn route="signup" btnText="회원가입" />
        </S.ButtonsContainer>
      </S.LoginBox>
    </S.LoginPageWrapper>
  );
};

export default Login;

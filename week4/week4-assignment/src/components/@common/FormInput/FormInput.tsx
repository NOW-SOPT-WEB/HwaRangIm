import React from "react";
import * as S from "./FormInput.styled";

const FormInput = ({ labelText, inputType }) => {
  return (
    <S.InputWrapper>
      <label>{labelText}</label>
      <S.InputBox type={inputType} />
    </S.InputWrapper>
  );
};
export default FormInput;

import React from "react";
import * as S from "./FormInput.styled";

interface FormInputPropTypes {
  labelText: string;
  inputType: string;
  id: string;
  onChange?: () => void;
}

const FormInput = ({
  labelText,
  inputType,
  id,
  onChange,
}: FormInputPropTypes) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={id}>{labelText}</S.InputLabel>
      <S.InputBox type={inputType} id={id} onChange={onChange} />
    </S.InputWrapper>
  );
};
export default FormInput;

import * as S from "./FormInput.styled";

interface FormInputPropTypes {
  labelText: string;
  inputType: string;
  id: string;
  value: string | number;
  onChange?: () => void;
  autoFocus?: boolean;
  isInputEmpty?: boolean;
}

const FormInput = ({
  labelText,
  inputType,
  id,
  value,
  onChange,
  autoFocus,
  isInputEmpty,
}: FormInputPropTypes) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={id}>{labelText}</S.InputLabel>
      <S.InputBox
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        isInputEmpty={isInputEmpty}
      />
    </S.InputWrapper>
  );
};

export default FormInput;

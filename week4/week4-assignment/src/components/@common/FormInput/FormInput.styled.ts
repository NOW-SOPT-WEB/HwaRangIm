import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputLabel = styled.label`
  font-weight: bold;
`;
export const InputBox = styled.input`
  width: 70%;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  ${(props) =>
    props.isInputEmpty &&
    css`
      border: 2px solid red;
    `}
`;

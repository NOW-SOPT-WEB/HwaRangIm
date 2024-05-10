import styled from "styled-components";

export const SignUpPageWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.MainBack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 75%;
  background-color: ${({ theme }) => theme.colors.LightPurple};
`;

export const SignUpHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const FormBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
`;

export const InputVerify = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  letter-spacing: -0.08rem;
  color: ${({ theme }) => theme.colors.Blue};
`;

export const ErrorMessage = styled.div`
  color: red;
`;

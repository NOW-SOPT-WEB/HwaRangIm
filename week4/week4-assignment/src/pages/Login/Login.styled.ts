import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.MainBack};
  display: flex;
  align-items: center;
`;

export const LoginBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 40%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.FormBack};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

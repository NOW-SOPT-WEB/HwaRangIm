import styled from "styled-components";

export const MyPageWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.MainBack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPageBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  width: 45%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.LightPurple};
`;

export const MyPageBoxHeader = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  background-color: pink;
`;

export const MyPageBoxInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: pink;
`;

export const MyPageBoxInfoDetail = styled.div`
  width: 100%;
  display: flex;

  & div:first-child {
    width: 50%;
  }
`;

export const PasswordChange = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;
export const PwChangeToggle = styled.button`
  color: ${({ theme }) => theme.colors.White};
`;

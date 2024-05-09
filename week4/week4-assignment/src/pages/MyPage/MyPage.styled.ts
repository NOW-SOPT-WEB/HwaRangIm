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
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.LightPurple};
  padding: 1.5rem 0;
`;

export const MyPageBoxHeader = styled.header`
  width: 100%;
  text-align: center;
  font-size: 2rem;
`;

export const MyPageBoxInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const MyPageBoxInfoDetail = styled.div`
  width: 80%;
  display: flex;

  & div:first-child {
    width: 50%;
  }
`;

export const PasswordChange = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const PwChangeToggle = styled.button`
  color: darkblue;
  font-size: 1.1rem;
`;

import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.MainBack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageHeader = styled.header`
  position: fixed;
  text-align: center;
  top: 0;
  width: 100dvw;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.LightPurple};
  color: ${({ theme }) => theme.colors.White};
  font-size: 3rem;
`;

export const HomePageImg = styled.img`
  width: 50%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
`;

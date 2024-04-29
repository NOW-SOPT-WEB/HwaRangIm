import styled from "styled-components";

export const CardGameWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.MainBack};
  width: 100dvw;
  min-height: 100dvh;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.SkyBlue};
  width: 100dvw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.White};
  font-family: var(--font-sunflower);
  font-size: 4rem;
`;

export const LevelSelector = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LevelButton = styled.button`
  background-color: ${({ value, selectedlevel, theme }) =>
    value === selectedlevel ? theme.colors.LightPurple : theme.colors.Violet};
  color: ${({ theme }) => theme.colors.White};
  width: 10rem;
  height: 4rem;
  border-radius: 5px;
  font-family: var(--font-sunflower);
  font-size: 2rem;
`;

export const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Pink};
  color: white;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 8rem;
  height: 5rem;
  border-radius: 5px;
  font-family: var(--font-sunflower);
  font-size: 2.5rem;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.LightPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 30rem;
  height: 15rem;
  border-radius: 1rem;
  gap: 3rem;
`;

export const ModalComment = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const ModalResetBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.Violet};
  color: white;
  width: 80%;
  height: 5rem;
  border-radius: 1rem;
`;

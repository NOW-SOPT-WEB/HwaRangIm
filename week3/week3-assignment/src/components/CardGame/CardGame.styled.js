import styled from "styled-components";

export const CardGameWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.MainBack};
  width: 100dvw;
  min-height: 100dvh;
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

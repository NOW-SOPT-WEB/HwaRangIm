import styled from "styled-components";

export const GameWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100dvw;
  padding: 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.Pink};
`;

import styled from "styled-components";

export const FnBtn = styled.button`
  width: 4rem;
  height: 2rem;

  /* padding: 0.5rem 1rem; */
  background-color: ${({ theme }) => theme.colors.Btn};
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
  border-radius: 5px;
`;

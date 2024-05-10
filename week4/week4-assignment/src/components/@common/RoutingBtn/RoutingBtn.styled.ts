import styled from "styled-components";

export const RoutingBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.Btn};
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
  border-radius: 5px;
`;

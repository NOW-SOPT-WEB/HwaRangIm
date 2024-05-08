import React from "react";
import * as S from "./FnBtn.styled";

const FnBtn = ({ children, onClick }) => {
  return <S.FnBtn onClick={onClick}>{children}</S.FnBtn>;
};

export default FnBtn;

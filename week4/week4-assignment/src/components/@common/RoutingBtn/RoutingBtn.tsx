import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RoutingBtn.styled";

const RoutingBtn = ({ route, btnText }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (Number(route) === -1) {
      navigate(-1);
    } else {
      navigate(`/${route}`);
    }
  };

  return <S.RoutingBtn onClick={handleNavigate}>{btnText}</S.RoutingBtn>;
};

export default RoutingBtn;
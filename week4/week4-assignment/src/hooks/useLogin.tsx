import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { INPUTEMPTY } from "../constants/inputEmptyComment";

const useLogin = () => {
  const [formInfo, setFormInfo] = useState({
    id: "",
    pw: "",
  });
  const [idErrMessage, setIdErrMessage] = useState("");
  const [pwErrMessage, setPwErrMessage] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, id: e.target.value });
    setIdErrMessage("");
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, pw: e.target.value });
    setPwErrMessage("");
  };

  const handleLogin = async () => {
    const { id, pw } = formInfo;
    if (id && pw) {
      try {
        let memberId: string | null = null;
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
          {
            authenticationId: id,
            password: pw,
          }
        );
        alert(response.data.message);
        memberId = response.headers.location;
        navigate(`/main/${memberId}`);
      } catch (error) {
        alert(error.response.data.message);
      }
    } else if (!id && pw) {
      setIdErrMessage(INPUTEMPTY.ID);
    } else if (id && !pw) {
      setPwErrMessage(INPUTEMPTY.PW);
    } else {
      alert(INPUTEMPTY.ALL);
    }
  };

  return {
    idErrMessage,
    pwErrMessage,
    handleIdChange,
    handlePwChange,
    handleLogin,
  };
};

export default useLogin;

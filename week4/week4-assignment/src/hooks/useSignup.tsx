import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { INPUTEMPTY } from "../constants/inputEmptyComment";

const useSignup = () => {
  const [formInfo, setFormInfo] = useState({
    id: "",
    pw: "",
    nickname: "",
    phone: "",
  });
  const [idErrMessage, setIdErrMessage] = useState("");
  const [pwErrMessage, setPwErrMessage] = useState("");
  const [nErrMessage, setNErrMessage] = useState("");
  const [phoneErrMessage, setPhoneErrMessage] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, id: e.target.value });
    setIdErrMessage("");
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, pw: e.target.value });
    setPwErrMessage("");
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, nickname: e.target.value });
    setNErrMessage("");
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(
      e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );

    setFormInfo({
      ...formInfo,
      phone: e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, ""),
    });
    setPhoneErrMessage("");
  };

  const handleSignup = async () => {
    const { id, pw, nickname, phone } = formInfo;
    if (!id) {
      setIdErrMessage(INPUTEMPTY.ID);
      return;
    }
    if (!pw) {
      setPwErrMessage(INPUTEMPTY.PW);
      return;
    }
    if (!nickname) {
      setNErrMessage(INPUTEMPTY.NICKNAME);
      return;
    }
    if (!phone) {
      setPhoneErrMessage(INPUTEMPTY.PHONE);
      return;
    }
    try {
      let memberId: string | null = null;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId: id,
          password: pw,
          nickname: nickname,
          phone: phone,
        }
      );
      alert(response.data.message);
      memberId = response.headers.location;
      navigate(`/main/${memberId}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return {
    idErrMessage,
    pwErrMessage,
    nErrMessage,
    phoneErrMessage,
    handleIdChange,
    handlePwChange,
    handleNicknameChange,
    handlePhoneChange,
    handleSignup,
  };
};

export default useSignup;

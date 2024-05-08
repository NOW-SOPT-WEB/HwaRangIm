import React, { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [formInfo, setFormInfo] = useState({
    id: "",
    pw: "",
    nickname: "",
    phone: "",
  });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, id: e.target.value });
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, pw: e.target.value });
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, nickname: e.target.value });
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, phone: e.target.value });
  };

  const handleSignup = async () => {
    try {
      //   const data = {
      //     id: formInfo.id,
      //     pw: formInfo.pw,
      //     nickname: formInfo.nickname,
      //     phone: formInfo.phone,
      //   };

      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId: formInfo.id,
          password: formInfo.pw,
          nickname: formInfo.nickname,
          phone: formInfo.phone,
        }
      );

      console.log(response);

      //   const responseData = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleIdChange,
    handlePwChange,
    handleNicknameChange,
    handlePhoneChange,
    handleSignup,
  };
};

export default useSignup;

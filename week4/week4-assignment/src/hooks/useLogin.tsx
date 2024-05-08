import React, { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [formInfo, setFormInfo] = useState({
    id: "",
    pw: "",
  });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, id: e.target.value });
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, pw: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
        {
          authenticationId: formInfo.id,
          password: formInfo.pw,
        }
      );

      console.log(response.headers.location);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return {
    handleIdChange,
    handlePwChange,
    handleLogin,
  };
};

export default useLogin;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formInfo, setFormInfo] = useState({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, id: e.target.value });
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, pw: e.target.value });
  };

  const handleLogin = async () => {
    try {
      let memberId: string | null = null;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
        {
          authenticationId: formInfo.id,
          password: formInfo.pw,
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
    handleIdChange,
    handlePwChange,
    handleLogin,
  };
};

export default useLogin;

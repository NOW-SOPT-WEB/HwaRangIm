import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface MyInfoPropTypes {
  authenticationId: string;
  nickname: string;
  phone: string;
}

interface PwChangePropTypes {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
}

const useMypage = () => {
  const [myInfo, setMyInfo] = useState<MyInfoPropTypes>({
    authenticationId: "",
    nickname: "",
    phone: "",
  });

  const [pwChange, setPwChange] = useState<PwChangePropTypes>({
    previousPassword: "",
    newPassword: "",
    newPasswordVerification: "",
  });

  const navigate = useNavigate();

  const getMyPageInfo = async (memberId: number) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/member/info`,
        {
          headers: { memberId: memberId },
        }
      );
      const data = response.data.data;
      setMyInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwChange({ ...pwChange, previousPassword: e.target.value });
  };
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwChange({ ...pwChange, newPassword: e.target.value });
  };
  const handleNewPasswordVerification = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPwChange({ ...pwChange, newPasswordVerification: e.target.value });
  };

  const handleChangePw = async (memberId: number) => {
    const { previousPassword, newPassword, newPasswordVerification } = pwChange;

    // 값이 비어 있는지 확인
    if (!previousPassword || !newPassword || !newPasswordVerification) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_BASE_URL}/member/password`,
        {
          previousPassword,
          newPassword,
          newPasswordVerification,
        },
        {
          headers: { memberId: memberId },
        }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return {
    getMyPageInfo,
    myInfo,
    handlePreviousPassword,
    handleNewPassword,
    handleNewPasswordVerification,
    handleChangePw,
  };
};

export default useMypage;

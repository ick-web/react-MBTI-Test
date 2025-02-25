import React, { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useAuth } from "../hook/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await updateProfile({nickname});
    alert("프로필이 성공적으로 업데이트되었습니다")
  } catch (error){
    console.log("프로필 업데이트 오류:", error)
    alert("프로필 업데이트에 실패했습니다. 다시 시도해주세요")
  }
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white p-11 rounded-xl shadow-xl ">
        <h1 className="text-3xl font-bold">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <input
              className="w-full p-4 m-4 border border-gray-300 rounded-lg"
              onChange={handleNicknameChange}
              value={nickname}
              placeholder="닉네임"
            />
          <button className="bg-blue-500 text-white w-full hover:bg-blue-400 p-4 m-4 border-2 border-solid rounded-xl" type="submit">프로필 업데이트</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

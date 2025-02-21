import React, { useState } from "react";
import { updateProfile } from "../api/auth";
import { useAuth } from "../hook/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(nickname);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white p-11 rounded-xl shadow-xl ">
        <h1 className="text-3xl font-bold">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full p-4 m-4 border border-gray-300 rounded-lg"
              onChange={handleNicknameChange}
              placeholder="닉네임"
            />
          </div>
          <button className="bg-blue-500 text-white w-full hover:bg-blue-400 p-4 m-4 border-2 border-solid rounded-xl" type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Home = () => {
  const { user } = useAuth();

  const loginAlert = () => {
    if (!user) return alert("로그인을 먼저 해주세요.");
  };

  return (
    <div className="flex flex-col m-10 items-center">
      <h1 className="text-3xl font-bold p-4 ">너의 성격을 알아보자!</h1>
      <p className="text-lg p-4">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-400 p-4 border-2 border-solid rounded-xl"
        to="test"
      >
        <button onClick={loginAlert} className="text-white">
          내 성격 알아보러 가기
        </button>
      </Link>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-red-500">
      <h1>너의 성격을 알아보자!</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <Link to="test">
        <button>내 성격 알아보러 가기</button>
      </Link>
    </div>
  );
};

export default Home;

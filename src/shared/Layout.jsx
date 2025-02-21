import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function Header() {
    const { user, isLoading, logout } = useAuth();

    if(isLoading) return <p>로딩 중...</p>

  return (
    <div className="flex bg-white-400 shadow-lg p-8 justify-between items-center">
      <Link className="text-xl font-medium hover:text-blue-500 " to="/">
        홈
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/profile" className="mx-2 hover:text-blue-500">프로필</Link>
            <Link to="/test" className="mx-2 hover:text-blue-500">테스트</Link>
            <Link to="/result" className="mx-2 hover:text-blue-500">결과보기</Link>
            <button onClick={logout} className="mx-2 hover:text-blue-500">로그아웃</button>
          </>
        ) : (
          <>
            <Link  to="/login" className="mx-2 hover:text-blue-500">로그인</Link>
            <Link to="/signup" className="mx-2 hover:text-blue-500">회원가입</Link>
          </>
        )}
      </div>
    </div>
  );
}

const Layout = ({ children }) => {
    

  return (
    <div>
      <Header />
      <div className="flex flex-col m-10 items-center">{children}</div>
    </div>
  );
};

export default Layout;

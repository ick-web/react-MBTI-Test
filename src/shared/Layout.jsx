import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex bg-red-500 justify-between items-center">
      <Link to="/">홈</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

const Layout = ({ children }) => {
  return (
    <div>
      <Header  />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

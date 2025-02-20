import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="flex bg-red-50 content-between">
      <Link to="/">홈</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div class="flex">{children}</div>
    </div>
  );
};

export default Layout;

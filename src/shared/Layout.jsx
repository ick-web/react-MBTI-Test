import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex bg-white-400 shadow-lg p-8 justify-between items-center">
      <Link className="text-xl font-medium hover:text-blue-500 " to="/">
        홈
      </Link>
      <Link className="text-xl hover:text-blue-500 " to="/login">
        로그인
      </Link>
    </div>
  );
}

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div classNameName="flex flex-col m-10 items-center ">{children}</div>
    </div>
  );
};

export default Layout;

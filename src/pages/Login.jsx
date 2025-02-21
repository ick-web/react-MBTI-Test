import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.accessToken);
      alert("로그인 성공")
      navigate("/")
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div className="bg-white p-11 rounded-xl shadow-xl ">
        <h1 className="text-3xl font-bold">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link className="text-blue-500 hover:text-black" to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

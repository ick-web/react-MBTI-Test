import React from "react";
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Login = () => {

    const handleLogin = async (formData) => {
        try{
            await login(formData);
        } catch (error){
            alert("로그인에 실패했습니다. 다시 시도해주세요.")
        }
    }

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

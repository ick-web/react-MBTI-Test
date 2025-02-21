import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입에 성공했습니다.!")
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.log(formData)
    }
  };

  return (
    <div>
      <div className="bg-white p-11 rounded-xl shadow-xl ">
        <h1 className="text-3xl font-bold">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요?{" "}
            <Link className="text-blue-500 hover:text-black" to="/login">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

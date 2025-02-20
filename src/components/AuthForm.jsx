import React from "react";
import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
          className="w-full p-4 m-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
          className="w-full p-4 m-4 border border-gray-300 rounded-lg"
        />
        {mode === "signup" && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
            className="w-full p-4 m-4 border border-gray-300 rounded-lg"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full hover:bg-blue-400 p-4 m-4 border-2 border-solid rounded-xl"
        >
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;

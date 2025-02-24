import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

// 회원가입 (POST)
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

//로그인 (POST)
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

//프로필 정보 가져오기 (GET)
export const getUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No token found");

  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// 프로필 수정 (PATCH)
export const updateProfile = async (formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData);
  return response.data;
};

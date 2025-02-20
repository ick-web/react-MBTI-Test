import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link/';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
 //서버에 id가 일치하면 사용자 정보 가져오기
 const response = await axios.post(`${API_URL}/login`, {userData});
  return response.data;
};

export const getUserProfile = async (token) => {
//프로필 정보 가져오기
const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
// 프로필 수정하기 patch
const response = await axios.get(`${API_URL}/profile`, formData);
  return response.data;
};
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getUserProfile, login as loginApi } from "../api/auth";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 로그인한 사용자 정보 가져오기 (자동 캐싱)
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
    retry: false, // 토큰이 없으면 재시도 안 함
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
  });

  // 로그인 요청
  const loginMutation = useMutation({
    mutationFn: async (formData) => {
      const data = await loginApi(formData);
      localStorage.setItem("accessToken", data.accessToken);
      queryClient.invalidateQueries(["user"]); // 로그인 후 user 정보 다시 가져오기
      navigate("/");
      window.location.reload();
    },
  });

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("accessToken");
    queryClient.invalidateQueries(["user"]); // 로그아웃 후 user 정보 무효화
    navigate("/login");
    window.location.reload();
  };

  return { user, isLoading, loginMutation, logout };
};

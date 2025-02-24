import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { deleteTestResult, getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultPage = () => {
  const queryClient = useQueryClient();
  const {
    data: results,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const { mutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("삭제하시겠습니까?");
    if (isConfirmed) {
      mutate(id);
    }
  };

  if (isLoading) return <p>결과를 불러오는 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <div className="w-full flex justify-center border-2 rounded-2xl">
      <ul className="w-full max-w-2xl rounded-2xl">
        {results?.map((result) => (
          <li
            key={result.id}
            className="p-6 w-full rounded-xl flex flex-col bg-slate-500 m-4"
          >
            <div className="flex w-full w-2xl mb-5 justify-between">
              <p className="text-3xl font-semibold text-white">
                {result.nickname}
              </p>
              <p className="text-white"> {result.date}</p>
            </div>
            <p className="text-xl font-semibold text-yellow-300">
              {result.result}
            </p>
            <p className="text-white mb-5">
              {" "}
              {mbtiDescriptions[result.result]}
            </p>
            <div className="flex flex-row gap-3 justify-end">
              <button className="bg-blue-500 text-white w-13 hover:bg-blue-400 p-4 border-2 border-none rounded-xl">
                공개로 전환
              </button>
              <button
                onClick={() => {
                  handleDelete(result.id);
                }}
                className="bg-red-500 text-white w-13 hover:bg-red-400 p-4 border-2 border-none rounded-xl"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestResultPage;

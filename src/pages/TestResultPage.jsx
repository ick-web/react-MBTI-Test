import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTestResults } from "../api/testResults";

const TestResultPage = () => {
  const {
    data: results,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isLoading) return <p>결과를 불러오는 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <div className="m-full p-3">
      <ul>
        {results.map((result) => (
          <li
            key={result.id}
            className="p-4 w-2xl flex flex-col items-center bg-slate-500 m-4"
          >
            <div className="flex w-full bg-white-400 shadow-lg p-8 justify-between">
              <p>{result.nickname}</p>
              <p> {result.date}</p>
            </div>
            <p>결과: {result.result}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestResultPage;

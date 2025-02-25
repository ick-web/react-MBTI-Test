import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Home = () => {
  const { user } = useAuth();

  const loginAlert = () => {
    if (!user) return alert("로그인을 먼저 해주세요.");
  };

  const cardContents = [
    {
      title: "성격 유형 검사",
      description:
        "자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.",
    },
    {
      title: "성격 유형 이해",
      description:
        "다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.",
    },
    {
      title: "팀 평가",
      description:
        "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.",
    },
  ];

  return (
    <div className="flex flex-col m-10 items-center">
      <h1 className="text-4xl font-bold p-4 ">무료 성격 테스트</h1>
      <p className="text-md p-4">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="flex items-center gap-2 flex-row flex-wrap justify-evenly">
        {cardContents.map((content, i) => (
          <div className="text-left w-1/4 m-5 rounded-xl h-40 shadow-lg p-4 " key={i}>
            <h3 className="text-subTitle text-black font-bold mb-2">{content.title}</h3>
            <p className="text-secondary">{content.description}</p>
          </div>
        ))}
      </div>
      <Link
        className="bg-blue-500 hover:bg-blue-400 p-4 border-2 border-solid rounded-xl"
        to="test"
      >
        <button onClick={loginAlert} className="text-white">
          내 성격 알아보러 가기
        </button>
      </Link>
    </div>
  );
};

export default Home;

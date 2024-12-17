// 챔피언 디테일 페이지 ssr
import { BASE_URL } from "@/constants/api";
import { fetchChampionsDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

interface ChampionPageProps {
  params: { id: string };
}

interface Skills {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export const dynamic = "force-dynamic";

export default async function ChampionDetailPage({
  params,
}: ChampionPageProps) {
  const { id } = params;
  const championDetail = await fetchChampionsDetail(id);

  const skills: Skills[] = championDetail[id].spells;
  console.log("------", skills);

  const latestVersion = await fetchVersion();

  return (
    <div>
      <div className="min-h-screen text-white flex flex-col items-center py-10 px-5 relative">
        {/* 챔피언 메인 이미지 */}
        <Image
          src={`${BASE_URL}/cdn/img/champion/splash/${[id]}_0.jpg`}
          alt="Champion Splash"
          fill
          className="object-cover brightness-50"
        />

        {/* 카드 영역 */}
        <div className="p-6 max-w-6xl w-full z-10">
          {/* 타이틀 */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4 text-subColor1 font-bold [text-shadow:_2px_2px_0_black]">
              {championDetail[id].name}
            </h1>
            <h2 className="text-3xl mb-5 text-subColor1 [text-shadow:_2px_2px_0_black]">
              {championDetail[id].title}
            </h2>

            {/* 챔피언*/}
            <Image
              src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${championDetail[id].image.full}`}
              alt={championDetail[id].name}
              width={150}
              height={150}
            />

            {/* 설명 */}
            <p className="mt-5 text-lg leading-relaxed text-gray-300 text-center">
              {championDetail[id].blurb}
            </p>
          </div>

          {/* 챔피언 속성 */}
          <ul className="flex gap-8 justify-center mt-10 text-2xl text-subColor1 [text-shadow:_2px_2px_0_black]">
            <li>
              공격: <span>{championDetail[id].info.attack}</span>
            </li>
            <li>
              방어: <span>{championDetail[id].info.defense}</span>
            </li>
            <li>
              마법: <span>{championDetail[id].info.magic}</span>
            </li>
            <li>
              난이도: <span>{championDetail[id].info.difficulty}</span>
            </li>
          </ul>

          {/* 스킬 영역 */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-subColor1 mb-6 text-center border-b-2 border-b-neutral-700 pb-3">
              스킬 정보
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((sk) => (
                <div
                  key={sk.id}
                  className="p-5 bg-gray-800 bg-opacity-40 rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                  <Image
                    src={`${BASE_URL}/cdn/${latestVersion}/img/spell/${sk.image.full}`}
                    alt={sk.id}
                    width={100}
                    height={100}
                    className="rounded-lg mx-auto mb-4"
                  />
                  <h4 className="text-2xl text-yellow-300 mb-3 text-center">
                    {sk.name}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed text-center">
                    {sk.description.replace(/<[^>]+>|&quot;/g, "")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

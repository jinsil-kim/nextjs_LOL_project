// 챔피언 디테일 페이지 ssr
import { BASE_URL } from "@/constants/api";
import { fetchChampionsDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

interface ChampionPageProps {
  params: { id: string };
}

export const dynamic = "force-dynamic";

export default async function ChampionDetailPage({
  params,
}: ChampionPageProps) {
  const { id } = params;
  const championDetail = await fetchChampionsDetail(id);

  console.log("championDetail", id);
  const latestVersion = await fetchVersion();

  return (
    <div className="text-white flex flex-col items-center py-10 px-5">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${[
          id,
        ]}_0.jpg`}
        alt="ddd"
        fill
        className="object-cover"
      />
      <div className="p-6 max-w-3xl w-full z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mb-4 text-subColor1 [text-shadow:_2px_2px_0_black]">{championDetail[id].name}</h1>
          <h2 className="text-2xl mb-5 text-subColor1 [text-shadow:_2px_2px_0_black]">{championDetail[id].title}</h2>
          <Image
            src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${championDetail[id].image.full}`}
            alt={championDetail[id].name}
            width={200}
            height={200}
          />
          <p className="mt-5 text-xl text-subColor1 [text-shadow:_1.5px_1px_0_black]">{championDetail[id].blurb}</p>
          <div>
            <ul className="flex gap-5 mt-9 text-3xl text-subColor1 [text-shadow:_2px_2px_0_black]">
              <li>공격: {championDetail[id].info.attack}</li>
              <li>방어: {championDetail[id].info.defense}</li>
              <li>마법: {championDetail[id].info.magic}</li>
              <li>난이도: {championDetail[id].info.difficulty}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

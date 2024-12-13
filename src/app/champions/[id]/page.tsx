// 챔피언 디테일 페이지 ssr
import { BASE_URL } from "@/constants/api";
import { fetchChampionsDetail, fetchVersion } from "@/utils/serverApi";
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

  console.log("championDetail", championDetail);
  const latestVersion = await fetchVersion();

  return (
    <main>
      <div>
        <h1>{championDetail.data[id].name}</h1>
        <h2>{championDetail.data[id].title}</h2>
        <img
          src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${championDetail.data[id].image.full}`}
          alt=""
        />
        <p>{championDetail.data[id].blurb}</p>
        <div>
          <ul>
            <li>공격: {championDetail.data[id].info.attack}</li>
            <li>방어: {championDetail.data[id].info.defense}</li>
            <li>마법: {championDetail.data[id].info.magic}</li>
            <li>난이도: {championDetail.data[id].info.difficulty}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

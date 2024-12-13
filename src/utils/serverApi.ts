"use server";

import { BASE_URL } from "@/constants/api";
import { Champion } from "@/types/champions";

export async function fetchVersion(): Promise<Champion[]> {
  //최신 버전 정보 가져오기
  try {
    const versionRes = await fetch(`${BASE_URL}/api/versions.json`);
    if (!versionRes.ok || !versionRes ) throw new Error("버전정보를 가져오지 못했습니다");

    const versionData = await versionRes.json();
    const latestVersion = versionData[0];

    // 챔피언 리스트
    const championsRes = await fetch(
      `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`
    );
    if (!championsRes.ok || !championsRes) throw new Error("챔피언 목록을 불러오는데 실패했습니다");

    const championData = await championsRes.json()
    console.log(championData);
    return Object.values(championData.data) as Champion[];
  } catch (error) {
    console.error("fetchVersion api호출 실패", error);
    throw new Error("최신정보를 가져오지 못했습니다");
  }
}

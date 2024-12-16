"use server";

import { BASE_URL } from "@/constants/api";
import { Champion, ChampionDetail } from "@/types/champions";
import { Item } from "@/types/items";

export async function fetchVersion(): Promise<string> {
  //최신 버전 정보 가져오기 api
  try {
    const versionRes = await fetch(`${BASE_URL}/api/versions.json`);
    if (!versionRes.ok || !versionRes)
      throw new Error("버전정보를 가져오지 못했습니다");

    const versionData = await versionRes.json();
    const latestVersion = versionData[0];
    return latestVersion;
  } catch (error) {
    console.error("fetchVersion api호출 실패", error);
    throw new Error("최신정보를 가져오지 못했습니다");
  }
}

export const fetchChampions = async (): Promise<Champion[]> => {
  try {
    const latestVersion = await fetchVersion();

    // 챔피언 리스트 api
    const championsRes = await fetch(
      `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400, // 갱신 주기 (초 단위)
        },
      }
    );
    if (!championsRes.ok || !championsRes)
      throw new Error("챔피언 목록을 불러오는데 실패했습니다");

    const championData = await championsRes.json();
    const hero = Object.values(championData.data) as Champion[];
    // console.log(hero[0].name);
    return hero;
  } catch (error) {
    console.error("fetchChampions api호출 실패", error);
    throw new Error("챔피언 목록 정보를 가져오지 못했습니다");
  }
};

export const fetchChampionsDetail = async ( id: string ): Promise<ChampionDetail> => {
  try {
    const latestVersion = await fetchVersion();

    // 챔피언 상세정보 api
    const championDetailRes = await fetch(
      `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`);
      
    if (!championDetailRes)
      throw new Error("챔피언 목록을 불러오는데 실패했습니다");

    const championDetailData = await championDetailRes.json();
    return championDetailData.data;
  } catch (error) {
    console.error("championDetailData api호출 실패", error);
    throw new Error("챔피언 상세 정보를 가져오지 못했습니다");
  }
};

export const fetchItem = async (): Promise<Item[]> => {
  try {
    const latestVersion = await fetchVersion();

    //아이템 목록 api
    const itemRes = await fetch(
      `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/item.json`
    );

    if (!itemRes) throw new Error("아이템 목록을 불러오는데 실패했습니다");

    const itemData = await itemRes.json();
    const items = Object.values(itemData.data) as Item[];
    // console.log(items[1])
    return items;
  } catch (error) {
    console.error("itemData api호출 실패", error);
    throw new Error("아이템 정보를 가져오지 못했습니다");
  }
};

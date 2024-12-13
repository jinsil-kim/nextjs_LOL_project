import { ChampionRotation } from "@/types/championRotation";
import { fetchChampions } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API Key is missing." }, { status: 500 });
  }

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    const data: ChampionRotation = await response.json();
    const champions = await fetchChampions();
    const rotationChampion = champions.filter((ro) =>
      data.freeChampionIds.includes(Number(ro.key))
    );
    console.log(rotationChampion)
    return NextResponse.json(rotationChampion);
  } catch (error) {
    return NextResponse.json(error);
  }
}

import { BASE_URL } from "@/constants/api";
import { fetchChampions, fetchVersion } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";

export default async function Champions() {
  const champions = await fetchChampions();
  const latestVersion = await fetchVersion();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
      {champions.map((champ) => {
        return (
          <Link key={champ.id} href={`/champions/${champ.id}`}>
            <div>
              <img
                src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${champ.image.full}`}
                alt=""
              />
              <h1>{champ.id}</h1>
              <p>{champ.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

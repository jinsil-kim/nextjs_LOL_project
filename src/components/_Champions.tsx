import { BASE_URL } from "@/constants/api";
import { fetchVersion } from "@/utils/serverApi";
import React from "react";

export default async function Champions() {
  const champions = await fetchVersion();
  console.log("champions", champions);
  return (
    <div>
      {champions.map((champ) => {
        return (
          <div key={champ.id}>
            <img
              src={`${BASE_URL}/cdn/14.24.1/img/champion/${champ.image.full}`}
              alt=""
            />
            <h1>{champ.name}</h1>
            <p>{champ.title}</p>
          </div>
        );
      })}
    </div>
  );
}

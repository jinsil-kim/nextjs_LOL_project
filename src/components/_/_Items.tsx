import { BASE_URL } from "@/constants/api";
import { fetchItem, fetchVersion } from "@/utils/serverApi";
import React from "react";

export default async function Items() {
  const items = await fetchItem();
  const latestVersion = await fetchVersion();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={`${BASE_URL}/cdn/${latestVersion}/img/item/${item.image.full}`}
              alt={item.name}
            />
            <h1>{item.name}</h1>
            <p>{item.plaintext}</p>
          </div>
        );
      })}
    </div>
  );
}

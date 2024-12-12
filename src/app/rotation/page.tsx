"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ChampionRotation } from "@/types/championRotation";

export default function RotationPage() {
  const { data: items, isLoading } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      const data: ChampionRotation[] = await res.json();
      return data;
    },
  });
  console.log("items", items);

  if (isLoading) <>Loading...</>;

  return (
    <main>
      <h1>챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)</h1>
    </main>
  );
}

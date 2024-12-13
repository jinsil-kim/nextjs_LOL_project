"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "@/constants/api";
import { Champion } from "@/types/champions";
import { fetchVersion } from "@/utils/serverApi";
// import { fetchVersion } from "@/utils/serverApi";

export default function RotationPage() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const version = async () => {
      const latestVersion = await fetchVersion();
      setVersion(latestVersion);
    };
    version();
  }, []);

  //   const { data: version } = useQuery({
  //     queryKey: ["version"],
  //     queryFn: fetchVersion,
  //   });
  // console.log('la', version)

  const { data: items, isLoading } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      const data: Champion[] = await res.json();
      return data;
    },
  });
  // console.log("items", items);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <main>
      <h1>챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)</h1>
      {items?.map((item) => (
        <div key={item.id}>
          <Link href={`/champions/${item.id}`}>
            <img
              src={`${BASE_URL}/cdn/${version}/img/champion/${item.image.full}`}
              alt=""
            />
            <h2>{item.name}</h2>
            <p>{item.title}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}

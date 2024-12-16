"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Link from "next/link";
import { BASE_URL } from "@/constants/api";
import { Champion } from "@/types/champions";
import { fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
// import { fetchVersion } from "@/utils/serverApi";

export default function RotationPage() {
  // 버전정보
  // const [version, setVersion] = useState("");

  // useEffect(() => {
  //   const version = async () => {
  //     const latestVersion = await fetchVersion();
  //     setVersion(latestVersion);
  //   };
  //   version();
  // }, []);

  const { data: version, isPending: isVersionPending } = useQuery({
    queryKey: ["version"],
    queryFn: async () => await fetchVersion(),
  });
  console.log("la", version);

  // 로테이션 정보
  const { data: items, isPending: isChampionPending } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      const data: Champion[] = await res.json();
      return data;
    },
  });
  // console.log("items", items);

  if (isChampionPending || isVersionPending) {
    return (
      <div className="flex justify-center items-center text-6xl">
        Loading...
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-3xl sm:text-4xl font-bold text-center  mb-6">
        이번 주 챔피언 로테이션
        <br />
        <span className="text-lg text-gray-400">
          무료로 플레이 가능한 챔피언들을 만나보세요!
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items?.map((item) => (
          <Link
            key={item.id}
            href={`/champions/${item.id}`}
            className="group bg-slate-900 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >

            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src={`${BASE_URL}/cdn/${version}/img/champion/${item.image.full}`}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-100 group-hover:text-blue-600">
                {item.name}
              </h2>
              <p className="text-sm text-gray-300">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

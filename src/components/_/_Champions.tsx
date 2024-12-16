import { BASE_URL } from "@/constants/api";
import { fetchChampions, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Champions() {
  const champions = await fetchChampions();
  const latestVersion = await fetchVersion();

  return (
    <main>
      <h1 className="text-3xl sm:text-4xl font-bold text-center  mb-6">
        챔피언 목록
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {champions.map((champ) => {
          return (
            <Link
              className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              key={champ.id}
              href={`/champions/${champ.id}`}
            >
              {/* 카드 이미지 */}
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${champ.image.full}`}
                  alt={champ.id}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* 배경 어둡게 하기 위한 div */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 캐릭터 설명 */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h1 className="text-2xl font-semibold group-hover:text-red-600">
                    {champ.id}
                  </h1>
                  <p className="text-gray-300">{champ.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

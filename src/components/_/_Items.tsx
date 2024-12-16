import { BASE_URL } from "@/constants/api";
import { fetchItem, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

export default async function Items() {
  const items = await fetchItem();
  const latestVersion = await fetchVersion();

  return (
    <main>
      {/* 페이지 제목 */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center  mb-8">
        아이템 목록
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="group shadow-md rounded-lg overflow-hidden"
          >
            {/* 아이템 이미지 */}
            <div className="relative h-32 sm:h-36 md:h-40 flex justify-center items-center">
              <Image
                src={`${BASE_URL}/cdn/${latestVersion}/img/item/${item.image.full}`}
                alt={item.name}
                width={150}
                height={150}
              />
            </div>
            {/* 아이템 정보 */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center ">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 text-center mt-2">
                {item.plaintext || "설명 없음"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

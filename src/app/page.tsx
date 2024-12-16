import React from "react";
import Link from "next/link";
import Image from "next/image";
import rotationImg from "../asset/total.jpg";
import championImg from "../asset/Jinx_37.jpg";
import itemImg from "../asset/insidelogo.jpeg";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
        <div className="mt-[40px] flex flex-col justify-center gap-16  text-amber-500 text-2xl font-medium">
          <div className="flex flex-col justify-center gap-10">
            <Link
              href={"/champions"}
              className="flex flex-col justify-center items-center gap-5"
            >
              <Image
                src={championImg}
                alt="picture of champion list"
                width={500}
                height={500}
                placeholder="blur"
              />
              챔피언 목록보기
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-10 items-center ">
            <Link
              href={"/rotation"}
              className="flex flex-col justify-center items-center gap-5"
            >
              <Image
                src={rotationImg}
                alt="picture of rotation list"
                width={500}
                height={500}
                placeholder="blur"
              />
              금주 로테이션 확인
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <Link
              href={"/items"}
              className="flex flex-col justify-center items-center gap-5"
            >
              <Image
                src={itemImg}
                alt="picture of item list"
                width={500}
                height={500}
                placeholder="blur"
              />
              아이템 목록보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

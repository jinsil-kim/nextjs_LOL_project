// 챔피언 목록 페이지

import Champions from "@/components/_/_Champions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LOL Champions",
  description: "League of Legend's Champions",
};

export default async function ChampionsPage() {
  return <Champions />;
}

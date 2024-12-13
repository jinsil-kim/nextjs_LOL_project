import Champions from "@/components/_Champions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LOL Champions",
  description: "League of Legend's Champions",
};

export default async function ChapionsPage() {
  return <Champions />;
}

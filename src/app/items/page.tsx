import Items from "@/components/_/_Items";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LOL Items",
  description: "League of Legend's Items",
};

export default function ItemsPage() {
  return <Items />;
}

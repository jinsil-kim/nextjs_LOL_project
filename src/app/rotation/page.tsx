import { Metadata } from "next";
import Rotation from "./Rotation";
import React from "react";

export const metadata: Metadata = {
  title: "LOL Rotation",
  description: "League of Legend's Rotation",
};

export default function RotationPage() {
  return <Rotation />;
}

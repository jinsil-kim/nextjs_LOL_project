"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import React from "react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <FaRegLightbulb /> : <FaLightbulb />}
    </button>
  );
};

export default DarkMode;

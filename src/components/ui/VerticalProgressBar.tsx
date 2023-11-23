"use client";

import React, { useEffect, useState } from "react";

const VerticalProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const windowHeight = scrollHeight - clientHeight;
      const scrolled = (scrollTop / windowHeight) * 100;

      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 w-2.5 bg-white shadow-md rounded-md"
      style={{ height: `${progress}%` }}
    ></div>
  );
};

export default VerticalProgressBar;

"use client";
import { useState, useEffect } from "react";
import content from "@/data/content.json";

export default function WhyUs() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="p-4 bg-diagonal-stripes diagonal-bg h-[calc(100dvh)]">
      <div className="relative z-10">
        <div className="flex items-center p-4 text-white mb-4 max-w-6xl mx-auto">
          <p className="text-xs tracking-widest">02</p>
          <span className="h-[1px] w-[70px] bg-white mx-2"></span>
          <p className="text-xs tracking-widest">DLACZEGO WARTO?</p>
        </div>
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4">
          {content.whyUs.map((section, index) => (
            <div key={index} className="p-4 flex flex-col justify-between">
              <h2 className="text-2xl mb-2">{section.header}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

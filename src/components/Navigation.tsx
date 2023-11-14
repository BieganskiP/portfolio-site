"use client";

import { useState } from "react";

import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} />
    </>
  );
}

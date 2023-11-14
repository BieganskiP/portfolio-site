"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {!isMobile && <Nav />}
      {isMobile && <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />}
      <MobileNav isOpen={isOpen} />
    </>
  );
}

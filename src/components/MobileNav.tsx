import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [isRendered, setIsRendered] = useState<boolean>(isOpen);

  const navAnimation = useSpring({
    from: { transform: "translateX(100%)", pointerEvents: "none" },
    to: {
      transform: isOpen ? "translateX(0%)" : "translateX(100%)",
      pointerEvents: isOpen ? "auto" : "none",
    },
    config: { tension: 220, friction: 20 },
    onStart: () => {
      if (!isRendered) {
        setIsRendered(true);
      }
    },
    onRest: () => {
      if (!isOpen) {
        setIsRendered(false);
      }
    },
  });

  if (!isRendered) {
    return null;
  }

  return (
    <animated.div
      className="w-1/2 h-full fixed  right-0 bottom-0 z-10"
      style={navAnimation as any}
    >
      MobileNav
    </animated.div>
  );
}

import { useSpring, animated } from "@react-spring/web";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  const middleLineStyle = useSpring({
    transform: isOpen ? "translateX(100%)" : "translateX(0%)",
    opacity: isOpen ? 0 : 1,
    config: { tension: 220, friction: 20 },
  });

  return (
    <div
      className="flex justify-center items-center h-[40px] w-[40px] cursor-pointer z-20 sticky bg-red rounded-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`absolute w-[22px] h-[3px] bg-white transform transition-transform duration-500 ${
          isOpen ? "rotate-45" : "translate-y-2"
        }`}
      ></span>
      <animated.span
        className="absolute w-[22px] h-[3px] bg-white"
        style={middleLineStyle}
      ></animated.span>
      <span
        className={`absolute w-[22px] h-[3px] bg-white transform transition-transform duration-500 ${
          isOpen ? "-rotate-45" : "-translate-y-2"
        }`}
      ></span>
    </div>
  );
}

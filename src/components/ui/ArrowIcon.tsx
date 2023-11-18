interface ArrowIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  size = 50,
  color = "black",
  strokeWidth = 10,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 5 L45 25 L25 45 M5 25 H45"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default ArrowIcon;

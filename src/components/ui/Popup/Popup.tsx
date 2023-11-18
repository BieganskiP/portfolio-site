"use client";
import React, { useState, useRef, cloneElement } from "react";
import styles from "./Popup.module.css";

interface PopupProps {
  children: React.ReactElement; // Updated to ReactElement for cloning
  content: React.ReactNode;
  childClassName?: string; // Optional prop for child class
}

const Popup: React.FC<PopupProps> = ({ children, content, childClassName }) => {
  const [isHovering, setIsHovering] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const childWithClass = childClassName
    ? cloneElement(children, { className: childClassName })
    : children;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {childWithClass}
      {isHovering && (
        <div ref={popupRef} className={`${styles.popup} p-3 text-xs`}>
          {content}
        </div>
      )}
    </span>
  );
};

export default Popup;

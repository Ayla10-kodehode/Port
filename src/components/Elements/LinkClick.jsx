import { useState } from "react";

export const LinkClick= ({ href, text, active, setActive }) => {
  const handleClick = () => {
    setActive(href);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      style={{ color: active === href ? "#d40100" : "#2C2A3E"}}
    >
      {text}
    </a>
  );
};
import React from "react";

const Button = ({ setBullet, input, bullet, setInput }) => {
  return (
    <button
      onClick={() => {
        setBullet([...bullet, input]);
        setInput("");
      }}
    >
      +
    </button>
  );
};

export default Button;

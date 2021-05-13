import React from "react";

const Input = ({ onChange, input }) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={input}
    />
  );
};

export default Input;

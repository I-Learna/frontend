import React, { FC } from "react";

const InputLabel: FC<{ name: string; label: string }> = (props) => {
  return (
    <label
      htmlFor={props.name}
      className="block text-sm font-semibold text-customGray mb-1"
    >
      {props.label}
    </label>
  );
};

export default InputLabel;

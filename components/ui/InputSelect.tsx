"use client";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import { TiArrowSortedDown } from "react-icons/ti";

interface IProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  rules?: object;
}

const InputSelect: FC<IProps> = ({ name, label, options, rules }) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <div className="relative">
      <InputLabel label={label} name={name} />

      {/* Wrapper to control the dropdown */}
      <div className="relative">
        <select
          id={name}
          className="appearance-none w-full text-sm py-2 px-3 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light bg-white cursor-pointer"
          {...register(name, { ...rules })}
        >
          <option value="" disabled selected>
            Select an option
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="hover:bg-black"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <TiArrowSortedDown
          className="absolute right-3 top-2.5 transition-transform"
          size={16}
        />
      </div>

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputSelect;

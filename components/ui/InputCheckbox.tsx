"use client";

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import { FaCheck } from "react-icons/fa6";

interface IProps {
  name: string;
  label: string;
  rules?: object;
}

const InputCheckbox: FC<IProps> = ({ name, label, rules }) => {
  const { register, formState, watch } = useFormContext();
  const error = formState.errors[name];
  const isChecked = watch(name); // Watch checkbox state

  return (
    <div className="flex items-center gap-2">
      {/* Hidden checkbox input */}
      <input
        id={name}
        type="checkbox"
        className="hidden"
        {...register(name, rules)}
      />

      {/* Custom Checkbox */}
      <label
        htmlFor={name}
        className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all ${
          isChecked ? "bg-gray-900 border-gray-900" : "border-gray-500"
        }`}
      >
        {isChecked && <FaCheck className="w-4 h-4 text-white" />}
      </label>

      <InputLabel name={name} label={label} />
      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputCheckbox;

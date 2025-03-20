"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
  helperText?: string;
}

const InputText: FC<IProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name];

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <input
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        className="inputField"
        {...register(props.name, { ...props.rules })}
      />

      <p className="mt-1 text-sm text-accent font-semibold">{props.helperText}</p>

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputText;

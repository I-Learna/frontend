import React, { FC } from "react";

const InputError: FC<{ error: string | undefined }> = ({ error }) => {
  if (!error) return null;
  return <p className="text-error text-sm mt-1">{error}</p>;
};

export default InputError;

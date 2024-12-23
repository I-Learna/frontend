import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
}

const InputFile: FC<IProps> = (props) => {
  const { register, formState, setValue } = useFormContext();
  const error = formState.errors[props.name];

  // State to hold the file name
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Set the file name to the state
      setValue(props.name, file); // Set the file in the React Hook Form state
    } else {
      setFileName(null); // If no file is selected, reset the file name
      setValue(props.name, null); // Remove the file from the React Hook Form state
    }
  };

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <div className="relative border border-accent-light rounded-md p-2 cursor-pointer">
        <input
          type="file"
          accept=".pdf, .doc, .docx, .RTF"
          className="w-full opacity-0 absolute inset-0 cursor-pointer"
          {...register(props.name, { ...props.rules })}
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-center text-accent cursor-pointer">
          <FiUpload className="mr-2" />
          <span>{fileName || "Upload File"}</span>
        </div>
      </div>

      <p className="text-xs mt-1 text-customGray">
        Supported formats include PDF, DOC, DOCX, or RTF (max 20MB).
      </p>

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputFile;

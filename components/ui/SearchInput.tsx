import React, { FC } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput: FC<{ className?: string }> = (props) => {
  return (
    <div className={`relative ${props.className}`}>
      <input
        type="text"
        placeholder="Search for anything"
        className="w-full text-sm py-2 px-2 pr-8 border border-customGray rounded-full focus:outline-none font-normal pl-8"
      />

      <CiSearch className="absolute top-2 left-2 text-xl" />
    </div>
  );
};

export default SearchInput;

import React, { FC } from "react";
import { MdOutlineList } from "react-icons/md";
import { BsGrid3X2Gap } from "react-icons/bs";

interface IProps {
  horizontal: boolean;
  setHorizontal: (horizontal: boolean) => void;
}

const GridOptions: FC<IProps> = ({ horizontal, setHorizontal }) => {
  return (
    <div className="hidden xl:flex space-x-2 text-2xl">
      <button
        onClick={() => setHorizontal(false)}
        className={`${horizontal ? "text-gray-400" : "text-accent"}`}
      >
        <BsGrid3X2Gap />
      </button>
      <button
        onClick={() => setHorizontal(true)}
        className={`${horizontal ? "text-accent" : "text-gray-400"}`}
      >
        <MdOutlineList />
      </button>
    </div>
  );
};

export default GridOptions;

"use client";
import React, { FC } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileMenu: FC<IProps> = (props) => {
  const { isOpen, onClose, children } = props;
  const activeClass = isOpen ? "right-0" : "right-[-100vw]";
  const menuClass = `fixed top-0 w-screen  z-10 transition-all duration-300 shadow-lg ${activeClass}`;

  return (
    <div className={menuClass}>
      <div
        className="backdrop-blur-[3px] absolute z-[-1] top-0 left-0 w-full h-full"
        onClick={onClose}
      />

      <div className="w-[80vw] bg-white ml-auto h-screen overflow-y-auto">
        <div className="px-4 py-3 text-2xl border-b border-accent-light w-full">
          <button onClick={onClose}>
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default MobileMenu;

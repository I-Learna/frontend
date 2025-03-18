"use client";

import React, { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SidebarMenuProps {
  title: ReactNode;
  children: ReactNode;
}

const SidebarMenu = ({ title, children }: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Menu Toggle Button */}
      <button
        className="flex items-center gap-2 w-full py-3 px-6 rounded-lg text-gray-500"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <FiChevronDown className={`ms-auto transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Collapsible Section */}
      {isOpen && <div className="ms-6 space-y-1">{children}</div>}
    </div>
  );
};

export default SidebarMenu;

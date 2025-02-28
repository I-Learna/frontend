"use client";
import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { Menu, MenuItem, Button } from "@mui/material";
import sortOptions from "@/public/data/sortOptions.json";
import { IoIosArrowDown } from "react-icons/io";

import { usePathname } from "next/navigation";

const Sort = () => {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSort, setSelectedSort] = useState("Highest to Lowest Rate");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (sort?: string) => {
    if (sort) {
      setSelectedSort(sort);
    }
    setAnchorEl(null);
  };
  // Filter options based on the pathname
  const filteredSortOptions =
    pathname === "/blogs"
      ? sortOptions.filter((option) =>
          ["hlr", "lhr", "newest", "oldest"].includes(option.sortCode)
        )
      : sortOptions;

  return (
    <>
      {/* Button that opens the dropdown */}
      <button
        onClick={handleClick}
        className="block w-full border text-left border-gray-300 rounded-sm px-2 py-1 xl:border-none text-nowrap"
      >
        <span className="flex items-center space-x-1 text-sm font-semibold">
          <span>Sort by</span> <IoIosArrowDown className="w-5 h-5" />
        </span>
        <p className="text-xs text-gray-500">{selectedSort}</p>
      </button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "language-selector",
        }}
      >
        {filteredSortOptions.map((option) => (
          <MenuItem
            key={option.sortCode}
            onClick={() => handleClose(option.sortLabel)}
            selected={option.sortLabel === selectedSort}
          >
            {option.sortLabel}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Sort;

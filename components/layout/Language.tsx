"use client";
import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { Menu, MenuItem, Button } from "@mui/material";

const Language = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const open = Boolean(anchorEl);

  const languages = ["English (US)", "العربية"];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language?: string) => {
    if (language) {
      setSelectedLanguage(language);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Button that opens the dropdown */}
      <button
        onClick={handleClick}
        className="flex items-center space-x-1 text-inherit"
      >
        <TbWorld className="w-5 h-5 shrink-0" />
        <p>{selectedLanguage}</p>
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
        {languages.map((language) => (
          <MenuItem
            key={language}
            onClick={() => handleClose(language)}
            selected={language === selectedLanguage}
          >
            {language}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Language;

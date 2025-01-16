import { FC, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FilterCategories from "./FilterCategoryList";
import { IOnFiltersChange } from "./types";
import MobileMenu from "@/components/ui/MobileMenu";

interface IProps {
  onFiltersChange: IOnFiltersChange;
}

const MobileItemsFilter: FC<IProps> = ({ onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const activeClass = isOpen ? "right-0" : "right-[-100vw]";
  const menuClass = `fixed top-0 w-screen  z-10 transition-all duration-300 shadow-lg ${activeClass}`;

  return (
    <>
      <ShowFilters onOpen={openMenu} />

      <MobileMenu isOpen={isOpen} onClose={closeMenu}>
        <FilterCategories onFiltersChange={onFiltersChange} />
      </MobileMenu>
    </>
  );
};

const ShowFilters = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <button
      className="flex items-center gap-2 border p-2 rounded-sm justify-center w-full h-full"
      onClick={onOpen}
    >
      <IoFilterOutline />
      <span>Filters</span>
    </button>
  );
};

export default MobileItemsFilter;

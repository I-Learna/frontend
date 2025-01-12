import { FC, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FilterCategories from "./FilterCategoryList";
import { IOnFiltersChange } from "./types";

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

      <div className={menuClass}>
        <div
          className="backdrop-blur-[3px] absolute z-[-1] top-0 left-0 w-full h-full"
          onClick={closeMenu}
        />

        <div className="w-[80vw] bg-white ml-auto h-screen overflow-y-auto">
          <div className="px-4 py-3 text-2xl border-b border-accent-light w-full">
            <button onClick={closeMenu}>
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>

          <FilterCategories onFiltersChange={onFiltersChange} />
        </div>
      </div>
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

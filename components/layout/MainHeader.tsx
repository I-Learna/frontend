"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Logo from "./Logo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import MobileMenu from "../ui/MobileMenu";
import MainHeaderActions from "./MainHeaderActions";

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // To close the mobile menu when navigating
  const pathname = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="flex items-center space-x-10 px-6 py-4 bg-white shadow-sm z-10 relative">
      <MobileMenuToggler onClick={() => setIsMenuOpen(!isMenuOpen)} />

      <Logo className="w-28" />

      <div className="hidden lg:block ml-5 w-full">
        <div className="flex items-center">
          <NavBar />

          <MainHeaderActions />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <NavBar />
      </MobileMenu>
    </header>
  );
};

// Mobile Menu Toggler
const MobileMenuToggler: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="lg:hidden" onClick={onClick}>
      <GrMenu className="h-6 w-6" />
    </button>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="text-primary flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10">
      <NavLink href="/" label="home" />
      <Courses />
      <NavLink href="/books" label="books" />
      <NavLink href="/about-us" label="about" />
      <NavLink href="/contact" label="contact" />
    </nav>
  );
};

const NavLink: FC<{ href: string; label: string }> = (props) => {
  const { href, label } = props;
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:text-blue-600 capitalize ${
        isActive ? "navLink-active" : ""
      }`}
    >
      {label}
    </Link>
  );
};

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const pathname = usePathname();
  const isActive = pathname.includes("courses");

  return (
    <div className="relative group">
      <button
        className={`flex items-center space-x-1 text-gray-700 hover:text-gray-900 ${
          isActive ? "navLink-active" : ""
        }`}
        onClick={toggle}
      >
        <span>Courses</span>

        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      <div className="absolute left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
        <Link
          href="/courses/recorded"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Recorded Courses
        </Link>

        <Link
          href="/courses/live"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Live Courses
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;

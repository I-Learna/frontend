"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import Logo from "./Logo";

const MainHeader: React.FC = () => {
  return (
    <header className="flex items-center space-x-10 px-6 py-4 bg-white shadow-sm">
      <Logo className="w-28" />
      <NavBar />
    </header>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center space-x-10 text-sm text-primary">
      <NavLink href="/" label="home" />
      <NavLink href="/courses/recorded" label="courses" />
      <NavLink href="/about-us" label="about" />
      <NavLink href="/contact" label="contact" />
    </nav>
  );
};

const NavLink: FC<{ href: string; label: string }> = (props) => {
  const { href, label } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

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

export default MainHeader;

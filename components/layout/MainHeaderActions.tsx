"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FiShoppingCart } from "react-icons/fi";
import InputSearch from "../ui/InputSearch";

const MainHeaderActions = () => {
  return (
    <div className="flex items-center space-x-4 ml-auto">
      <SearchAction />
      <CartActions />
      <ProfileActions />
    </div>
  );
};

const SearchAction: FC = () => {
  return <InputSearch className="w-72" />;
};

const CartActions: FC = () => {
  return (
    <button className="shrink-0">
      <Link href="/cart">
        <FiShoppingCart className="text-2xl text-primary" />
      </Link>
    </button>
  );
};

const ProfileActions: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(closeMenu, [pathname]);

  const clickOutsideRef = useDetectClickOutside({ onTriggered: closeMenu });

  return (
    <div className="shrink-0">
      <button onClick={toggleMenu}>
        <Image
          width={1024}
          height={1024}
          src="/images/avatar.jfif"
          alt="user avatar"
          className="w-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-[105%] right-5 drop-shadow-lg w-80 bg-white rounded-md"
          ref={clickOutsideRef}
        >
          <div className="p-4 border-b">
            <p className="text-accent text-sm font-semibold">Hello,</p>
            <p className="text-sm font-semibold text-primary">Ahmed Mohamed</p>

            <button className="w-full mt-3 btn btn-accent">
              <Link href="/profile">View and Edit Your Profile</Link>
            </button>
          </div>

          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="/my-courses">My Courses</Link>
          </div>
          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="/cart">My Cart</Link>
          </div>
          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="/wishlist">Wishlist</Link>
          </div>
          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="#">Payment Methods</Link>
          </div>
          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="#">Become a Freelancer</Link>
          </div>
          <div className="p-4 border-b text-sm text-primary font-normal">
            <Link href="#">Help and Support</Link>
          </div>
          <div className="p-4 text-sm text-primary font-normal">
            <Link href="#">Log out</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeaderActions;

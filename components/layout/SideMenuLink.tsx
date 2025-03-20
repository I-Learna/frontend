"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface IProps {
  href: string;
  children: ReactNode;
}

const SideMenuLink: FC<IProps> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      href={props.href}
      className={clsx("flex items-center gap-2 w-full py-3 px-6 rounded-lg", {
        "bg-accent-light text-white": isActive,
        "text-gray-500": !isActive,
      })}
    >
      {props.children}
    </Link>
  );
};

export default SideMenuLink;

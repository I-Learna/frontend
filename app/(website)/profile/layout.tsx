"use client";
import ProfileNav from "@/components/layout/ProfileNav";
import Image from "next/image";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <main className="px-6 py-2 lg:flex lg:gap-5 lg:py-0">
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      <section className="w-full py-6 2xl:py-16 2xl:pl-16 2xl:pr-28">
        {children}
      </section>
    </main>
  );
};

const DesktopNav = () => {
  return (
    <div className="border-r border-l min-w-80">
      <div className="border-t border-b p-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/avatar.jfif"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />

          <p className="font-semibold">Mohamed Ahmed</p>
        </div>
      </div>

      <div className="p-5">
        <ProfileNav />
      </div>
    </div>
  );
};

export default Layout;

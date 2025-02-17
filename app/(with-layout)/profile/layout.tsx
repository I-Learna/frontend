"use client";
import MobileMenu from "@/components/ui/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <main className="px-6 py-2 lg:flex lg:gap-5 lg:py-0">
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      {/* <div className="lg:hiddn">
        <ProfileMobileNav />
      </div> */}

      <section className="w-full py-4">{children}</section>
    </main>
  );
};

// export const ProfileMobileNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // To close the mobile menu when navigating
//   const pathname = usePathname();
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname]);

//   return (
//     <div>
//       <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
//         <GrMenu className="h-6 w-6" />
//       </button>

//       <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
//         <Nav />
//       </MobileMenu>
//     </div>
//   );
// };

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

export const ProfileNav = () => {
  const pathname = usePathname();

  const isActive = (url: string) => {
    const activeClass = "bg-accent-lighter border-l-4 border-accent";
    if (pathname.endsWith(url)) {
      return activeClass;
    } else {
      return "border-l-4 border-transparent";
    }
  };

  return (
    <section className="flex flex-col items-stretch space-y-4">
      <Link href="/profile" className={`rounded-md ${isActive("/profile")}`}>
        <button className="flex items-center gap-3 px-4 py-2">
          <FaRegUser />
          <span>Your Profile</span>
        </button>
      </Link>

      <Link
        href="/profile/payment-methods"
        className={`rounded-md ${isActive("/payment-methods")}`}
      >
        <button className="flex items-center gap-3 px-4 py-2">
          <MdPayment />
          <span>Payment Methods</span>
        </button>
      </Link>

      <Link
        href="/profile/change-password"
        className={`rounded-md ${isActive("/change-password")}`}
      >
        <button className="flex items-center gap-3 px-4 py-2">
          <CiLock />
          <span>Change Password</span>
        </button>
      </Link>

      <Link
        href="/profile/delete"
        className={`rounded-md ${isActive("/delete")}`}
      >
        <button className="flex items-center gap-3 px-4 py-2 text-red-500">
          <RiDeleteBinLine />
          <span>Delete Account</span>
        </button>
      </Link>
    </section>
  );
};

export default Layout;

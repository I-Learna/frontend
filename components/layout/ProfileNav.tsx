"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const ProfileNav = () => {
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
        href="/profile/privacy"
        className={`rounded-md ${isActive("/privacy")}`}
      >
        <button className="flex items-center gap-3 px-4 py-2">
          <IoShieldCheckmarkOutline />
          <span>Privacy</span>
        </button>
      </Link>

      <Link
        href="/profile/become-freelancer"
        className={`rounded-md ${isActive("/become-freelancer")}`}
      >
        <button className="flex items-center gap-3 px-4 py-2">
          <LiaIdCardAltSolid />
          <span>Become a Freelancer</span>
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

export default ProfileNav;

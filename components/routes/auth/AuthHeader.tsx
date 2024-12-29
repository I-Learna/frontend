import Language from "@/components/layout/Language";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/brand/icon-logo.png"
          width={1500}
          height={1500}
          alt="Icon Logo"
          className="w-12 h-12 shrink-0"
        />
      </Link>
      <Language />
    </div>
  );
};

export default AuthHeader;

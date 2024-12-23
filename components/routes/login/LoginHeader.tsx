import Language from "@/components/layout/Language";
import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/images/brand/icon-logo.png"
        width={1500}
        height={1500}
        alt="Icon Logo"
        className="w-12 h-12 shrink-0"
      />
      <Language />
    </div>
  );
};

export default LoginHeader;

import Link from "next/link";
import React from "react";

const AuthFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-customGray">
      <p>@2025 ilearna, All rights reserved</p>

      <div className="flex space-x-3 items-center">
        <Link href="#">Privacy Policy</Link>
        <span className="text-xl">|</span>
        <Link href="#">Terms of Service</Link>
      </div>
    </div>
  );
};

export default AuthFooter;

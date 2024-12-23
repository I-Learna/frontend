"use client";

import AuthImage from "@/components/routes/login/AuthImage";
import LoginFooter from "@/components/routes/login/LoginFooter";
import LoginHeader from "@/components/routes/login/LoginHeader";
import { useState } from "react";

const LoginPage = () => {
  return (
    <div className="flex space-x-5 p-3 h-screen">
      <div className="w-full px-2 py-3 md:w-[70%] md:mx-auto lg:w-1/2 lg:px-28 lg:py-3 flex flex-col">
        <LoginHeader />
        <h1>Authentication Form</h1>
        <LoginFooter />
      </div>

      <div className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </div>
    </div>
  );
};

export default LoginPage;

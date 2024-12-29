import AuthImage from "@/components/routes/auth/AuthImage";
import AuthFooter from "@/components/routes/auth/AuthFooter";
import AuthHeader from "@/components/routes/auth/AuthHeader";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="lg:flex space-x-5 p-3 h-screen">
      <section className="flex flex-col w-full h-full md:w-[70%] lg:w-1/2 md:mx-auto p-3 xl:px-28 xl:py-3">
        <AuthHeader />

        {children}

        <div className="mt-auto">
          <AuthFooter />
        </div>
      </section>

      <section className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </section>
    </main>
  );
};

export default AuthLayout;

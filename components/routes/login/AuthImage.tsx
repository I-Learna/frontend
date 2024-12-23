import Image from "next/image";
import React from "react";

const AuthImage = () => {
  return (
    <div className="h-full w-[90%] m-auto relative rounded-2xl overflow-hidden">
      <Image src="/images/auth-pic.webp" fill alt="login image" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute bottom-5 p-5 m-8 text-2xl text-justify font-semibold text-white">
        <p>
          Empowering professionals and learners with a seamless platform to gain
          knowledge, connect with experts, and fuel their career growth!
        </p>
      </div>
    </div>
  );
};

export default AuthImage;

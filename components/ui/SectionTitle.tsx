import Image from "next/image";
import React, { FC, ReactNode } from "react";

const SectionTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-accent text-4xl font-semibold relative max-w-max leading-10">
      {children}

      <Image
        src="/images/section-title.png"
        alt="section title"
        width={310}
        height={26}
        className="w-1/2 absolute top-full right-1/4 z-[-1]"
      />
    </h1>
  );
};

export default SectionTitle;

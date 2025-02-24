import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  title: string;
  pathName: string;
  imgSrc: string;
  bgClass: string;
}

const PageBanner: FC<IProps> = ({ title, pathName, imgSrc, bgClass }) => {
  return (
    <div
      className={`${bgClass} mt-5 rounded-lg p-5 flex flex-col-reverse 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:mx-auto max-w-7xl`}
    >
      <div className="text-gray-800 space-y-3">
        <h2 className="font-semibold text-sm 2xl:text-lg">{pathName}</h2>
        <h1 className="text-lg font-semibold 2xl:text-5xl">{title}</h1>
      </div>

      <Image
        src={imgSrc}
        alt="page banner"
        className="m-auto 2xl:m-0 shrink-0 h-[350px] w-[350px]"
        width={350}
        height={350}
      />
    </div>
  );
};

export default PageBanner;

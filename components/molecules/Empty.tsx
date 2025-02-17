import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import React, { FC } from "react";

interface IProps {
  message: string;
  imageSrc?: string;
  targetDesc?: string;
  href?: string;
}

const Empty: FC<IProps> = (props) => {
  const src = props.imageSrc ?? "/images/empty.png";

  return (
    <div className="flex flex-col justify-cener items-center space-y-4 py-4">
      <Image src={src} alt="Empty" width={298} height={237} />

      <p className="font-semibold text-customGray">{props.message}</p>

      {props.href && (
        <Link
          href="/courses/live"
          className="text-accent hover:text-accent-dark transition duration-300 text-xl font-semibold flex items-center"
        >
          {props.targetDesc} <GoArrowUpRight className="text-3xl" />
        </Link>
      )}
    </div>
  );
};

export default Empty;

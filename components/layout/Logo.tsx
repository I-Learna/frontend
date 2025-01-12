import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  blue?: boolean;
  white?: boolean;
  dark?: boolean;
  className?: string;
}

const Logo: FC<IProps> = (props) => {
  const { blue, white, dark, className } = props;

  // Determine the logo details based on props
  const getLogoDetails = () => {
    if (blue) {
      return {
        src: "/images/brand/blue-logo.png",
        width: 1248,
        height: 388,
        alt: "Blue Logo",
      };
    }
    if (white) {
      return {
        src: "/images/brand/white-logo.png",
        width: 1266,
        height: 399,
        alt: "White Logo",
      };
    }
    if (dark) {
      return {
        src: "/images/brand/dark-logo.png",
        width: 1237,
        height: 386,
        alt: "Dark Logo",
      };
    }
    // Default to blue logo if none is specified
    return {
      src: "/images/brand/blue-logo.png",
      width: 1248,
      height: 388,
      alt: "Default Blue Logo",
    };
  };

  const { src, width, height, alt } = getLogoDetails();

  return (
    <Link href="/">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    </Link>
  );
};

export default Logo;

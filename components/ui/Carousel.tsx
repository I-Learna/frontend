"use client";
import React, { FC, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

type IProps = {
  settings?: Settings;
  children: ReactNode;
};

const Carousel: FC<IProps> = (props) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    ...props.settings,
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default Carousel;

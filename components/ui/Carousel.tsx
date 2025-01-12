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
    centerMode: true,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    ...props.settings,
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {props.children}
        {/* {items.map((item) => (
          <div key={item.id} className="p-4">
            <div className="h-64 flex items-center justify-center bg-blue-500 text-white text-xl">
              {item.content}
            </div>
          </div>
        ))} */}
      </Slider>
    </div>
  );
};

export default Carousel;

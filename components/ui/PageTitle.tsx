import React, { FC } from "react";

const PageTitle: FC<{ children: string }> = (props) => {
  return (
    <h1
      className="text-4xl font-bold text-primary capitalize relative after:content-[''] after:absolute after:z-[-1] after:h-[3rem] after:bg-warning
     after:w-[100%] after:left-[-50%] after:bottom-0 leading-[3rem]"
    >
      {props.children}
    </h1>
  );
};

export default PageTitle;

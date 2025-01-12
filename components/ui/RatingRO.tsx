"use client";
import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Rating from "react-rating";
const ReactRating = Rating as React.ElementType;

type props = {
  rating: number;
};

const RatingRO = (props: props) => {
  const { rating } = props;
  return (
    <IconContext.Provider value={{ color: "#fed900" }}>
      <ReactRating
        start={0}
        stop={5}
        step={1}
        fractions={10}
        readonly
        initialRating={rating}
        onClick={() => {}}
        emptySymbol={<BsStar />}
        // eslint-disable-next-line react/jsx-key
        fullSymbol={[<BsStarFill />]}
      />
    </IconContext.Provider>
  );
};

export default RatingRO;

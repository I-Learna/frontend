"use client";
import React from "react";
import ItemCard from "./ItemCard";
import { IItem } from "@/types/api/responses/Items";

interface IProps {
  items: IItem[];
  horizontal: boolean;
}

const ItemsList = ({ items, horizontal }: IProps) => {
  return (
    <div
      className={`grid grid-cols-1  gap-4 ${
        horizontal ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          title={item.title}
          duration={item?.duration || ""}
          durationDesc={item?.durationDesc || ""}
          image={item.image}
          rating={item?.rating || 0}
          price={item?.price || ""}
          oldPrice={item.oldPrice}
          description={item.description}
          tags={item.tags || [""]}
          author={item.author}
          createdAt={item.createdAt || ""}
          horizontal={horizontal}
        />
      ))}
    </div>
  );
};

export default ItemsList;

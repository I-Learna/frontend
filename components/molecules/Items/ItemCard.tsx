"use client";
import RatingRO from "@/components/ui/RatingRO";
import { IItemCardAuthor } from "@/types/api/responses/Items";
import { encrypt } from "@/utils/Cryptojs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import { BiBookAlt } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";

interface ItemCardProps {
  id: string;
  image: string;
  rating: number;
  title: string;
  price: string;
  oldPrice?: string;
  duration: string;
  durationDesc: string;
  description: string;
  tags?: string[];
  author?: IItemCardAuthor;
  horizontal?: boolean;
}

const ItemCard: FC<ItemCardProps> = (props) => {
  const { horizontal } = props;
  if (horizontal) {
    return <ItemCardHorizontal {...props} />;
  }
  return <ItemCardVertical {...props} />;
};

const ItemCardVertical: FC<ItemCardProps> = (props) => {
  const { id, image, rating, title, price, oldPrice } = props;
  const { duration, durationDesc, description, tags, author } = props;

  const router = useRouter();
  const pathname = usePathname();
  const URL = `${pathname}/${encrypt(id)}`;
  const navigate = () => router.push(URL);

  return (
    <div
      className="border border-accent-light rounded-md cursor-pointer"
      onClick={navigate}
    >
      <div className="relative w-full h-56">
        <Image className="object-cover" src={image} alt={title} fill />

        {tags && (
          <div className="absolute top-3 left-3 flex flex-col space-y-3">
            {tags.map((tag) => (
              <p className="bg-accent text-white py-1 px-5 rounded-md">{tag}</p>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center text-gray-500 capitalize text-xs">
          <p className="flex items-center gap-1">
            <CgSandClock />
            {duration}
          </p>
          <p className="flex items-center gap-1">
            <BiBookAlt />
            {durationDesc}
          </p>
        </div>

        <p className="text-sm line-clamp-1 text-gray-500 capitalize">
          {description}
        </p>

        <h3 className="text-lg font-bold capitalize text-primary">{title}</h3>

        <div className="flex items-center gap-3 text-lg font-semibold">
          <p className="text-accent">${price}</p>
          <p className="text-gray-500 line-through">${oldPrice}</p>
        </div>

        <div className="flex items-center justify-between">
          {author && (
            <div className="flex items-center gap-2">
              <Image
                src={author.image}
                alt={author.name}
                width={30}
                height={30}
                className="rounded-full"
              />

              <p className="font-semibold text-customGray">{author.name}</p>
            </div>
          )}

          <p className="ml-auto text-xs text-gray-500">
            ({rating}) <RatingRO rating={rating} />
          </p>
        </div>
      </div>
    </div>
  );
};

const ItemCardHorizontal: FC<ItemCardProps> = (props) => {
  const { image, rating, title, price, oldPrice } = props;
  const { duration, durationDesc, description, tags, author } = props;

  return (
    <div className="border border-accent-light rounded-md flex">
      <div className="relative w-1/3 h-56">
        <Image className="object-cover" src={image} alt={title} fill />

        {tags && (
          <div className="absolute top-3 left-3 flex flex-col space-y-3">
            {tags.map((tag) => (
              <p className="bg-accent text-white py-1 px-5 rounded-md">{tag}</p>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 w-2/3 flex flex-col justify-between">
        <div className="flex justify-between items-center text-gray-500 capitalize text-xs">
          <p className="flex items-center gap-1">
            <CgSandClock />
            {duration}
          </p>
          <p className="flex items-center gap-1">
            <BiBookAlt />
            {durationDesc}
          </p>
        </div>

        <p className="text-sm line-clamp-1 text-gray-500 capitalize">
          {description}
        </p>

        <h3 className="text-lg font-bold capitalize text-primary">{title}</h3>

        <div className="flex items-center gap-3 text-lg font-semibold">
          <p className="text-accent">${price}</p>
          <p className="text-gray-500 line-through">${oldPrice}</p>
        </div>

        <div className="flex items-center justify-between">
          {author && (
            <div className="flex items-center gap-2">
              <Image
                src={author.image}
                alt={author.name}
                width={30}
                height={30}
                className="rounded-full"
              />

              <p className="font-semibold text-customGray">{author.name}</p>
            </div>
          )}

          <p className="ml-auto text-xs text-gray-500">
            ({rating}) <RatingRO rating={rating} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

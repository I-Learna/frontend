import Image from "next/image";
import React, { FC } from "react";

const ReviewMessage: FC<{
  review: { avatar: string; name: string; review: string };
}> = ({ review }) => {
  return (
    <div className="px-8 py-12 bg-gray-100 rounded-lg space-y-5">
      <div className="flex items-center space-x-3">
        <Image
          src={review.avatar}
          height={50}
          width={50}
          alt="user avatar"
          className="rounded-full"
        />
        <h3 className="text-lg">{review.name}</h3>
      </div>

      <p className="font-light">{review.review}</p>
    </div>
  );
};

export default ReviewMessage;

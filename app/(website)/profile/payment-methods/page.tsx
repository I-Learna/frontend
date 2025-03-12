import Empty from "@/components/molecules/Empty";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-4xl m-auto">
      <h2 className="text-xl font-semibold">Payment Methods</h2>

      <Empty
        message="You have no payment methods"
        imageSrc="/images/icons/noCards.png"
      />
    </div>
  );
};

export default Page;

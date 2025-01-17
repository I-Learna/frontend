import { getLiveCourseDetails } from "@/services/itemsServices";
import { decrypt } from "@/utils/Cryptojs";
import React, { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const itemId = decrypt(params.id);
  const details = await getLiveCourseDetails(itemId);

  return <main className="p-4">Live Course ID : {itemId}</main>;
};

export default Page;

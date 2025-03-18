import { getAdminCoursesDetails } from "@/services/adminServices";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  return (
    <main className="p-4">
      <div className="max-w-3xl m-auto">
        <h2 className="text-primary text-2xl font-semibold mb-4">Single Instructor Details</h2>
      </div>
    </main>
  );
};

export default Page;

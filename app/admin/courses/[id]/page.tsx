import AddModule from "@/components/routes/admin/AddModule";
import CourseModule from "@/components/routes/admin/CourseModule";
import { getAdminCoursesDetails } from "@/services/adminServices";
import { FC } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { v4 } from "uuid";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const details = await getAdminCoursesDetails();

  return (
    <main className="p-4">
      <div className="max-w-3xl m-auto">
        <h2 className="text-primary text-2xl font-semibold mb-4">Course Modules & Content</h2>

        <AddModule />
        <div className="space-y-6">
          {details.modules.map((module) => (
            <CourseModule key={v4()} details={module} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

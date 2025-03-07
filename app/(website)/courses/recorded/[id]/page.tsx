import ItemCard from "@/components/molecules/Items/ItemCard";
import CourseHeader from "@/components/routes/course-details/CourseHeader";
import CourseModules from "@/components/routes/course-details/CourseModules";
import CourseOverview from "@/components/routes/course-details/CourseOverview";
import CourseReviews from "@/components/routes/course-details/CourseReviews";
import CourseTabs from "@/components/routes/course-details/CourseTabs";
import { getRecordedCourseDetails } from "@/services/itemsServices";
import { decrypt } from "@/utils/Cryptojs";
import Link from "next/link";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const itemId = decrypt(params.id);
  const details = await getRecordedCourseDetails(itemId);

  return (
    <main className="p-4">
      <CourseHeader basicInfo={details.basicInfo} author={details.author} />

      <CourseTabs />

      <CourseOverview overview={details.overview} />

      <CourseModules modules={details.modules} />

      <CourseReviews reviews={details.reviews} />

      <section className="mt-16" id="instructor">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Instructor Courses</h2>

          <Link href="#" className="text-accent font-semibold">
            View all
          </Link>
        </div>

        <div className="flex flex-col 2xl:flex-row gap-y-5 justify-around mt-8">
          {details.author.courses.map((course) => (
            <ItemCard
              key={course.id}
              id={course.id}
              title={course.title}
              duration={course.duration}
              durationDesc={course.durationDesc}
              image={course.image}
              rating={course.rating}
              price={course.price}
              oldPrice={course.oldPrice}
              description={course.description}
              tags={course.tags}
              author={course.author}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;

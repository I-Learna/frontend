import ItemCard from "@/components/molecules/Items/ItemCard";
import CourseHeader from "@/components/routes/course-details/CourseHeader";
import CourseModules from "@/components/routes/course-details/CourseModules";
import CourseOverview from "@/components/routes/course-details/CourseOverview";
import CourseReviews from "@/components/routes/course-details/CourseReviews";
import CourseTabs from "@/components/routes/course-details/CourseTabs";
import RatingRO from "@/components/ui/RatingRO";
import { getRecordedCourseDetails } from "@/services/itemsServices";
import { decrypt } from "@/utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCheck, FaRegHeart } from "react-icons/fa6";
import { IoNewspaperOutline, IoStar } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { v4 } from "uuid";

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

      <section className="mt-16">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Instructor Courses</h2>

          <Link href="#" className="text-accent font-semibold">
            View all
          </Link>
        </div>

        <div className="flex justify-around mt-8">
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

import ProgressBar from "@/components/ui/ProgressBar";
import RatingRO from "@/components/ui/RatingRO";
import { ICourseReviews } from "@/types/api/responses/IGetCourseDetails";
import React, { FC } from "react";
import { v4 } from "uuid";

const CourseReviews: FC<{ reviews: ICourseReviews }> = ({ reviews }) => {
  return (
    <section className="mt-16" id="reviews">
      <h2 className="text-2xl font-semibold">Learner reviews</h2>

      <div className="mt-8 flex">
        <div className="w-1/2">
          <div className="p-10">
            <p className="text-gray-400">Reviews</p>
            <p className="text-4xl font-extrabold mt-3">
              {reviews.overview.rating}
            </p>
            <p className="text-2xl mt-3">
              <RatingRO rating={reviews.overview.rating} />
            </p>

            <p className="mt-2 text-gray-400">
              ({reviews.overview.totalReviews} Reviews)
            </p>

            <div className="space-y-3 mt-3">
              <div className="flex items-center gap-2 justify-between">
                <p>5 Stars</p>
                <div className="w-[90%]">
                  <ProgressBar
                    rating={
                      (reviews.overview.five / reviews.overview.totalReviews) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>4 Stars</p>
                <div className="w-[90%]">
                  <ProgressBar
                    rating={
                      (reviews.overview.four / reviews.overview.totalReviews) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>3 Stars</p>
                <div className="w-[90%]">
                  <ProgressBar
                    rating={
                      (reviews.overview.three / reviews.overview.totalReviews) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>2 Stars</p>
                <div className="w-[90%]">
                  <ProgressBar
                    rating={
                      (reviews.overview.two / reviews.overview.totalReviews) *
                      100
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>1 Star</p>
                <div className="w-[90%]">
                  <ProgressBar
                    rating={
                      (reviews.overview.one / reviews.overview.totalReviews) *
                      100
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          {reviews.reviewers.map((reviewer) => (
            <div key={v4()} className="p-4">
              <p className="text-gray-400 text-xs">{reviewer.date}</p>

              <div className="flex justify-between items-center">
                <p className="text-accent">{reviewer.name}</p>
                <RatingRO rating={reviewer.rating} />
              </div>

              <p className="text-gray-500">{reviewer.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseReviews;

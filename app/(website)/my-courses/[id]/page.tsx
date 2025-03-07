"use client";
import LoadingLayer from "@/components/layout/LoadingLayer";
import ModuleList from "@/components/routes/my-courses/ModuleList";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { getMyCourseDetails } from "@/services/userServices";
import {
  MyCourse,
  MyCourseLesson,
  MyCourseModule,
} from "@/types/api/responses/IGetMyCourseDetails";
import { decrypt } from "@/utils/Cryptojs";
import React, { FC, useEffect, useState } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const itemId = decrypt(params.id);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [courseDetails, setCourseDetails] = useState<MyCourse | null>();
  const [modules, setModules] = useState<MyCourseModule[] | null>();
  const [lesson, setLesson] = useState<Partial<MyCourseLesson> | null>();

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true);
      const details = await getMyCourseDetails(itemId);

      if (details) {
        setCourseDetails(details);
        setModules(details.modules);
        setLesson(details.lastLessonWatched);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }

    getDetails();
  }, []);

  const selectLesson = (lesson: Partial<MyCourseLesson>) => setLesson(lesson);

  if (isLoading) return <LoadingLayer />;

  if (!courseDetails || !modules || !lesson) {
    return (
      <section className="p-5">
        <h3 className="text-xl text-red-500">
          Couldn't get the data, please try again later!
        </h3>
      </section>
    );
  }

  return (
    <div className="p-5">
      <div className="flex justify-between gap-5">
        <section>
          <div className="h-[30rem] mb-5 rounded-xl overflow-hidden">
            <VideoPlayer url={lesson.videoURL} />
          </div>

          <h2 className="text-2xl font-semibold">{lesson?.title}</h2>
          <p className="text-sm text-gray-500">
            {courseDetails.author.name} {courseDetails.author.title}
          </p>

          <p className="mt-3">{lesson?.overview}</p>
        </section>

        <ModuleList modules={modules} selectLesson={selectLesson} />
      </div>
    </div>
  );
};

export default Page;

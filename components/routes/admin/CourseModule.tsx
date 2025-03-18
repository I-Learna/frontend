"use client";

import InputText from "@/components/ui/InputText";
import InputTextArea from "@/components/ui/InputTextArea";
import { ModuleDetails } from "@/types/api/responses/IGetAdminCourseDetails";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CourseLesson from "./CourseLesson";
import { v4 } from "uuid";
import { RiDeleteBinLine } from "react-icons/ri";
import AddLesson from "./AddLesson";

interface IProps {
  details?: ModuleDetails;
}

const CourseModule: FC<IProps> = (props) => {
  const formMethods = useForm<ModuleDetails>({
    defaultValues: props.details,
  });
  const { handleSubmit } = formMethods;
  const onSubmit = (data: any) => {};

  return (
    <div className="bg-gray-50 border m-auto rounded-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-accent text-2xl font-semibold">{props.details?.title ?? "New Module"}</h3>
        {props.details && <RiDeleteBinLine className="text-red-500 text-2xl" />}
      </div>
      <section className="space-y-4 p-3 border-2 rounded-lg mb-4">
        <FormProvider {...formMethods}>
          <InputText name="title" label="Module Name" placeholder="Module Name" />

          <InputTextArea
            name="desc"
            label="Module Description"
            placeholder="Write a short summary (e.g., Learn advanced refining methods through real-world case studies)."
          />

          <InputText name="price" label="Module Price (USD)" placeholder="Module price" />

          {props.details?.lessons.map((lesson) => (
            <CourseLesson key={v4()} details={lesson} />
          ))}

          <button className="btn btn-accent w-full block">Save Module</button>
        </FormProvider>
      </section>

      <AddLesson />
    </div>
  );
};

export default CourseModule;

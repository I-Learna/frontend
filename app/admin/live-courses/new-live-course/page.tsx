"use client";

import InputFile from "@/components/ui/InputFile";
import InputSelect from "@/components/ui/InputSelect";
import InputText from "@/components/ui/InputText";
import InputTextArea from "@/components/ui/InputTextArea";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const onSubmit = (data: any) => {};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Live Course</h2>
      <section className="space-y-5 max-w-3xl m-auto bg-gray-50 p-5 rounded-lg">
        <FormProvider {...formMethods}>
          <InputText
            name="title"
            label="Course Title"
            placeholder="Enter the course title (e.g., Advanced Petroleum Refining Techniques)"
            helperText="Choose a clear, concise, and descriptive title that reflects the course content."
          />

          <InputFile
            name="image"
            label="Upload Course Image"
            accept=".pdf, .doc, .docx, .RTF"
            placeholder="Click to upload"
            helperText="Recommended size: 1280 x 720 pixels for best display quality, Maximum file size: 2 MB."
          />

          <InputTextArea
            name="title"
            label="Course Description"
            placeholder="Write a short summary (e.g., Learn advanced refining methods through real-world case studies)."
            helperText="This will be displayed on the course hero section. Keep it within 150 characters."
          />

          <InputTextArea
            name="about"
            label="About the Course"
            placeholder="Write a detailed overview of what this course covers."
            helperText="Provide an engaging overview that highlights the course's value and scope."
          />

          <InputTextArea
            name="about"
            label="What You'll Learn"
            placeholder="Add learning outcomes (e.g., 'Understand refining processes')."
            helperText="Select at least 3-5 outcomes that describe what students will achieve."
          />

          <InputText
            name="title"
            label="Pre-Requirements"
            placeholder="List any necessary knowledge or skills required before taking this course."
            helperText="Mention tools, skills, or prerequisites needed for this course."
          />

          <InputText
            name="title"
            label="Details to Know (Optional)"
            placeholder="Add practical details (e.g., 'Self-paced', 'Lifetime access')."
            helperText="Include practical information like format, duration, and access."
          />

          <InputSelect
            name="level"
            label="Select Course Level"
            options={[]}
            helperText="Select the level that best reflects the course’s complexity and target audience."
          />

          <InputSelect
            name="industry"
            label="Select Industry"
            options={[]}
            helperText="Select the industry this course is most relevant to."
          />

          <InputSelect
            name="level"
            label="Select Discipline"
            options={[]}
            helperText="Select at least one or more disciplines that describe the technical or educational focus."
          />

          <button className="btn btn-accent block ml-auto w-full">
            Submit for review
          </button>
        </FormProvider>
      </section>
    </div>
  );
};

export default Page;

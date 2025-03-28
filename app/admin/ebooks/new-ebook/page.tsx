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
      <h2 className="text-2xl font-semibold mb-4">Create E-book</h2>
      <section className="space-y-5 max-w-3xl m-auto bg-gray-50 p-5 rounded-lg">
        <FormProvider {...formMethods}>
          <InputText
            name="title"
            label="Ebook Title"
            placeholder="Enter the ebook title (e.g., Advanced Petroleum Refining Techniques)"
            helperText="Choose a clear, concise, and descriptive title that reflects the ebook content."
          />

          <InputFile
            name="image"
            label="Upload Ebook Image"
            accept=".pdf, .doc, .docx, .RTF"
            placeholder="Click to upload"
            helperText="Recommended size: 1280 x 720 pixels for best display quality, Maximum file size: 2 MB."
          />

          <InputTextArea
            name="title"
            label="Ebook Description"
            placeholder="Write a short summary (e.g., Learn advanced refining methods through real-world case studies)."
            helperText="This will be displayed on the course hero section. Keep it within 150 characters."
          />

          <InputTextArea
            name="about"
            label="About the Ebook"
            placeholder="Write a detailed overview of what this Ebook covers."
            helperText="Provide an engaging overview that highlights the course's value and scope."
          />

          <InputSelect
            name="industry"
            label="Select Industry"
            options={[]}
            helperText="Select the industry this course is most relevant to."
          />

          <InputSelect
            name="discipline"
            label="Select Discipline"
            options={[]}
            helperText="Select at least one or more disciplines that describe the technical or educational focus."
          />

          <InputSelect
            name="PRICE"
            label="Select Price"
            options={[]}
            helperText="Select Price or Free"
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

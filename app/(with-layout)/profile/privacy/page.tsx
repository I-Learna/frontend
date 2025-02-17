"use client";
import InputCheckbox from "@/components/ui/InputCheckbox";
import { useForm, FormProvider } from "react-hook-form";
import React from "react";

const Page = () => {
  const methods = useForm({
    defaultValues: {
      agree: true,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-xl lg:text-2xl lg:font-semibold">Privacy</h1>
      <h2 className="text-md mb-4">Privacy Settings</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <InputCheckbox
            name="agree"
            label="Allow your profile to be visible to other students or instructors in the community or leaderboards"
          />
          <InputCheckbox
            name="agree2"
            label="Keep your email address hidden from other users on the platform."
          />
          <InputCheckbox
            name="agree3"
            label="Choose if your course reviews and feedback are visible to others."
          />

          <div className="flex gap-3 justify-end">
            <button className="btn btn-accent-trans w-32">Cancel</button>
            <button className="btn btn-accent w-32">Save</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Page;

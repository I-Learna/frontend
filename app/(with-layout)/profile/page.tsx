"use client";
import InputSelect from "@/components/ui/InputSelect";
import InputText from "@/components/ui/InputText";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Page = () => {
  const formMethods = useForm<FormValues>();
  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {};

  return (
    <>
      <h1 className="text-xl lg:text-2xl lg:font-semibold">Your Profile</h1>
      <h2 className="text-md mb-4">Basic Information</h2>

      <div className="space-y-4">
        <FormProvider {...formMethods}>
          <InputText
            name="fullname"
            label="Full Name"
            placeholder="Mohamed Ahmed"
            rules={{ required: "Email is required" }}
          />

          <InputText
            name="fullname"
            label="Email"
            placeholder="Mohamed Ahmed"
            rules={{ required: "Email is required" }}
          />

          <div className="flex gap-4">
            <div className="w-full">
              <InputSelect name="country" label="Country" options={[]} />
            </div>
            <div className="w-full">
              <InputSelect
                name="nationality"
                label="Nationality"
                options={[]}
              />
            </div>
          </div>

          <InputText
            name="companyName"
            label="Company Name"
            placeholder="Enter your company name"
            rules={{ required: "Email is required" }}
          />

          <InputSelect name="industry" label="Industry" options={[]} />

          <InputSelect name="discipline" label="Discipline" options={[]} />

          <InputSelect
            name="hearFrom"
            label="How did you hear about ilearna ?"
            options={[]}
          />

          <div className="flex justify-end gap-4"></div>
          <button className="bg-accent hover:bg-accent-dark transition-all duration-300 text-white py-2 px-5 rounded-lg ml-auto block w-full lg:w-max">
            Save Changes
          </button>
        </FormProvider>
      </div>
    </>
  );
};

export default Page;

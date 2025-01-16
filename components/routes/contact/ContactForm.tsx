"use client";
import InputEmail from "@/components/ui/InputEmail";
import InputText from "@/components/ui/InputText";
import InputTextArea from "@/components/ui/InputTextArea";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const ContactForm = () => {
  const formMethods = useForm<FormValues>();
  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {};

  return (
    <div className="bg-accent-lighter p-10 max-w-xl m-auto rounded-lg space-y-3">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      <p className="font-light">
        Have questions or need support? Reach out to us we’re just a message
        away.
      </p>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputText name="name" label="Name" placeholder="Enter your name" />

          <InputEmail
            name="email"
            label="Email"
            placeholder="Enter your email"
            rules={{ required: "Email is required" }}
          />

          <InputText
            name="phone"
            label="Phone Number"
            placeholder="00 000 0000"
          />

          <InputTextArea name="message" placeholder="How can we help?" />

          <button
            type="submit"
            className="w-full py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition duration-300"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;

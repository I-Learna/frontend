"use client";
import InputEmail from "@/components/ui/InputEmail";
import Link from "next/link";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";

interface ResetPasswordForm {
  email: string;
}

const ResetPasswordRequest = () => {
  const formMethods = useForm<ResetPasswordForm>();
  const { handleSubmit } = formMethods;

  const submitHandler: SubmitHandler<ResetPasswordForm> = (data) => {};

  return (
    <div className="pt-5">
      <Link
        href="sign-in"
        className="flex items-center text-customGray mb-4 hover:text-black"
      >
        <IoArrowBack className="mr-2" />
        Back
      </Link>

      <h2 className="text-3xl font-bold text-accent mb-5">
        Reset your password.
      </h2>

      <p className="text-customGray mb-6">
        No worries! Enter your email address below, and we will send you a link
        to reset your password.
      </p>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
          <InputEmail
            name="email"
            label="Email"
            placeholder="Enter your email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordRequest;

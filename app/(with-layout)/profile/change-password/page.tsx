"use client";
import InputPassword from "@/components/ui/InputPassword";
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
    <div className="space-y-5 max-w-4xl m-auto">
      <h2 className="text-xl font-semibold">Change Password</h2>

      <FormProvider {...formMethods}>
        <InputPassword
          name="password"
          label="Password"
          placeholder="Enter your password"
          isNewPassword
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message: "Must include an uppercase, a number, and a symbol",
            },
          }}
        />

        <InputPassword
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Enter your password"
          rules={{ required: "Please confirm you new password" }}
          confirmField="password"
        />

        <button className="btn btn-accent block ml-auto">Save Changes</button>
      </FormProvider>
    </div>
  );
};

export default Page;

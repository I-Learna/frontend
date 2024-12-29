"use client";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Link from "next/link";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const formMethods = useForm<FormValues>();
  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="my-auto">
      <h2 className="text-3xl font-bold text-accent mb-5">Welcome Back.</h2>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputText
            name="email"
            label="Email"
            placeholder="Enter your email"
            rules={{ required: "Email is required" }}
          />

          <InputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
            rules={{
              required: "Password is required",
            }}
          />

          <Link
            href="reset-password-request"
            className="text-primary text-sm hover:underline block text-end"
          >
            Forgot Password ?
          </Link>

          <button
            type="submit"
            className="w-full py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition duration-300"
          >
            Log in
          </button>
        </form>
      </FormProvider>

      <div className="mt-6 text-center text-sm text-customGray">
        Don't have an account?{" "}
        <Link href="sign-up" className="text-accent hover:underline">
          Signup
        </Link>
      </div>

      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-accent-light"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-customGray">or login with</span>
        </div>
      </div>

      <div className="flex space-x-10 justify-center">
        <button>
          <img
            src="/images/social-media/google.svg"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <img
            src="/images/social-media/facebook.png"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <img
            src="/images/social-media/linkedin.png"
            alt="Google"
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Login;

"use client";

import InputEmail from "@/components/ui/InputEmail";
import InputFile from "@/components/ui/InputFile";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
  cv?: FileList;
};

const SignUp = () => {
  const [activeTab, setActiveTab] = useState<"student" | "freelancer">(
    "student"
  );

  const formMethods = useForm<FormValues>();
  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-6 font-semibold">
      <h2 className="text-3xl font-bold text-accent mb-5">Create account.</h2>

      <div className="flex justify-center mb-6 border-b">
        <button
          onClick={() => setActiveTab("student")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "student"
              ? "text-accent border-b-2 border-accent-light"
              : "text-customGray"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveTab("freelancer")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "freelancer"
              ? "text-accent border-b-2 border-accent-light"
              : "text-customGray"
          }`}
        >
          Freelancer
        </button>
      </div>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputText
            name="username"
            label="Username"
            placeholder="Enter your name"
            rules={{ required: "Username is required" }}
          />

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

          {activeTab === "freelancer" && (
            <InputFile name="cv" label="Upload your CV" />
          )}

          <button
            type="submit"
            className="w-full py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </FormProvider>

      <div className="mt-4 text-center text-sm text-customGray">
        Already have an account?{" "}
        <Link
          href="sign-in"
          className="text-accent hover:underline font-medium"
        >
          Login
        </Link>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-accent-light"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-customGray">or sign up with</span>
        </div>
      </div>

      <div className="flex space-x-10 justify-center">
        <button>
          <Image
            src="/images/social-media/google.svg"
            width={10}
            height={10}
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <Image
            src="/images/social-media/facebook.png"
            width={10}
            height={10}
            alt="Google"
            className="w-8 h-8"
          />
        </button>
        <button>
          <Image
            src="/images/social-media/linkedin.png"
            width={10}
            height={10}
            alt="Google"
            className="w-8 h-8"
          />
        </button>
      </div>

      <div className="text-center mt-3 text-xs">
        <p className="text-customGray">
          By signing up to create an account I accept Company’s{" "}
        </p>
        <Link href="#" className="text-accent">
          Terms of Use and Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

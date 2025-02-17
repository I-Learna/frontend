"use client";
import InputPassword from "@/components/ui/InputPassword";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface CreateNewPasswordForm {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const formMethods = useForm<CreateNewPasswordForm>();
  const { handleSubmit } = formMethods;

  const submitHandler: SubmitHandler<CreateNewPasswordForm> = (data) => {
    // handleSubmit({ password: data.password });
  };

  return (
    <div className="my-auto">
      <h2 className="text-3xl font-bold text-accent mb-5">
        Create new password.
      </h2>

      <p className="text-customGray mb-6">
        Enter your new password below to complete the reset process. Ensure it s
        strong and secure.
      </p>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
          <InputPassword
            name="password"
            label="New password"
            placeholder="Enter your new password"
            rules={{ required: "Please enter you new password" }}
            isNewPassword
          />

          <InputPassword
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm your password"
            rules={{ required: "Please confirm you new password" }}
            confirmField="password"
          />

          <button type="submit" className="btn btn-accent block w-full">
            Reset password
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPassword;

"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  remindMe: boolean;
};

type Props = {
  modalClosed: Dispatch<SetStateAction<boolean>>;
  signUpModalOpen: () => void;
};
const Login = ({ modalClosed, signUpModalOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  // Get the value of the "password" field for comparison
  const passwordValue = watch("password");

  const isPasswordValid = (password: string) => {
    // Custom validation logic here
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasLowercaseLetter = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    if (!hasSpecialCharacter) {
      return "Password must include at least one special character.";
    }

    if (!hasCapitalLetter) {
      return "Password must include at least one capital letter.";
    }

    if (!hasLowercaseLetter) {
      return "Password must include at least one lowercase letter.";
    }

    if (!hasDigit) {
      return "Password must include at least one digit.";
    }

    return true; // Password is valid
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="rounded-[20px] bg-C3C3E5C p-3 sm:min-w-[530px] sm:p-5 md:min-w-[700px] md:p-S30">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-5 md:mt-S30">
          <label className="mt-3 block md:mt-5">
            Email<span className="text-2xl text-red-500 ">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
            className="form-input mt-S5 rounded-[10px] border border-C3F4C70 bg-C212737 px-[30px] py-[15px] outline-none focus:border-gradient selection:bg-inherit placeholder:text-C3F4C70 focus:right-1 focus:ring-0"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <div>
            <label className="mt-3 block md:mt-5">
              Password<span className="text-2xl text-red-500 ">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter a password"
              {...register("password", {
                required: "Password is required",
                max: 100,
                maxLength: 100,
                validate: (value) => isPasswordValid(value),
              })}
              className="form-input mt-S5 rounded-[10px] border border-C3F4C70 bg-C212737 px-[30px] py-[15px] outline-none focus:border-gradient placeholder:text-C3F4C70  focus:ring-0"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mt-5 flex items-center gap-3 sm:gap-6">
            <input
              type="checkbox"
              value="Yes"
              {...register("remindMe", { required: true })}
              className="h-5 w-5 rounded text-C09B65E"
            />
            <div>
              <span>Remind me later. </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              onClick={() => modalClosed(false)}
              href="/profile"
              className="custom-transition-button mt-5 w-fit cursor-pointer rounded-xl border border-transparent bg-C09B65E px-5 py-[10px] font-bold text-C282F41 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] hover:border hover:border-C09B65E hover:bg-opacity-10 hover:text-white"
              type="submit"
            >
              Login now
            </Link>
          </div>
        </form>
        <div className="mb-10 mt-5">
          <span>I have no account. </span>
          <button
            onClick={() => {
              signUpModalOpen();
              modalClosed(false);
            }}
            className="text-C09B65E"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

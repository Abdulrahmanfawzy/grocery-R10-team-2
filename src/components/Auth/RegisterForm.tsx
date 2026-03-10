import { Field, FieldLabel } from "@/components/ui/field";
import { LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type RegisterProps } from "@/lib/types/Forms";
import { signUpSchema } from "@/lib/schemas/registerSchema";

import axios from "axios";
import { usePostUser } from "@/hooks/usePostUser";
export const RegisterForm = () => {
  const fieldInputClass =
    "flex items-center justify-center gap-[12px] px-[12px]";
  const { mutate, isPending } = usePostUser();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<RegisterProps>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      password_confirmation: "",
      agree_terms: 0,
    },

    resolver: zodResolver(signUpSchema),
  });

  //Sumbit Function
  const onSumbit: SubmitHandler<RegisterProps> = (data) => {
    mutate(data, {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const Error = error.response?.data?.errors;
          if (Error.email) {
            setError("email", { message: Error.email[0] });
          }
          if (Error.username) {
            setError("username", { message: Error.username[0] });
          }
          if (Error.phone) {
            setError("phone", { message: Error.phone[0] });
          }
        }
      },
    });
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSumbit)}
    >
      <Field className="text-start">
        <div className={fieldInputClass}>
          <UserRound size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="UserName"
              type="text"
              {...register("username")}
              className={`${errors.username ? "border-red-500" : ""}`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
        </div>
      </Field>
      <Field className="text-start">
        <div className={fieldInputClass}>
          <Mail size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="Email"
              {...register("email")}
              className={`${errors.email ? "border-red-500 " : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>
      </Field>
      <Field className="text-start">
        <div className={fieldInputClass}>
          <Phone size={20} />

          <div className="flex flex-col flex-1 gap-1">
            <Input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              className={`${errors.phone ? "border-red-500 " : ""}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </Field>
      <Field className="text-start">
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="Password"
              type="password"
              {...register("password")}
              className={`${errors.password ? "border-red-500 " : ""}`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
        </div>
      </Field>
      <Field className="text-start">
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="Password Confirmation"
              type="password"
              {...register("password_confirmation")}
              name="password_confirmation"
              className={`${errors.password_confirmation ? "border-red-500 " : ""}`}
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-xs">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
        </div>
      </Field>
      {/* SIgn__Gemail */}
      <div className="flex items-center gap-3.25">
        <input
          id="agree_terms"
          type="checkbox"
          onChange={(e) =>
            setValue("agree_terms", e.target.checked ? 1 : 0, {
              shouldValidate: true,
            })
          }
          className="w-4 h-4 accent-primary cursor-pointer"
        />
        <FieldLabel htmlFor={"agree_terms"}> Agree Terms</FieldLabel>
        {errors.agree_terms && (
          <p className="text-red-500 text-xs">{errors.agree_terms.message}</p>
        )}
      </div>{" "}
      <Button
        type="submit"
        className="rounded-none cursor-pointer w-full"
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Continue"}
      </Button>
    </form>
  );
};

import { Field } from "@/components/ui/field";
import { LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginProps } from "@/lib/types/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/LoginSchma";
import { usePostLogin } from "@/hooks/usePostLogin";
import axios from "axios";
export const LoginForm = () => {
  const { mutate, isPending } = usePostLogin();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginProps>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const onSumbit: SubmitHandler<LoginProps> = (data) => {
    mutate(data, {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const Error = error.response?.data?.errors;
          if (Error.login) {
            setError("login", { message: Error.login[0] });
          }
        }
      },
    });
  };
  const fieldInputClass =
    "flex items-center justify-center gap-[12px] lg:px-[12px] px-0";
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSumbit)}
    >
      <Field>
        <div className={fieldInputClass}>
          <Mail size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="email"
              type="email"
              {...register("login")}
              className={`${errors.login ? "border-red-500" : ""}`}
            />
            {errors.login && (
              <p className="text-red-500 text-xs">{errors.login.message}</p>
            )}
          </div>
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="password"
              type="password"
              {...register("password")}
              className={`${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
        </div>
      </Field>

      <div className="flex items-center gap-3.25">
        <Link to={"/password-recovery"} className="text-[14px]">
          Forget Password ?
        </Link>
      </div>
      <Button
        type="submit"
        className="rounded-none cursor-pointer"
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Continue"}
      </Button>
    </form>
  );
};

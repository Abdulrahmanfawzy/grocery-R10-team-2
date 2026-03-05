import { Field } from "@/components/ui/field";
import { LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginProps } from "@/lib/types/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/LoginSchma";
export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const onSumbit: SubmitHandler<LoginProps> = () => {
    navigate("/");
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
              placeholder="UserName"
              type="email"
              {...register("email")}
              className={`${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <div className="flex flex-col flex-1 gap-1">
            <Input
              placeholder="UserName"
              type="password"
              {...register("password")}
              className={`${errors.email ? "border-red-500" : ""}`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
        </div>
      </Field>

      <div className="flex items-center gap-3.25">
        <Link to={"/PasswordRecovery"} className="text-[14px]">
          Forget Password ?
        </Link>
      </div>
      <Button type="submit" className="rounded-none cursor-pointer">
        Continue
      </Button>
    </form>
  );
};

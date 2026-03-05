import { Field, FieldLabel } from "@/components/ui/field";
import { LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type RegisterProps } from "@/lib/types/Forms";
import { signUpSchema } from "@/lib/schemas/registerSchema";
export const RegisterForm = () => {
  const navigate = useNavigate();
  const fieldInputClass =
    "flex items-center justify-center gap-[12px] px-[12px]";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    defaultValues: {
      usename: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: zodResolver(signUpSchema),
  });
  const onSumbit: SubmitHandler<RegisterProps> = (data) => {
    console.log(data);
    navigate("/Login");
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
              {...register("usename")}
              className={`${errors.usename ? "border-red-500" : ""}`}
            />
            {errors.usename && (
              <p className="text-red-500 text-xs">{errors.usename.message}</p>
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
              name="email"
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
              placeholder="Phone"
              type="number"
              {...register("phone")}
              name="phone"
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
              name="password"
              className={`${errors.password ? "border-red-500 " : ""}`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
        </div>
      </Field>
      {/* SIgn__Gemail */}
      <div className="flex items-center gap-3.25">
        <Checkbox id="checkox" className="rounded-full" name="checkbox" />
        <FieldLabel htmlFor={"checkox"}>Remember Me</FieldLabel>
      </div>{" "}
      <Button type="submit" className="rounded-none cursor-pointer w-full">
        Continue
      </Button>
      {/* Google */}
    </form>
  );
};

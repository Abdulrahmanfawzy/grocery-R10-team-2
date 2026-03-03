import { Field } from "@/components/ui/field";
import { Facebook, LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const fieldInputClass =
    "flex items-center justify-center gap-[12px] lg:px-[12px] px-0";
  return (
    <form action="" className="flex flex-col gap-4">
      <Field>
        <div className={fieldInputClass}>
          <Mail size={20} />
          <Input placeholder="Email" className="" />
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <Input placeholder="Password" type="password" />
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

      {/* Google */}
      <div className="flex flex-col justify-center items-center mt-5.75">
        <p className="font-normal text-[16px] ">Continue In With</p>

        <div className="flex items-center justify-center gap-2 my-2">
          <Button className="flex items-center justify-center gap-2  bg-white text-black hover:text-white cursor-pointer">
            <FcGoogle size="24px" />
            <span>Continue with google</span>
          </Button>

          <Button className="flex items-center justify-center gap-2  bg-white text-black hover:text-white cursor-pointer lg:flex hidden">
            <Facebook className="w-7.25" />

            <span>Continue with FaceBook</span>
          </Button>
        </div>
        <span className="font-bold text-[16px]">
          Don’t have an account?{" "}
          <Link to={"/Register"} className="text-[#014162]">
            Sign Up
          </Link>
        </span>
      </div>
    </form>
  );
};

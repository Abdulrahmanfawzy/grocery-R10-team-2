
import { Field, FieldLabel } from "@/components/ui/field";
import { Facebook, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export const RegisterForm = () => {
  const fieldInputClass =
    "flex items-center justify-center gap-[12px] px-[12px]";
  return (
    <form action="" className="flex flex-col gap-4">
      <Field>
        <div className={fieldInputClass}>
          <UserRound size={20} />
          <Input placeholder="UserName" type="text" />
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <Mail size={20} />
          <Input placeholder="Email" />
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <Phone size={20} />
          <Input placeholder="Phone" type="number" />
        </div>
      </Field>

      <Field>
        <div className={fieldInputClass}>
          <LockKeyhole size={20} />
          <Input placeholder="Password" type="password" />
        </div>
      </Field>

      <div className="flex items-center gap-3.25">
        <Checkbox id="checkox" className="rounded-full" checked />
        <FieldLabel htmlFor={"checkox"}>Remember Me</FieldLabel>
      </div>
      <Button type="submit" className="rounded-none cursor-pointer">
        Continue
      </Button>

      {/* Google */}
      <div className="flex flex-col justify-center items-center">
        <p className="font-normal text-[16px] ">Sigm Up With</p>

        <div className="flex items-center justify-center gap-2">
          <Button className="flex items-center justify-center gap-2  bg-white text-black hover:text-white cursor-pointer">
            <FcGoogle size="24px" />
            <span>Sign In with Google</span>
          </Button>

          <Button className="flex items-center justify-center gap-2  bg-white text-black hover:text-white cursor-pointer">
            <Facebook className="w-7.25" />

            <span>Sign In with Google</span>
          </Button>
        </div>
        <span className="font-bold text-[16px]">
          Already have an account? <Link to={"/Login"} className="text-[#014162]">Login</Link>
        </span>
      </div>
    </form>
  );
};

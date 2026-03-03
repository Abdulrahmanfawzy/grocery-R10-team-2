import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  ChevronLeft,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SuccessPopUp } from "@/components/common/Auth/SuccessPopUp";
import { useState } from "react";

export const ResendPassword = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative py-4 px-2">
      <Link to={"/PasswordRecovery"}>
        <Button className="bg-gray-400 rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer ">
          <ChevronLeft className="w-2.5" />
        </Button>
      </Link>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-40 md:translate-x-0  items-center gap-4   md:left-62.5 lg:left-150 lg:top-54.25  text-center"
        style={{ width: "321px", height: "281px" }}
      >
        <div className="mb-4">
          <p className="text-[24px] font-bold">Reset your password</p>
          <p className="text-[14px] text-gray-500 ">
            Please enter your new password
          </p>
        </div>

        <form action="">
          <FieldGroup className=" w-80.25 mb-4 flex justify-center items-center">
            <Field>
              <FieldLabel htmlFor="name">New Password</FieldLabel>
              <div className="flex items-center relative">
                <div className="absolute left-3">
                  <ShieldCheck />
                </div>

                <Input placeholder="Password" className=" w-full h-13 pl-10" />
              </div>
            </Field>
          </FieldGroup>

          <FieldGroup className=" w-80.25 mb-4">
            <Field>
              <FieldLabel htmlFor="name">Confirm Password</FieldLabel>
              <div className="flex items-center relative">
                <div className="absolute left-3">
                  <BadgeCheck />
                </div>

                <Input
                  placeholder="Confirm Password"
                  className=" w-full h-13 pl-10"
                />
              </div>
            </Field>
          </FieldGroup>

          <div className="text-[12px] flex flex-col justify-center items-center gap-1">
            <p>Your password must contain:</p>
            <div className="flex justify-center  items-center gap-2 ">
              <div className="flex flex-col gap-2">
                <CircleCheck />
                <CircleCheck />
              </div>

              <div className="flex flex-col gap-2">
                <span>At least 6 characters</span>
                <span>Contains a number</span>
              </div>
            </div>
          </div>

          <Button
            className="w-80.25 h-13.5 mt-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Done
          </Button>
        </form>
      </div>
      <SuccessPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

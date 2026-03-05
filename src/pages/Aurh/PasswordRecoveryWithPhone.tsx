import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Phone } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { PhoneSchema, type Phonetype } from "@/lib/schemas/PasswordRecovery";
import { PopUP } from "@/components/common/Auth/PopUP";
export const PasswordRecoveryWithPhone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Phonetype>({
    defaultValues: {
      phone: "",
    },
    resolver: zodResolver(PhoneSchema),
  });
  const onSumbit: SubmitHandler<Phonetype> = () => {
    setIsOpen(true);
  };

  return (
    <div className=" relative py-4 px-2">
      <Link to={"/Login"}>
        <Button className="bg-gray-400 rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer ">
          <ChevronLeft className="w-2.5" />
        </Button>
      </Link>

      <div
        className="absolute left-1/2 -translate-x-1/2 top-63.5 md:translate-x-0  items-center gap-4   md:left-62.5 lg:left-150 lg:top-54.25  text-center"
        style={{ width: "321px", height: "281px" }}
      >
        {" "}
        <div className="text-center mb-5">
          <p className="font-semibold text-[32px]">Password Recovery</p>
          <p className=" w-75 font-medium text-[16px] text-center tracking-tight gap-1">
            Enter your Mobile Number to recover your password
          </p>
        </div>
        <div>
          <div className="relative w-80.25 ">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
              <Phone size={20} />
            </div>
            <Input
              type="number"
              placeholder="Phone Number"
              className={`bg-gray-400 w-full h-13 pl-10 ${errors.phone ? "border-red-500" : ""}`}
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs text-start mt-1">
              {errors.phone.message}
            </p>
          )}

          <Link to={"/PasswordRecovery"} className="text-blue-500 text-[12px] ">
            Send By Email
          </Link>

          <Button
            className="w-80.25 h-13.5 mt-12.5 cursor-pointer"
            onClick={handleSubmit(onSumbit)}
          >
            Verify
          </Button>

          <PopUP isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

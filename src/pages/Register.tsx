import { RegisterForm } from "@/components/common/Auth/RegisterForm";
import img from "../assets/background.png";
import { Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div
      className="h-screen w-full flex flex-col  justify-end  lg:flex-row lg:justify-end bg-white "
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: "#014162C7",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-full py-12 px-2 bg-white shadow-2xl  lg:py-31.5  lg:px-10 lg:w-220.75  md:px-22 lg:rounded-l-4xl text-center">
        <div className="flex flex-col lg:gap-5  ">
          <p className="font-semibold lg:text-[32px] sm:text-[16px]">
            Create your account!
          </p>
          <p className="font-semibold text-[16px] lg:flex hidden">
            Enter your Full Details
          </p>

          {/* Form */}
          <RegisterForm />

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
              Already have an account?{" "}
              <Link to={"/Login"} className="text-[#014162]">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

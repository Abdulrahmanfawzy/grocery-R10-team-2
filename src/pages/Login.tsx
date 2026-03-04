import { LoginForm } from "@/components/common/Auth/LoginForm";
import img from "../assets/background.png";
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div
      className="h-screen w-full flex flex-col  justify-end  lg:flex-row lg:justify-end bg-white "
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: "#014162C7",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className=" w-full py-12 px-6 text-center bg-white shadow-2xl  lg:py-31.5  lg:px-22 lg:w-220.75  md:px-22 lg:rounded-l-4xl lg:text-start  ">
        <div className="flex flex-col lg:gap-13.25">
          <p className="font-semibold lg:text-[32px] sm:text-[16px]">
            Login your account!
          </p>
          <p className="font-semibold lg:text-[16px] lg:block hidden">
            Welocme to Grocery Plus
          </p>

          {/* Form */}
          <LoginForm />

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
        </div>
      </div>
    </div>
  );
};

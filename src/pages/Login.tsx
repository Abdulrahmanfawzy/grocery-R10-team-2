import { LoginForm } from "@/components/common/Auth/LoginForm";
import img from "../assets/background.png";

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
      <div className=" w-full py-12 px-6  bg-white shadow-2xl  lg:py-31.5  lg:px-22 lg:w-220.75  md:px-22 lg:rounded-l-4xl text-center">
        <div className="flex flex-col lg:gap-13.25">
          <p className="font-semibold lg:text-[32px] sm:text-[16px]">
            Login your account!
          </p>
          <p className="font-semibold lg:text-[16px] lg:block hidden">
            Welocme to Grocery Plus
          </p>

          {/* Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

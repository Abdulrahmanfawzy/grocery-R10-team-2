import { RegisterForm } from "@/components/common/Auth/RegisterForm";
import img from "../assets/background.png";

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
      <div className=" w-full py-12 px-6  bg-white shadow-2xl  lg:py-31.5  lg:px-22 lg:w-220.75  md:px-22 lg:rounded-l-4xl text-center">
        <div className="flex flex-col lg:gap-13.25  ">
          <p className="font-semibold lg:text-[32px] sm:text-[16px]">
            Create your account!
          </p>
          <p className="font-semibold text-[16px] lg:flex hidden">
            Enter your Full Details
          </p>

          {/* Form */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

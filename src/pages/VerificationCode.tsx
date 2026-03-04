import  { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link } from "react-router-dom";
const VerificationCode = () => {
  const [time, setTime] = useState(90);
  const [resend, setresend] = useState(false);

  useEffect(() => {
    if (time <= 0) return;
    const TimeInterval = setTimeout(() => {
      setTime((pre) => pre - 1);
    }, 1000);
    return () => clearTimeout(TimeInterval);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      const timeReSend = setTimeout(() => {
        setresend(true);
      }, 0);
      return () => clearTimeout(timeReSend);
    }
  }, []);
  const handleReset = () => {
    setTime(90);
    setresend(true);
  };
  const minits = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.ceil(time % 60)
    .toString()
    .padStart(2, "0");
  return (
    <div className=" relative py-4 px-2">
      <Link to={"/PasswordRecovery"}>
        <Button className="bg-gray-400 rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer ">
          <ChevronLeft className="w-2.5" />
        </Button>
      </Link>
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center top-40 md:translate-x-0 gap-4   md:left-62.5 lg:left-150 lg:top-54.25  text-center"
        style={{ width: "321px", height: "281px" }}
      >
        <div className="bg-green-100  rounded-full mb-5.75">
          <CheckCircle2 className=" text-green-500" />
        </div>
        <div>
          <p className="text-[24px] font-bold">Enter verification code</p>
          <p className="text-[14px] text-gray-500 ">
            We Send a code to (+20) 1163982057
          </p>
        </div>

        <div className="mb-6">
          <InputOTP maxLength={6} defaultValue="123456">
            <InputOTPGroup>
              <InputOTPSlot index={0} typeof="number" />
              <InputOTPSlot index={1} typeof="number" />
              <InputOTPSlot index={2} typeof="number" />
              <InputOTPSlot index={3} typeof="number" />
              <InputOTPSlot index={4} typeof="number" />
              <InputOTPSlot index={5} typeof="number" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div>
          <p className="text-[14px] text-gray-500 ">
            Having trouble? Request a new OTP in {minits}.{seconds}
          </p>

          <p className="text-[14px] text-gray-400 cursor-pointer "   onClick={handleReset}>
            Rresend Code
          </p>
        </div>

        <Link to={"/ResendPassword"}>
          <Button
            className="w-80.25 h-13.5 mt-4 cursor-pointer"
          
            
          >
            Verify
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VerificationCode;



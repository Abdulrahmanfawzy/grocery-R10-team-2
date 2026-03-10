import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { OtpSchema, type OtpSchemaType } from "@/lib/schemas/otpSchems";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOtp } from "@/hooks/useOtp";
const VerificationCode = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(90);
  const { mutate, isPending } = useOtp();
  const location = useLocation();
  const identifier = location.state?.identifier ?? "";

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OtpSchemaType>({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(OtpSchema),
  });

  const otpValue = watch("otp");

  const onSumbit: SubmitHandler<OtpSchemaType> = (data) => {
    mutate(
      { otp: data.otp, identifier },
      {
        onSuccess: () => {
          navigate("/resend-password", {
            state: { otp: data.otp, identifier },
          });
        },
      },
    );
  };

  useEffect(() => {
    if (time <= 0) {
      navigate("/password-recovery");
    }
    const TimeInterval = setTimeout(() => {
      setTime((pre) => pre - 1);
    }, 1000);
    return () => clearTimeout(TimeInterval);
  }, [time]);

  const minits = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.ceil(time % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div className=" relative py-4 px-2">
      <Link to={"/password-recovery"}>
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
        </div>

        <div className="mb-6">
          <InputOTP
            maxLength={4}
            value={otpValue}
            onChange={(val) => setValue("otp", val, { shouldValidate: true })}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} typeof="number" />
              <InputOTPSlot index={1} typeof="number" />
              <InputOTPSlot index={2} typeof="number" />
              <InputOTPSlot index={3} typeof="number" />
            </InputOTPGroup>
          </InputOTP>
          {errors.otp && (
            <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>
          )}
        </div>

        <div>
          <p className="text-[14px] text-gray-500 ">
            Having trouble? Request a new OTP in {minits}.{seconds}
          </p>

          <p
            className="text-[14px] text-gray-400 cursor-pointer "
            onClick={() => navigate("/password-recovery")}
          >
            Rresend Code
          </p>
        </div>

        <Button
          className="w-80.25 h-13.5 mt-4 cursor-pointer"
          onClick={handleSubmit(onSumbit)}
          disabled={isPending}
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default VerificationCode;

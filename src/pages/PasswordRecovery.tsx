import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Mail } from "lucide-react";
import { useState } from "react";
import { PopUP } from "../components/common/Auth/PopUP";
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="relative w-80.25 mb-12.5">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
              <Mail size={20} />
            </div>
            <Input
              placeholder="Eamil"
              className="bg-gray-400 w-full h-13 pl-10"
            />
          </div>

          <Button
            className="w-80.25 h-13.5"
            onClick={() => setIsOpen(true)}
          >
            Verify
          </Button>

          <PopUP isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;

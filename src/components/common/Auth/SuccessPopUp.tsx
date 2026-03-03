import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import type { PopUpProps } from "@/lib/types/PopUPProps";

import { BadgeCheck } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SuccessPopUp = ({ isOpen, setIsOpen }: PopUpProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      const time = setTimeout(() => {
        setIsOpen(false);
        navigate("/Login");
      }, 2000);
      return () => clearTimeout(time);
    }
  }, [isOpen, navigate, setIsOpen]);
  return (
    <Dialog open={isOpen} onOpenChange={() => navigate("/Login")}>
      <DialogContent className="w-[400px] h-[350px] flex flex-column justify-center items-center">
        <DialogHeader className="flex flex-col items-center justify-center p-7  sm:max-w-[400px]">
          <div className="rounded-full p-0">
            <BadgeCheck className="text-blue-500 w-16 h-16" />
          </div>
          <DialogDescription className="text-center font-bold text-[15px] text-black">
            Reset Was Successful
          </DialogDescription>

          <DialogDescription className="text-center  text-[10px] ">
            You can now login to your account
          </DialogDescription>

          <Button
            className="w-[279px] mt-4 cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

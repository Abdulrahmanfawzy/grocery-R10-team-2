import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import type { PopUpProps } from "@/lib/types/PopUPProps";

import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PopUP = ({ isOpen, setIsOpen }: PopUpProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      const time = setTimeout(() => {
        setIsOpen(false);
        navigate("/verification-code");
      }, 2000);
      return () => clearTimeout(time);
    }
  }, [isOpen, navigate, setIsOpen]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[350px] h-[350px]">
        <DialogHeader className="flex flex-col items-center justify-center p-7  sm:max-w-[400px]">
          <div className="bg-green-100  rounded-full">
            <CheckCircle2 className=" text-green-500" />
          </div>
          <DialogDescription className="text-center">
            We have sent password recovery instructions Via SMS to “(+20)
            1163982057”
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

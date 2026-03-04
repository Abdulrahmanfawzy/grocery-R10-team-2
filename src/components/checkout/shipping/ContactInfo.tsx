import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck } from "lucide-react";

function ContactInfo() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Contact Information
      </h2>

      <div className="space-y-4 border border-gray-200 rounded-xl p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Sarah" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Emad" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+20***********" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Sarahem@gmail.com" />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <CircleCheck strokeWidth={1} className="text-(--gray)" />
          <p className="text-sm font-light text-(--gray)">
            Create an account for easier check-out next time
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

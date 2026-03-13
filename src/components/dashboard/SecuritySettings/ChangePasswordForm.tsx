import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from "@/lib/schemas/ChangePasswordSchema";
import { changePassword } from "@/lib/api/changePasswordApi";
import { toast } from "react-toastify";
import { useState } from "react";

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const password = watch("password", "");

  const onSubmit = async (data: ChangePasswordFormData) => {
    setLoading(true);
    try {
      await changePassword(data);
      toast.success("Password updated successfully");
      reset();
    } catch (error: any) {
      const message =
        error?.response?.data?.message ?? "Failed to update password";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 bg-white">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Lock /> Change Password
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Enter a new password to replace the old password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm">Current Password</label>
          <input
            type="password"
            placeholder="Enter Current Password"
            className={`w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-primary transition-colors
              ${errors.current_password ? "border-red-400" : "border-gray-200"}`}
            {...register("current_password")}
          />
          {errors.current_password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.current_password.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm">New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            className={`w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-primary transition-colors
              ${errors.password ? "border-red-400" : "border-gray-200"}`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className={`w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:border-primary transition-colors
              ${errors.password_confirmation ? "border-red-400" : "border-gray-200"}`}
            {...register("password_confirmation")}
          />
          {errors.password_confirmation && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        <div className="text-xs text-gray-500 mt-4 space-y-1">
          <p
            className={`flex items-center gap-2 ${password.length >= 8 ? "text-green-600" : ""}`}>
            <Check size={14} className="border rounded-full border-current" />
            At least 8 characters
          </p>
          <p
            className={`flex items-center gap-2 ${/[0-9]/.test(password) ? "text-green-600" : ""}`}>
            <Check size={14} className="border rounded-full border-current" />
            Contains a number
          </p>
        </div>

        <Button
          type="submit"
          className="mt-5 cursor-pointer"
          disabled={loading}>
          {loading ? "updating.." : "update Password"}
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;

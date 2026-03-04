import { Lock } from "lucide-react";

function SecureCheckout() {
  return (
    <div className="bg-(--silver) p-4 flex items-start gap-3 relative">
      <div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-(--primary-color)" />
          <span className="text-(--primary-color) text-sm font-medium">
            Secure Checkout
          </span>
        </div>
        <p className="text-(--primary-color) text-sm mt-1">
          Your information is encrypted and secure. We never store your full
          card details.
        </p>
      </div>
      <div
        className="absolute bottom-0 right-0 w-6 h-6 bg-gray-400"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </div>
  );
}

export default SecureCheckout;

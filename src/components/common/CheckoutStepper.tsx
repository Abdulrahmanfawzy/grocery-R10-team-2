import { useCheckout } from "@/hooks/useCheckout";
import { Check } from "lucide-react";

const steps = [
  { key: "shipping", label: "Shipping" },
  { key: "payment", label: "Payment" },
  { key: "confirmation", label: "Confirmed & Tracking" },
];

const stepOrder = { shipping: 0, payment: 1, confirmation: 2 };

function CheckoutStepper() {
  const { currentStep } = useCheckout();
  const currentIndex = stepOrder[currentStep];

  return (
    <div className="flex items-center justify-center mb-8 mt-8 px-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step.key} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white
                  ${isCompleted || isActive ? "bg-(--primary-color)" : "bg-gray-300 "}`}>
                {isCompleted || (isActive && index === steps.length - 1) ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`hidden sm:block text-xs sm:text-sm mt-1 text-center max-w-[80px]
                  ${isCompleted || isActive ? "text-(--primary-color) font-medium" : "text-gray-500"}`}>
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`w-8 sm:w-16 md:w-32 lg:w-62.25 h-px mx-1 sm:mx-2 mb-0 sm:mb-5
                  ${index < currentIndex ? "bg-(--primary-color)" : "bg-gray-300 "}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CheckoutStepper;

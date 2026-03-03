const steps = [
  { key: "shipping", label: "Shipping" },
  { key: "payment", label: "Payment" },
  { key: "confirmation", label: "Review" },
];

function CheckoutStepper() {
  return (
    <div className="flex items-center justify-center mb-8 mt-8">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white
              ${index === 0 ? "bg-(--primary-color)" : "bg-(--silver)"}
            `}>
              {index + 1}
            </div>
            <span
              className={`text-sm mt-1
              ${index === 0 ? "text-(--primary-color) font-medium" : "text-(--silver)"}
            `}>
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div className="w-62.25 h-px mx-2 mb-5 bg-(--silver)" />
          )}
        </div>
      ))}
    </div>
  );
}

export default CheckoutStepper;

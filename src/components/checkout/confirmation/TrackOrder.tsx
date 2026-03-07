import { Package, Truck, MapPin, Check, CircleCheck } from "lucide-react";

const steps = [
  { label: "Order Placed", icon: Check, completed: true, active: false },
  { label: "Processing", icon: Package, completed: true, active: false },
  { label: "Shipped", icon: Truck, completed: true, active: false },
  { label: "Out for Delivery", icon: MapPin, completed: true, active: false },
  { label: "Delivered", icon: CircleCheck, completed: false, active: false },
];

const CIRCLE_SIZE = 40;
const CIRCLE_SIZE_SM = 32;
const completedIndex = steps.reduce(
  (acc, step, i) => (step.completed ? i : acc),
  0,
);

function TrackOrder() {
  return (
    <div className="border border-gray-200 rounded-md p-4 md:p-6">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Current Status</p>
          <p className="text-(--primary-color) text-base md:text-lg">
            Out for Delivery
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm md:text-base">Estimated Delivery</p>
          <p className="text-(--primary-color) text-base md:text-lg">
            Today, Nov 4
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 md:mt-8">
        <div className="relative flex justify-between w-full max-w-2xl">
          {/* Background line — desktop */}
          <div
            className="absolute h-0.5 bg-(--silver) z-0 hidden sm:block"
            style={{
              top: CIRCLE_SIZE / 2,
              left: CIRCLE_SIZE / 2,
              right: CIRCLE_SIZE / 2,
            }}
          />
          {/* Background line — mobile */}
          <div
            className="absolute h-0.5 bg-(--silver) z-0 sm:hidden"
            style={{
              top: CIRCLE_SIZE_SM / 2,
              left: CIRCLE_SIZE_SM / 2,
              right: CIRCLE_SIZE_SM / 2,
            }}
          />

          {/* Active line — desktop */}
          <div
            className="absolute h-0.5 bg-(--primary-color) z-0 hidden sm:block"
            style={{
              top: CIRCLE_SIZE / 2,
              left: CIRCLE_SIZE / 2,
              width: `calc(${(completedIndex / (steps.length - 1)) * 100}% - ${CIRCLE_SIZE / 2}px)`,
            }}
          />
          {/* Active line — mobile */}
          <div
            className="absolute h-0.5 bg-(--primary-color) z-0 sm:hidden"
            style={{
              top: CIRCLE_SIZE_SM / 2,
              left: CIRCLE_SIZE_SM / 2,
              width: `calc(${(completedIndex / (steps.length - 1)) * 100}% - ${CIRCLE_SIZE_SM / 2}px)`,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const filled = step.completed || step.active;
            return (
              <div key={index} className="flex flex-col z-10 items-center">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                    ${filled ? "bg-(--primary-color)" : "bg-gray-200"}`}>
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? "text-white" : "text-(--primary-color)"}`}
                  />
                </div>
                <p
                  className={`hidden sm:block text-xs mt-2 leading-tight max-w-15 text-center
                    ${filled ? "text-(--primary-color)" : "text-gray-400"}`}>
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;

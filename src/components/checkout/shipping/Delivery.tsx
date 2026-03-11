import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShippingBadge from "./ShippingBadge";
import {
  BadgeDollarSign,
  Car,
  Clock,
  ClockFading,
  RotateCcw,
  Truck,
} from "lucide-react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type { ShippingFormData } from "@/lib/schemas/shippingSchema";

interface Props {
  register: UseFormRegister<ShippingFormData>;
  errors: FieldErrors<ShippingFormData>;
  watch: UseFormWatch<ShippingFormData>;
  setValue: UseFormSetValue<ShippingFormData>;
}

function Delivery({ register, errors, watch, setValue }: Props) {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Customize Your Delivery
      </h2>

      <div className="space-y-4 border border-gray-200 rounded-xl p-6">
        <ShippingBadge
          title={"Fulfilment Method"}
          iconOne={Truck}
          iconTwo={Car}
          delivery={"Delivery"}
          pickUp={"Pick-Up"}
          optionOne="delivery"
          optionTwo="pickup"
          value={watch("deliveryMethod")}
          onChange={(val) =>
            setValue("deliveryMethod", val as "delivery" | "pickup")
          }
        />

        <div>
          <div className="space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11835"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="mt-4.75 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Input type="text" placeholder="City" {...register("city")} />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Province"
                {...register("province")}
              />
              {errors.province && (
                <p className="text-red-500 text-sm">
                  {errors.province.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Postal Code"
                {...register("postalCode")}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <ShippingBadge
          title={"Schedule Delivery"}
          iconOne={RotateCcw}
          iconTwo={Clock}
          delivery={"Deliver Now"}
          pickUp={"Deliver Later"}
          optionOne={"now"}
          optionTwo={"later"}
          value={watch("scheduleDelivery")}
          onChange={(val) =>
            setValue("scheduleDelivery", val as "now" | "later")
          }
        />

        <ShippingBadge
          title={"Delivery Speed"}
          iconOne={BadgeDollarSign}
          iconTwo={ClockFading}
          delivery={"Standard"}
          pickUp={"Priority"}
          optionOne="standard"
          optionTwo="priority"
          value={watch("deliverySpeed")}
          onChange={(val) =>
            setValue("deliverySpeed", val as "standard" | "priority")
          }
        />

        <div className="space-y-1.5 mt-6">
          <Label htmlFor="arrival">Estimated Arrival</Label>
          <Input
            id="arrival"
            type="text"
            placeholder="45 Min, 30/1/25 at 2:30 PM"
            className="w-full md:w-[75%] lg:w-[50%]"
            {...register("estimatedArrival")}
          />
        </div>
      </div>
    </div>
  );
}

export default Delivery;

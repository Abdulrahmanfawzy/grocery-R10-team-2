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

function Delivery() {
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
        />

        <div>
          <div className="space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11835"
            />
          </div>

          <div className="mt-4.75 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input type="text" placeholder="City" />
            <Input type="text" placeholder="Provenance" />
            <Input type="text" placeholder="Postal Code" />
          </div>
        </div>

        <ShippingBadge
          title={"Schedule Delivery"}
          iconOne={RotateCcw}
          iconTwo={Clock}
          delivery={"Deliver Now"}
          pickUp={"Deliver Later"}
        />

        <ShippingBadge
          title={"Delivery Speed"}
          iconOne={BadgeDollarSign}
          iconTwo={ClockFading}
          delivery={"Standard"}
          pickUp={"Priority"}
        />

        <div className="space-y-1.5 mt-6">
          <Label htmlFor="arrival">Estimated Arrival</Label>
          <Input
            id="arrival"
            type="text"
            placeholder="45 Min, 30/1/25 at 2:30 PM"
            className="w-full md:w-[75%] lg:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Delivery;

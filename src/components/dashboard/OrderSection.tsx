import { ArrowRight, Calendar, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const OrderSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
      {/* Current Cart */}
      <div className="bg-white rounded-xl border p-6  flex flex-col justify-between gap-4 ">
        {/* Header */}
        <div className="flex justify-between items-centermb-4 ">
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} className="text-primary" />
            <span className="text-primary font-medium">Current Cart</span>
          </div>
          {/* button */}
          <Button
            variant="secondary"
            className="text-primary font-medium cursor-pointer"
          >
            View Cart
          </Button>
        </div>
        {/* Info Box */}
        <div className="bg-gray-100 p-4 flex justify-between shadow-sm rounded-lg ">
          <div>
            <p>5 items in cart</p>
            <p>last updated: 2 Hours ago</p>
          </div>
          <p>£28.45</p>
        </div>
        {/* Button */}
        <Button className="w-full flex items-center py-6 cursor-pointer">
          Coutinue Shopping <ChevronRight />
        </Button>
      </div>

      {/* Upcoming Delivery */}
      <div className="bg-white rounded-xl border p-6  flex flex-col justify-between gap-4">
        {/* Header */}
        <div className="flex justify-between items-centermb-4 ">
          <div className="flex items-center gap-2">
            <Calendar size={24} className="text-primary" />
            <span className="text-primary font-medium">Upcoming Delivery</span>
          </div>
          {/* button */}
          <Button
            variant="secondary"
            className="text-primary font-medium cursor-pointer"
          >
            Track
          </Button>
        </div>
        {/* Info Box */}
        <div className="bg-gray-100 p-4 flex justify-between shadow-sm rounded-lg ">
          <div>
            <p className="font-medium">Tomorrow, Nov 28</p>
            <p className="text-sm text-gray-600 mt-1">10:00 AM - 12:00 PM</p>
            <p className="text-xs text-gray-500 mt-1">Order #GP20251126001</p>
          </div>
          <p>£28.45</p>
        </div>
        {/* Button */}
        <Button className="w-full flex items-center py-6 cursor-pointer">
          View Details <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default OrderSection;

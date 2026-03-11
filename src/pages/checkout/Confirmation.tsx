import DriverInfo from "@/components/checkout/confirmation/DriverInfo";
import OrderOptions from "@/components/checkout/confirmation/OrderOptions";
import TrackOrder from "@/components/checkout/confirmation/TrackOrder";
import OrderSummary from "@/components/checkout/shipping/OrderSummary";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import CheckoutStepper from "@/components/common/CheckoutStepper";
import CheckoutLayout from "@/components/layout/CheckoutLayout";


function Confirmation() {
  return (
    <CheckoutLayout>
      <div className="max-w-6xl mx-auto py-5 px-5">
        <CheckoutBreadcrumb />
        <CheckoutStepper />

        <div className="p-2 mt-8 md:mt-14">
          <h4 className="font-medium text-xl mb-4 p-1">Track Your Order</h4>
          <TrackOrder />
        </div>

        <div className="p-2 mt-8 md:mt-14 mb-5">
          <h4 className="font-medium text-xl mb-4 p-1">Driver Information</h4>
          <DriverInfo />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 mb-12">
          <div className="flex-1">
            <OrderSummary />
          </div>
          <div className="flex-1">
            <OrderOptions />
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
}

export default Confirmation;

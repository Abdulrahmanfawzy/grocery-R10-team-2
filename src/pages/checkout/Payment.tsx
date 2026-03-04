import OrderItemsScroll from "@/components/common/OrderItemsScroll";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import CheckoutStepper from "@/components/common/CheckoutStepper";
import CheckoutContext from "@/lib/context/checkout.context";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import CheckoutLayout from "@/components/layout/CheckoutLayout";
import PaymentMethod from "@/components/checkout/payment/PaymentMethod";
import AmountSection from "@/components/checkout/payment/AmountSection";

function Payment() {
  const navigate = useNavigate();

  return (
    <CheckoutLayout>
      <CheckoutContext.Provider value={{ currentStep: "payment" }}>
        <div className="max-w-6xl mx-auto py-5 px-5">
          <CheckoutBreadcrumb />
          <CheckoutStepper />

          {/* Payment Method */}
          <PaymentMethod />

          {/* Order Summary */}
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold text-gray-800 mb-4 p-1">
              Order Summary
            </h2>
            <div className="flex items-start gap-12 mb-12">
              <div className="flex-[2] border border-gray-200 rounded-xl">
                <OrderItemsScroll />
              </div>
              <div className="flex-1">
                <AmountSection />
              </div>
            </div>
          </div>
          <div className="max-w-sm">
            <ButtonPrimary
              btn={"Confirm Payment & Go To Checkout "}
              btnWidth={"w-full"}
              onClick={() => navigate("/checkout/confirmation")}
            />
          </div>
        </div>
      </CheckoutContext.Provider>
    </CheckoutLayout>
  );
}

export default Payment;

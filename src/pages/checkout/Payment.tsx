import OrderItemsScroll from "@/components/common/OrderItemsScroll";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import CheckoutStepper from "@/components/common/CheckoutStepper";
import CheckoutContext from "@/lib/context/checkout.context";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import CheckoutLayout from "@/components/layout/CheckoutLayout";
import PaymentMethod from "@/components/checkout/payment/PaymentMethod";

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
          <div className="max-w-sm">
            <h2 className="text-base font-semibold text-gray-800 mb-4 p-1">
              Order Summary
            </h2>
            <div className="border border-gray-200 rounded-xl mb-12">
              <OrderItemsScroll />
            </div>
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

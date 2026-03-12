import OrderItemsScroll from "@/components/common/OrderItemsScroll";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import CheckoutStepper from "@/components/common/CheckoutStepper";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import CheckoutLayout from "@/components/layout/CheckoutLayout";
import PaymentMethod from "@/components/checkout/payment/PaymentMethod";
import AmountSection from "@/components/checkout/payment/AmountSection";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe/stripe";
import { storeOrder } from "@/lib/api/order";
import { useCheckout } from "@/lib/context/checkout.context";

function Payment() {
  const navigate = useNavigate();
  const { summary } = useCheckout();

  const handleConfirmPayment = async () => {
    try {
      const address_id = localStorage.getItem("address_id");
      const shippingRaw = localStorage.getItem("shipping_data");
      const shippingData = shippingRaw ? JSON.parse(shippingRaw) : null;

      await storeOrder({
        payment_method: "cash_on_delivery",
        delivery_type: shippingData?.deliveryMethod ?? "delivery",
        address_id: address_id ? parseInt(address_id) : 0,
        amount: summary.total,
      });

      navigate("/checkout/confirmation");
    } catch (error: any) {
      console.log("Order error:", error.response?.data);
    }
  };

  return (
    <CheckoutLayout>
      <Elements stripe={stripePromise}>
        <div className="max-w-6xl mx-auto py-5 px-5">
          <CheckoutBreadcrumb />
          <CheckoutStepper />

          <PaymentMethod />

          <div className="w-full max-w-4xl">
            <h2 className="text-base font-semibold text-gray-800 mb-4 p-1">
              Order Summary
            </h2>
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16 mb-12">
              <div className="w-full lg:flex-[2] border border-gray-200 rounded-xl">
                {/* ✅ No savedItems prop needed — OrderItemsScroll reads from context */}
                <OrderItemsScroll />
              </div>
              <div className="w-full lg:flex-1">
                <AmountSection summary={summary} />
              </div>
            </div>
          </div>

          <div className="w-full sm:max-w-sm">
            <ButtonPrimary
              btn={"Confirm Payment & Go To Checkout"}
              btnWidth={"w-full"}
              onClick={handleConfirmPayment}
            />
          </div>
        </div>
      </Elements>
    </CheckoutLayout>
  );
}

export default Payment;

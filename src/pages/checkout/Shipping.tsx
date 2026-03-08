import CheckoutStepper from "@/components/common/CheckoutStepper";
import ContactInfo from "@/components/checkout/shipping/ContactInfo";
import Delivery from "@/components/checkout/shipping/Delivery";
import Notes from "@/components/checkout/shipping/Notes";
import OrderSummary from "@/components/checkout/shipping/OrderSummary";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import CheckoutContext from "@/lib/context/checkout.context";
import { useNavigate } from "react-router-dom";
import CheckoutLayout from "@/components/layout/CheckoutLayout";

function Shipping() {
  const navigate = useNavigate();

  return (
    <CheckoutLayout>
      <CheckoutContext.Provider value={{ currentStep: "shipping" }}>
        <div className="max-w-6xl mx-auto py-5 px-5">
          <CheckoutBreadcrumb />
          <CheckoutStepper />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="flex flex-col gap-6">
              <ContactInfo />
              <Delivery />
            </div>
            <OrderSummary />
          </div>

          <Notes />

          <ButtonPrimary
            btn={"Continue Checkout"}
            btnWidth={"w-full sm:w-[60%] lg:w-[40%]"}
            onClick={() => navigate("/checkout/payment")}
          />
        </div>
      </CheckoutContext.Provider>
    </CheckoutLayout>
  );
}

export default Shipping;

import CheckoutStepper from "@/components/checkout/shipping/CheckoutStepper";
import ContactInfo from "@/components/checkout/shipping/ContactInfo";
import Delivery from "@/components/checkout/shipping/Delivery";
import Notes from "@/components/checkout/shipping/Notes";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import ButtonPrimary from "@/components/common/ButtonPrimary";

function Shipping() {
  return (
    <div className="max-w-6xl mx-auto py-5 px-5">
      <CheckoutBreadcrumb currentPage="Checkout (shipping)" />
      <CheckoutStepper />
      <div className="grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-6">
          <ContactInfo />
          <Delivery />
        </div>
        {/* <OrderSummary /> */}
      </div>

      <Notes />

      <ButtonPrimary btn={"Continue Checkout"} btnWidth={"w-[40%]"} />
    </div>
  );
}

export default Shipping;

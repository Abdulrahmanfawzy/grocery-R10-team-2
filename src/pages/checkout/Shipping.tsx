import CheckoutStepper from "@/components/common/CheckoutStepper";
import ContactInfo from "@/components/checkout/shipping/ContactInfo";
import Delivery from "@/components/checkout/shipping/Delivery";
import Notes from "@/components/checkout/shipping/Notes";
import OrderSummary from "@/components/checkout/shipping/OrderSummary";
import CheckoutBreadcrumb from "@/components/common/Breadcrumb";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import CheckoutLayout from "@/components/layout/CheckoutLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingSchema } from "@/lib/schemas/shippingSchema";
import type { ShippingFormData } from "@/lib/schemas/shippingSchema";
import { storeAddress } from "@/lib/api/addresses";

function Shipping() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      deliveryMethod: "delivery",
      scheduleDelivery: "now",
      deliverySpeed: "standard",
    },
  });

  const onSubmit = async (data: ShippingFormData) => {
    try {
      const response = await storeAddress({
        full_name: `${data.firstName} ${data.lastName}`,
        phone: data.phoneNumber,
        street_address: data.address,
        city: data.city,
      });

      localStorage.setItem("address_id", response.data.id);
      localStorage.setItem("shipping_data", JSON.stringify(data));

      navigate("/checkout/payment");
    } catch (error: any) {
      console.log("API error details:", error.response?.data);
    }
  };

  return (
    <CheckoutLayout>
      <div className="max-w-6xl mx-auto py-5 px-5">
        <CheckoutBreadcrumb />
        <CheckoutStepper />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-6">
              <ContactInfo register={register} errors={errors} />
              <Delivery
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
              />
            </div>
            <OrderSummary />
          </div>

          <Notes register={register} />
          <ButtonPrimary btn={"Continue Checkout"} btnWidth={"w-[40%]"} />
        </form>
      </div>
    </CheckoutLayout>
  );
}

export default Shipping;

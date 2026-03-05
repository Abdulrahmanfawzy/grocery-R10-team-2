import { type LucideIcon } from "lucide-react";

interface Props {
  title: string;
  iconOne: LucideIcon;
  iconTwo: LucideIcon;
  delivery: string;
  pickUp: string;
}

function ShippingBadge({
  title,
  iconOne: IconOne,
  iconTwo: IconTwo,
  delivery,
  pickUp,
}: Props) {
  return (
    <div className="space-y-2">
      <h3>{title}</h3>

      <div className="flex gap-20">
        <div className="flex gap-2 bg-(--silver) px-7.5 py-2.5 rounded-lg w-fit text-(--primary-color)">
          <IconOne strokeWidth={1} />
          <span>{delivery}</span>
        </div>

        <div className="flex gap-1 bg-(--silver) px-7.5 py-2.5 rounded-lg w-fit text-(--primary-color)">
          <IconTwo strokeWidth={1} />
          <span>{pickUp}</span>
        </div>
      </div>
    </div>
  );
}

export default ShippingBadge;

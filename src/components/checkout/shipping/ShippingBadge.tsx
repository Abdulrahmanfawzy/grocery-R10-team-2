import { type LucideIcon } from "lucide-react";

interface Props {
  title: string;
  iconOne: LucideIcon;
  iconTwo: LucideIcon;
  delivery: string;
  pickUp: string;
  optionOne: string;
  optionTwo: string;
  value: string;
  onChange: (val: string) => void;
}

function ShippingBadge({
  title,
  iconOne: IconOne,
  iconTwo: IconTwo,
  delivery,
  pickUp,
  optionOne,
  optionTwo,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <h3>{title}</h3>

      <div className="flex gap-20">
        <div
          onClick={() => onChange(optionOne)}
          className={`flex gap-2 px-4 py-2.5 rounded-lg w-fit cursor-pointer hover:opacity-80 transition-opacity
    ${value === optionOne ? "bg-(--primary-color) text-white" : "bg-(--silver) text-(--primary-color)"}`}>
          <IconOne strokeWidth={1} />
          <span>{delivery}</span>
        </div>

        <div
          onClick={() => onChange(optionTwo)}
          className={`flex gap-2 px-4 py-2.5 rounded-lg w-fit cursor-pointer hover:opacity-80 transition-opacity
    ${value === optionTwo ? "bg-(--primary-color) text-white" : "bg-(--silver) text-(--primary-color)"}`}>
          <IconTwo strokeWidth={1} />
          <span>{pickUp}</span>
        </div>
      </div>
    </div>
  );
}

export default ShippingBadge;

import { Plus } from "lucide-react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import CardItem from "./CardItem";

const savedCards = [
  {
    id: "1",
    icon: FaCcVisa,
    title: "Visa •••• 4242",
    subtitle: "Expires 12/25",
  },
  {
    id: "2",
    icon: FaCcMastercard,
    title: "Mastercard •••• 8888",
    subtitle: "Expires 08/26",
  },
];

function SavedCards() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-800">Saved Cards</h3>
      {savedCards.map((card) => (
        <CardItem
          key={card.id}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
      <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 w-full">
        <Plus className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-600">Add New Card</span>
      </button>
    </div>
  );
}

export default SavedCards;

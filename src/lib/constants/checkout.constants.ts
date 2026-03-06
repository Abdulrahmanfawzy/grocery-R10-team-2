import type { OrderSummary } from '@/lib/types/checkout.types';
import cart1 from "@/assets/img/cart1.png";
import cart2 from "@/assets/img/cart2.png";
import cart3 from "@/assets/img/cart3.png";
import cart4 from "@/assets/img/cart4.png";

const orderSummary: OrderSummary = {
  items: [
    {
      id: "1",
      name: "Premium Organic Orange – 1KG",
      quantity: 1,
      price: 20,
      imageUrl: cart1,
      inStock: true,
    },
    {
      id: "2",
      name: "Sausage With Fat Balady",
      quantity: 1,
      price: 400,
      imageUrl: cart2,
      inStock: true,
    },
    {
      id: "3",
      name: "COOKS – SALT – 400G",
      quantity: 4,
      price: 12,
      imageUrl: cart3,
      inStock: true,
    },
    {
      id: "4",
      name: "Zanary White Eggs – 30 Pieces",
      quantity: 1,
      price: 189,
      imageUrl: cart4,
      inStock: false,
    },
  ],
  subtotal: 555.45,
  shipping: 25,
  total: 580.45,
};

export default orderSummary;
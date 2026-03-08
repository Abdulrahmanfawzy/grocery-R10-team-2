import image1 from "../../assets/img/cart1.png"
import image2 from "../../assets/img/cart1.png"
export type Product = {
  id: number;
  name: string;
  qty: number;
  image: string;
};

export type Order = {
  id: string;
  date: string;
  items: number;
  status: string;
  total: string;
  products: Product[];
};

export const orders: Order[] = [
  {
    id: "GP001",
    date: "Nov 24, 2025",
    items: 6,
    status: "Completed",
    total: "£250",
    products: [
      {
        id: 1,
        name: "Premium Orange",
        qty: 1,
        image: image1,
      },
      {
        id: 2,
        name: "Premium Banana",
        qty: 1,
        image: image2,
      },
    ],
  },
];
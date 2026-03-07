import { HandCoins, ListChecks, PoundSterling, Star } from "lucide-react";
import Image from "../../assets/img/cart1.png" ;
export type InsightCard = {
    id : number;
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
};
export const insightCards: InsightCard[] = [
  {
    id:601,
    title: "Monthly Spend",
    value: "£342.18",
    description: "↑ 12% from last month",
    icon: PoundSterling,
  },
  {
    id:602,
    title: "Orders This Month",
    value: "8",
    description: "Every ~3.7 days",
    icon: ListChecks,
  },
  {
    id:603,
    title: "Total Savings",
    value: "£48.50",
    description: "Coupons & discounts",
    icon: HandCoins,
  },
  {
    id:604,
    title: "Avg Order Value",
    value: "£42.77",
    description: "Based on 8 orders",
    icon: Star,
  },
];

export type CategoryProgress = {
    id:number;
  name: string;
  percent: number;
};
export const categoryProgress: CategoryProgress[] = [
  {
    id:607,
    name: "Fresh Produce",
    percent: 65,
  },
  {
    id:608,
    name: "Dairy",
    percent: 45,
  },
  {
    id:609,
    name: "Bakery",
    percent: 38,
  },
  {
    id:610,
    name: "Snacks",
    percent: 28,
  },
];

export type Order = {
  id: string;
  date: string;
  price: string;
  items: number;
  status: "Delivered" | "Pending";
};

export const recentOrders: Order[] = [
  {
    id: "#GP001",
    date: "Nov 24, 2025",
    price: "£45.32",
    items: 8,
    status: "Delivered",
  },
  {
    id: "#GP002",
    date: "Nov 22, 2025",
    price: "£38.90",
    items: 6,
    status: "Delivered",
  },
  {
    id: "#GP003",
    date: "Nov 18, 2025",
    price: "£52.10",
    items: 10,
    status: "Delivered",
  },
  {
    id: "#GP004",
    date: "Nov 18, 2025",
    price: "£52.10",
    items: 10,
    status: "Delivered",
  }
];

export type TopPurchase = {
    id:number;
  name: string;
  image: string;
  bought: number;
};

export const topPurchases: TopPurchase[] = [
  {
    id:620,
    name: "Organic Bananas",
    image: Image,
    bought: 24,
  },
  {
    id:621,
    name: "Fresh Milk",
    image:Image,
    bought: 18,
  },
  {
    id:622,
    name: "Eggs",
    image:Image,
    bought: 15,
  },
  {
    id:623,
    name: "Bread",
    image: Image,
    bought: 12,
  },
];
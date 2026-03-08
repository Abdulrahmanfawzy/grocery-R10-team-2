import visa from '../../assets/img/symbols.png';
import masterCard from "../../assets/img/logo.png";
import { Apple, Banknote, CreditCard, Wallet, type LucideIcon } from 'lucide-react';
type Card = {
  id: number;
  brand: string;
  number: string;
  expiry: string;
  image:string ;
};

export const cards: Card[] = [
  {
    id: 801,
    brand: "Visa",
    number: "**** 4242",
    expiry: "12/25",
    image:visa
  },
  {
    id: 802,
    brand: "Mastercard",
    number: "**** 8888",
    expiry: "08/26",
    image :masterCard
  },
];

type PaymentMethod = {
  id: number;
  name: string;
  description: string;
  icon:LucideIcon
};

export const methods: PaymentMethod[] = [
  {
    id: 901,
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    icon: Banknote 
  },
  {
    id: 902,
    name: "Apple Pay",
    description: "Quick checkout with Apple Pay",
    icon :Apple
  },
  {
    id: 903,
    name: "Google Pay",
    description: "Quick checkout with Google Pay",
    icon : CreditCard
  },
  {
    id: 904,
    name: "Wallet Pay",
    description: "Digital wallet payment",
    icon: Wallet
  },
];

type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
  status: "Completed";
  refund?: boolean;
};

export const transactions: Transaction[] = [
  {
    id: 911,
    title: "Order #GP001",
    date: "Nov 24, 2025",
    amount: "£45.32",
    status: "Completed",
  },
  {
    id: 912,
    title: "Refund Order #GP001",
    date: "Nov 20, 2025",
    amount: "+ £45.32",
    status: "Completed",
    refund: true,
  },
  {
    id: 913,
    title: "Order #GP002",
    date: "Nov 18, 2025",
    amount: "£67.89",
    status: "Completed",
  },
];
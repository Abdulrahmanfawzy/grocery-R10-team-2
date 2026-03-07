type notificationPrps = {
    id:number;
    title : string ; 
    items: string[]
}
export const sections : notificationPrps[] = [
  {
 id:701,
    title: "Order & Delivery Updates",
    items: [
      "Order Confirmation",
      "Order Shipped",
      "Delivery Updates",
      "Out-of-Stock Alerts",
    ],
  },
  {
 id:702,
    title: "Account & Reminders",
    items: [
      "Cart Reminders",
      "Payment & Billing Notifications",
      "Account Security Alerts",
    ],
  },
  {
     id:703,
    title: "Communication Channels",
    items: [
      "Email Notifications",
      "SMS Notifications",
      "Push Notifications",
    ],
  },
];

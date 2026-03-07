import { orders } from "@/lib/data/orderHistory";
import OrderCard from "./OrderCard";

const Orderlist = () => {
  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orderlist;
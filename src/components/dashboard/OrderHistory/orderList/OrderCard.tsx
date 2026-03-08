import { Button } from "@/components/ui/button";
import type { Order } from "@/lib/data/orderHistory";

type OrderCardProps = {
  order: Order;
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="border rounded-xl p-5 bg-white">

      <div className="flex justify-between items-center border rounded-lg p-4">
        <div>
          <p className="font-medium">
            Order #{order.id}
          </p>

          <span className="text-sm text-gray-500">
            {order.date} • {order.items} Items
          </span>
        </div>

        <span className="text-green-600 bg-green-100 px-3 py-1 rounded">
          {order.status}
        </span>
      </div>

      <div className="flex gap-4 mt-4">

        {order.products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg"
          >
            <img
              src={product.image}
              className="w-10 h-10 object-contain"
            />

            <div>
              <p className="text-sm font-medium">
                {product.name}
              </p>

              <span className="text-xs text-gray-500">
                Qty : {product.qty}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-gray-100 px-6 py-4 rounded-lg flex items-center">
          +4 More
        </div>

      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="text-xl font-semibold text-blue-900">
          {order.total}
        </p>

        <div className="flex gap-3">
          <Button variant={'secondary'} className="cursor-pointer">
            Download Receipt
          </Button>

          <Button variant={'secondary'} className="cursor-pointer">
            Rate
          </Button>

          <Button variant={'default'} className="cursor-pointer">
            Reorder
          </Button>
        </div>
      </div>

    </div>
  );
};

export default OrderCard;
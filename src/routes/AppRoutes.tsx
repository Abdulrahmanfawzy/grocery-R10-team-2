import { Route, Routes } from "react-router-dom";
import Shipping from "@/pages/checkout/Shipping";
import Payment from "@/pages/checkout/Payment";
import Confirmation from "@/pages/checkout/Confirmation";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/checkout/" element={<Shipping />}></Route>
        <Route path="/checkout/shipping" element={<Shipping />}></Route>
        <Route path="/checkout/payment" element={<Payment />}></Route>
        <Route path="/checkout/confirmation" element={<Confirmation />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Shipping from "./pages/checkout/Shipping";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Shipping />
    </BrowserRouter>
  );
};

export default App;

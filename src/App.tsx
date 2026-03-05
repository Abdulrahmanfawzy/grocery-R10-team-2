<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
=======
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/route";
>>>>>>> parent of 1f44f03 (Merge branch 'feature/register' into dev)

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
export default App;

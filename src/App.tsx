import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;

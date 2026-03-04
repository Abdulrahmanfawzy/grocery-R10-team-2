import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/route";

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;

//app.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { ToastContainer} from 'react-toastify';


const App = () => {
  return <>
    <RouterProvider router={router} />
    <ToastContainer/>
  </>
}
export default App;

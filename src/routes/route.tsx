import Mainlayout from "@/components/layout/mainLayout/Mainlayout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
export const route = createBrowserRouter([
    {path: "/", element: <Mainlayout/> ,children: [
        {index: true, element: <Home/>}
    ]},
])
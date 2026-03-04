// routs
import Mainlayout from "@/components/layout/mainLayout/Mainlayout";
import Cart from "@/pages/cart/Cart";
import Home from "@/pages/home/Home";
import ProductList from "@/pages/products/ProductList";
import { createBrowserRouter } from "react-router-dom";
export const route = createBrowserRouter([
    {
        path: "/", element: <Mainlayout />, children: [
            { {index: true, element: <Home/>} },
            { path: "/products", element: <ProductList /> },
            { path: "/cart", element: <Cart/> }
        ]
    },
])

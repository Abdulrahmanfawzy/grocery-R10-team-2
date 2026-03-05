import Mainlayout from "@/components/layout/mainLayout/Mainlayout";
import Profilelayout from "@/components/layout/profilelayout/Profilelayout";
import Home from "@/pages/home/Home";
import Addresess from "@/pages/home/profile/Addresess";
import Dashboard from "@/pages/home/profile/Dashboard";
import Help from "@/pages/home/profile/Help";
import Loyalty from "@/pages/home/profile/Loyalty";
import OrderHistory from "@/pages/home/profile/OrderHistory";
import Payment from "@/pages/home/profile/payment";
import PersonalInfo from "@/pages/home/profile/PersonalInfo";
import Security from "@/pages/home/profile/Security";
import Settings from "@/pages/home/profile/Settings";
import SmartLists from "@/pages/home/profile/SmartLists";
import { createBrowserRouter } from "react-router-dom";
export const route = createBrowserRouter([
    {path: "/", element: <Mainlayout/> ,children: [
        {index: true, element: <Home/>},
        {
            path:'profile',
            element:<Profilelayout />,
            children :[
                { index: true, element: <Dashboard /> },
    { path: "personal-info", element: <PersonalInfo /> },
    { path: "payment", element: <Payment /> },
    { path: "orders", element: <OrderHistory /> },
    { path: "smart", element: <SmartLists /> },
    { path: "address", element: <Addresess /> },
    { path: "security", element: <Security /> },
    { path: "loyalty", element: <Loyalty /> },
    { path: "help", element: <Help /> },
    { path: "settings", element: <Settings /> }

            ]
        }
    ]},
])
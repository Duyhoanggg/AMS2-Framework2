import { createBrowserRouter, Navigate } from "react-router-dom";

import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWeb from "./layouts/LayoutWeb";
import Home from "./pages/admin/Home";
import Add from "./pages/admin/Add";
import Edit from "./pages/admin/Edit";
import Homee from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/Cart";



export const routers = createBrowserRouter([
    
    { path: "/",
         element: <LayoutWeb /> ,
        children: [
            {index:true, element:<Homee/>},
            { path: "products/:id", element: <ProductDetail /> },
            { path: "cart", element: <CartPage /> },
        ]
},
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <h2 className="font-bold text-2xl">Thống kê</h2>,
            },
            {
                path: "product",
                element: <Home />,
            },
            {
                path: "product/add",
                element: <Add />,
            },
            {
                path: "products",
                element: <Homee />,
            },
            {
                path: "product/:idProduct/edit",
                element: <Edit />,
            },
        ],
    },
]);
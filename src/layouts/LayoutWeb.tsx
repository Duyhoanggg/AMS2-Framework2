import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

type Props = {}

const LayoutWeb = (props: Props) => {
  return (
    <header >
      <nav className="p-4  flex justify-between">
        <ul className="flex justify-center space-x-4">
          <li className="bg-black p-2 text-white rounded-lg text-2xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="bg-black text-white p-2 rounded-lg text-2xl">
            <Link to={"products"}>Product</Link>
          </li>
        </ul>
        <div className="text-4xl">
          <Link to={"cart"}>
           <p className=" bg-black p-2 text-white rounded-lg text-2xl"> Giỏ hàng</p>
          </Link>
        </div>
      </nav>
      <Outlet/>
    </header>
  );
}

export default LayoutWeb
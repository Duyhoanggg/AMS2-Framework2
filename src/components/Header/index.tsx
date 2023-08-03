import React from "react";
import { Link } from "react-router-dom";
type Props = {};
import { FcPaid } from "react-icons/fc";
const Header = (props: Props) => {
  return (
    <header className="header_container bg-black">
      <nav className="p-4  flex justify-between">
        <ul className="flex justify-center space-x-4">
          <li className="bg-white p-2 rounded-lg text-2xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="bg-white p-2 rounded-lg text-2xl">
            <Link to={"products"}>Product</Link>
          </li>
        </ul>
        <div className="text-4xl">
          <Link className="bg-white p-2 rounded-lg text-2xl" to={"cart"}>
            Giỏ hàng
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

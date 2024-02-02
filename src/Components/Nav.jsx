import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
export default function Nav() {
  return (
    <div className='w-full flex h-[10vh] item-center'>
      <div className="h-full w-[10%] flex items-center justify-center border-r">
      <FaShoppingBag />
      </div>
      <nav className="flex items-center px-10 justify-around w-full">
        <input type="text" placeholder="Serach the product" className="bg-gray-100 h-[2rem] p-1 rounded-lg outline-none" />
        <ul>
          <li><IoCartSharp /></li>
        </ul>
      </nav>
    </div>
  );
}

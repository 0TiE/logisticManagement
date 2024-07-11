import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div>
      <ul>
      <li>
          <button><HiOutlineHome/></button>
        </li>
        <li>
          <button><HiOutlineMenuAlt2/></button>
        </li>
        <li>
          <button><HiOutlineMenuAlt2/></button>
        </li>
        <li>
          <button><HiOutlineMenuAlt2/></button>
        </li>
        <li>
          <button><HiOutlineMenuAlt2/></button>
        </li>
        <li>
          <button><HiOutlineMenuAlt2/></button>
        </li>

      </ul>
    </div>
  );
}

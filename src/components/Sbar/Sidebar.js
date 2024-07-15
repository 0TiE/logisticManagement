import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiDocument,
  HiInbox,
  HiLockClosed,
  HiShoppingBag,
  HiTruck,
  HiViewBoards,
} from "react-icons/hi";
import { HiForward } from "react-icons/hi2";
import { Link } from "react-router-dom";



const SidebarComponent = () => {
  return (
    <Sidebar aria-label="Default sidebar example" className="h-full px-3 ">
      {/* <Sidebar.Logo href="#" img={connex} imgAlt="Flowbite logo" className='txt'>
          Logistic
        </Sidebar.Logo> */}
      <Sidebar.Items className="active:bg-violet-700">
        <Sidebar.ItemGroup>
          <Link to="/">
            <Sidebar.Item href="#" icon={HiChartPie} >
              Dashboard
            </Sidebar.Item>
          </Link>

          <Link to="/product">
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              PRODUCT
            </Sidebar.Item>
          </Link>

          <Link to="/">
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              OUT PRODUCT
            </Sidebar.Item>
          </Link>
          <Link to="">
            <Sidebar.Item href="#" icon={HiTruck}>
              DELIVERY TRACKING
            </Sidebar.Item>
          </Link>
          <Link to="/StockManageme">
            <Sidebar.Item href="#" icon={HiViewBoards}>
              STOCK MANAGE
            </Sidebar.Item>
          </Link>
          <Link to="/GRNEntry">
            <Sidebar.Item href="#" icon={HiDocument}>
              GRN ENTRY
            </Sidebar.Item>
          </Link>

          <Link to="/GRNEntry">
            <Sidebar.Item href="#" icon={HiForward}>
              TRACKING
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup >
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            LOG OUT
          </Sidebar.Item>
         
          <Sidebar.Item href="#" icon={HiLockClosed}>
            SETTING
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarComponent;

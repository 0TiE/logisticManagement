import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { GRNEntry } from "./Pages/GRNEntry";
import { Product } from "./Pages/Product";
import SidebarComponent from "./components/Sbar/Sidebar";
import { OutProduct } from "./Pages/OutProduct";
import { StockManageme, StockManagement } from "./Pages/StockManageme";
import { Tracking } from "./Pages/Tracking";
import { DeliveryTracking } from "./Pages/DeliveryTracking";
import NavbarComponnent from "./components/Nbar/Navbar";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/GRNEntry" element={<GRNEntry />} />
        <Route path="/OutProduct" element={<OutProduct />} />
        <Route path="/StockManageme" element={<StockManagement />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/DeliveryTracking" element={<DeliveryTracking />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

const Root = () => {
  return (
    <>  
      <NavbarComponnent/>
      <div className="flex h-screen ">
      
        <SidebarComponent/>
        <div className="flex-1 me-4 overflow-y-auto p-4 mb-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

import React from 'react'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Accordion } from "flowbite-react";


export default function OutProduct()  {
   
    return (
    
     
      <Tabs aria-label="Tabs with icons" variant="underline">
        <Tabs.Item active title="Product" icon={MdProductionQuantityLimits }>
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="To Deliver" icon={CiDeliveryTruck}>
          This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>

      
      </Tabs>
    );
  }
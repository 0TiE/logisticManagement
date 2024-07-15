import { Button, Modal, Select } from "flowbite-react";
import React, { useState } from "react";
import image from "../img/ConnexIT.png";

export const StockManagement = () => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div sticky className="grid grid-cols-3 gap-5  ">
        <div>
          <span className="self-center whitespace-nowrap  font-semibold  text-2xl">
            Stock Management
          </span>
        </div>
        <div>
          <Select id="Product" required>
            <option>Select Vendor</option>
            <option>extell</option>
          </Select>
        </div>
        <div>
          <Select id="Vendor" required>
            <option>Select Stock Level</option>
            <option>extell</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-rows-1 gap-4 mt-5  mb-10">
        {/* product card */}
      
        <div className="flex items-center border p-4 rounded-lg shadow-md ">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>{" "}
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>{" "}
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>{" "}
        
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>
        <div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div><div className="flex items-center border p-4 rounded-lg shadow-md">
          <img
            src="https://extellsystems.com/wp-content/uploads/2021/05/CAT6_Cover.webp"
            alt="Product"
            className="h-24 mr-4"
          />
          <div className=" grid grid-cols-4 gap-2">
            <div className="">
              <p className="font-bold">Product Id:</p>
              <p className="">10235</p>
            </div>
            <div className=" ">
              <p className="font-bold">Name:</p>
              <p className="w-4/12">M12 Gigabit PoE+ Railway Switch</p>
            </div>
            <div className="ms-5">
              <p className="font-bold">Vendor:</p>
              <p className="">trendnet</p>
            </div>
            <div className="">
              <p className="font-bold">Stock Availability:</p>
              <p className="">
                Prime stock level <label></label>
              </p>
              <div className="w-4 h-4 bg-green-500 "></div>
            </div>
          </div>
          <Button onClick={handleViewClick} className="ml-auto">
            View
          </Button>
        </div>
      </div>

      <Modal show={showModal} onClose={handleClose}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <p>Here are the details of the product.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

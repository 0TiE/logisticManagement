import React, { useState } from "react";
import {
  Tabs,
  Button,
  Checkbox,
  Label,
  TextInput,
  Dropdown,
  Table,
  Select,
  Textarea,
  Card,
} from "flowbite-react";
import { MdAddToPhotos, MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

export const GRNEntry = () => {
  const [section, setSection] = useState(1);

  const handleNext = () => {
    if (section < 3) {
      setSection(section + 1);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-900";
      case "Pending":
        return "bg-yellow-100 text-yellow-900";
      case "Cancelled":
        return "bg-red-100 text-red-900";
      default:
        return "";
    }
  };

  const [historyData] = useState([
    {
      vendor: "EXTREAM",
      product: "AP",
      quantity: 23,
      date: "$2999",
      grn: "GRN123",
      status: "Completed",
    },
    {
      vendor: "EXTREAM",
      product: "AP",
      quantity: 23,
      date: "$2999",
      grn: "GRN123",
      status: "Completed",
    },
    {
      vendor: "EXTREAM",
      product: "AP",
      quantity: 23,
      date: "$2999",
      grn: "GRN123",
      status: "Completed",
    },
  ]);

  const today = new Date().toLocaleDateString();

  return (
    <div >
      <Tabs aria-label="Default tabs" hoverable  >
        <Tabs.Item active title="Add New Batch" icon={MdAddToPhotos}>
       
          
            <div className="flex justify-center ">  
            <Card className="max-w-sm ">
        <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Batch" value="Add New batch" />
                <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="vender" value="Vender" />
                    </div>
                    <Select id="Product" required>
                      <option>Trendnet</option>
                      <option>extell</option>
                    </Select>
                  </div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <TextInput value={today} disabled />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">send me a copy </Label>
            </div>
            <Button type="submit">Create</Button>
          </form>
          </Card>
          </div>
        </Tabs.Item>

        <Tabs.Item active title="GRN" icon={MdDashboard}>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                GRN Section {section}
              </span>
              {section === 1 && (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="batchID" value="batch ID" />
                    <TextInput />
                  </div>
                  <div className="mb-3 block">
                    <Label htmlFor="vendor name" value="vendor Name" />
                    <TextInput />
                  </div>
                  <div className="mb-4 block">
                    <Label htmlFor="Vendor ID" value="Vendor ID" />
                    <TextInput />
                  </div>
                  <div className="mb-5 block">
                    <Label htmlFor="Batch date" value="Batch Date" />
                  </div>
                </div>
              )}

              {section === 2 && (
                <div>
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="Product" value="Product" />
                    </div>
                    <Select id="Product" required>
                      <option>Trendnet</option>
                      <option>extell</option>
                    </Select>
                  </div>
                  <div className="mb-7 block">
                    <Label htmlFor="Feature 1" value="Feature 1" />
                    <TextInput />
                  </div>
                  <div className="mb-8 block">
                    <Label htmlFor="Feature 2" value="Feature 2" />
                    <TextInput />
                  </div>
                  <div className="mb-9 block">
                    <Label htmlFor="Feature 3" value="Feature 3" />
                    <TextInput />
                  </div>
                  <div className="mb-10 block">
                    <Label htmlFor="Unit price" value="Unit price" />
                    <TextInput />
                  </div>
                </div>
              )}

              {section === 3 && (
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Table Section
                  </span>
                  <table className="table-auto w-full" >
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Item No</th>
                        <th className="border px-4 py-2">Serial No</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 1 Input" />
                        </td>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 2 Input" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 1 Input" />
                        </td>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 2 Input" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 1 Input" />
                        </td>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 2 Input" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 1 Input" />
                        </td>
                        <td className="border px-4 py-2">
                          <TextInput placeholder="Column 2 Input" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mb-11 block">
                    <Label htmlFor="Other_Cost" value="Other Cost" />
                    <TextInput />
                  </div>
                  <div className="mb-12 block">
                    <Label htmlFor="TAX" value="Tax Cost" />
                    <TextInput />
                  </div>
                  <div className="mb-123 block">
                    <Label htmlFor="ccost" value="Cost to Connex" />
                    <TextInput />
                  </div>
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="comment" value="Reference" />
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Leave a comment..."
                      required
                      rows={4}
                    />
                  </div>
                  <div className="mt-4">
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              )}
            </div>

            {section !== 3 && (
              <Button
                color="failure"
                type="button"
                className="self-end"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </form>
        </Tabs.Item>

        <Tabs.Item title="History" icon={FaHistory}>
          <Table striped>
            <Table.Head className="text-sm">
              <Table.HeadCell>Vendor name</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>GRN</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {historyData.map((row, index) => (
                <Table.Row
                  key={index}
                  className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${getStatusColor(
                    row.status
                  )}`}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {row.vendor}
                  </Table.Cell>
                  <Table.Cell>{row.product}</Table.Cell>
                  <Table.Cell>{row.quantity}</Table.Cell>
                  <Table.Cell>{row.date}</Table.Cell>
                  <Table.Cell>{row.grn}</Table.Cell>
                  <Table.Cell>{row.status}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Delete
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Tabs.Item>

        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

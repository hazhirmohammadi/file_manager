"use client";
import React, { useState } from "react";
import { Table, Theme } from "@chakra-ui/react";
import { GoFileDirectoryFill } from "react-icons/go";
import ContextMenu from "@/components/common/ContextMenu";
import { Checkbox } from "@/components/ui/checkbox";
import { FaRegFileLines } from "react-icons/fa6";
import { toaster } from "@/components/ui/toaster";


const items = [
  { id: 12362, name: "Laptop", date: "Electronics", size: 999.99, location: "Laptop" ,type:"dir"},
  { id: 2236346, name: "Coffee Maker", date: "Home Appliances", size: 49.99, location: "Coffee" ,type:"file"},
  { id: 423462336237, name: "Smartphone", date: "Electronics", size: 799.99, location: "Headphones",type:"dir" },
  { id: 5236, name: "Headphones", date: "Accessories", size: 199.99, location: "Laptop" ,type:"dir"},
  { id: 11234623, name: "Laptop", date: "Electronics", size: 999.99, location: "" ,type:"file"},
  { id: 22342623, name: "Coffee Maker", date: "Home Appliances", size: 49.99, location: "" ,type:"dir"},
  { id: 33236, name: "Desk Chair Desk Chair", date: "Furniture", size: 150.0, location: "" ,type:"file"},
  { id: 442345, name: "Smartphone", date: "Electronics", size: 799.99, location: "" ,type:"dir"},
  { id: 5577523, name: "Headphones", date: "Accessories", size: 199.99, location: "" ,type:"file"},
  { id: 2222345, name: "Coffee Maker", date: "Home Appliances", size: 49.99, location: "",type:"dir" },
  { id: 3332345, name: "Desk Chair", date: "Furniture", size: 150.0, location: "" ,type:"dir"},
  { id: 44442222, name: "Smartphone", date: "Electronics", size: 799.99, location: "" ,type:"dir"},
  { id: 5555236342275, name: "Headphones", date: "Accessories", size: 199.99, location: "" ,type:"dir"},
];
const Directory = () => {
  const showToast=()=>{
    toaster.create({description:"OK",duration:3000,type:"info"});
    console.log("5");
  }
  const [selection, setSelection] = useState<string[]>([]);

  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < items.length;

showToast()
  return (
    <div className="flex flex-col overflow-y-auto  max-h-[500px]">
      <Theme appearance="light">
        <Table.Root size="sm" appearance="light">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Date</Table.ColumnHeader>
              <Table.ColumnHeader textAlign=""></Table.ColumnHeader>
              <Table.ColumnHeader textAlign="">Size</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row
                key={Math.random()}
                onClick={() => {

                }}
                className={`hover:bg-neutral-100 cursor-pointer hover:text-blue-500  `}
                data-selected={selection.includes(item.name+item.id) ? "" : undefined}
              >
                <Table.Cell>
                  <Checkbox
                    colorPalette="blue"
                    className="border"
                    top="1"
                    aria-label="Select row"
                    checked={selection.includes(item.name+item.id)}
                    onCheckedChange={(changes) => {
                      setSelection((prev) =>
                        changes.checked
                          ? [...prev, item.name+item.id]
                          : selection.filter((name) => name !== item.name+item.id),
                      );
                    }}
                  />
                </Table.Cell>
                <Table.Cell className="flex flex-row gap-2 mt-2">
                  {item.type=="dir"?(
                    <GoFileDirectoryFill />
                  ):(
                    <FaRegFileLines />
                  )}
                  <p>{item.name}</p>
                </Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell textAlign="end">{item.size}</Table.Cell>
                <Table.Cell textAlign="end"><ContextMenu item={item} /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Theme>

    </div>
  );
};

export default Directory;
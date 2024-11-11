import React from "react";
import { Table, Theme } from "@chakra-ui/react";
import { GoFileDirectoryFill } from "react-icons/go";

const Directory = () => {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 ,path:"Laptop"},
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 ,path:"Coffee"},
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 ,path:"Smartphone"},
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 ,path:"Headphones"},
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 ,path:"Laptop"},
    { id: 11, name: "Laptop", category: "Electronics", price: 999.99 ,path:""},
    { id: 22, name: "Coffee Maker", category: "Home Appliances", price: 49.99 ,path:""},
    { id: 33, name: "Desk Chair Desk Chair", category: "Furniture", price: 150.0 ,path:""},
    { id: 44, name: "Smartphone", category: "Electronics", price: 799.99 ,path:""},
    { id: 55, name: "Headphones", category: "Accessories", price: 199.99 ,path:""},
    { id: 16, name: "Laptop", category: "Electronics", price: 999.99 ,path:""},
    { id: 222, name: "Coffee Maker", category: "Home Appliances", price: 49.99 ,path:""},
    { id: 333, name: "Desk Chair", category: "Furniture", price: 150.0 ,path:""},
    { id: 4444, name: "Smartphone", category: "Electronics", price: 799.99 ,path:""},
    { id: 5555, name: "Headphones", category: "Accessories", price: 199.99 ,path:""},
  ];
  return (
    <div className="flex flex-col overflow-y-auto  max-h-[500px]">
      <Theme appearance="light">
        <Table.Root size="sm" appearance="light">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Date</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Size</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id} onClick={() => {
                console.log(item.id);
              }}
              className="hover:bg-neutral-100 cursor-pointer hover:text-blue-500"
              >

                <Table.Cell className="flex flex-row gap-2">  <GoFileDirectoryFill />{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell textAlign="end">{item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Theme>

    </div>
  );
};

export default Directory;
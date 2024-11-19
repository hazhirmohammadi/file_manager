"use client";
import React, { useEffect, useState } from "react";
import { FormatByte, Table, Theme } from "@chakra-ui/react";

import { useWSStore } from "@/Store/WsStore";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import ContextMenu from "@/components/common/ContextMenu";

type FileInfo = {
  name: string;
  type: "file" | "directory";
  size?: number;
  lastModified?: string;
  fullPath: string;
};


const Directory = () => {
  const [message, setMessage] = useState<FileInfo[]>([]);
  const { service } = useWSStore();
  useEffect(() => {
    service.connect(
      () => {
      },
      () => {
      },
      () => {
      },
      () => {
      },
      (event) => {
        try {
          const parsedData = JSON.parse(event);

          setMessage(parsedData.reverse());

        } catch (error) {
          console.error("Error parsing data: ", error);
        }
      },
    );
    return () => {
      service.closeConnection();
    };
  }, [service]);

  function formatDate(date: string): string {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toLocaleString('en-GB', { timeZoneName: 'short' })
      .split(' ')
      .slice(0, -1)
      .join(' ');
    return formattedDate;
  }


const x = (date:string) => {
  const inputDate: string | undefined = date
  if (inputDate) {
    return  formatDate(inputDate);

  } else {
    console.error("Date is undefined");
  }
}

  return (
    <div className="flex flex-col overflow-y-auto  max-h-[500px]">
      <Theme appearance="light">
        <Table.Root size="sm" appearance="light">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Date</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="">Size</Table.ColumnHeader>
              <Table.ColumnHeader textAlign=""></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {message.map((item, index) => (
              <Table.Row
                key={index}
                onClick={() => {

                }}
                className={`hover:bg-neutral-100 cursor-pointer hover:text-blue-500  `}
              >

                <Table.Cell className="flex flex-row gap-2 mt-2">
                  {item.type == "directory" ? (
                    <GoFileDirectoryFill />
                  ) : (
                    <FaRegFileLines />
                  )}
                  <p>{item.name}</p>
                </Table.Cell>
                <Table.Cell><p className="text-[10px]">{ x(item.lastModified)}</p></Table.Cell>
                <Table.Cell className="text-xs">{item.size !== undefined ? (<FormatByte value={item.size} />) : (
                  <p>{item.size}</p>)}</Table.Cell>
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
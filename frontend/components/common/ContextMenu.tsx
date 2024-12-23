"use client";
import { Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { MdContentCopy, MdDelete, MdEditDocument, MdOutlineContentCut } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";
import {  toaster } from "@/components/ui/toaster";
import Directory from "@/services/Directory";


type FileInfo = {
  name: string;
  type: "file" | "directory";
  size?: number;
  lastModified?: string;
  fullPath: string;
};

interface Interface {
  onClick?: (isOpen: boolean) => boolean | void;
  item?: FileInfo;
}

const ContextMenu: React.FC<Interface> = ({ onClick, item }) => {
  const directory = new Directory();

  function copyJsonToClipboard(jsonData: object): void {
    const jsonString = JSON.stringify(jsonData, null, 2); // Optional: `null, 2` to format the JSON with indentation
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        toaster.create({ description: "copy in clipboard", type: "success" });
      })
      .catch(() => {
        toaster.create({ description: "not copy", type: "error" });
      });
  }

  return (
    <>
      <PopoverRoot onOpenChange={(isOpen) => {
        if (isOpen) {
          if (onClick) onClick(isOpen.open);
        }
      }}>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline" className="text-xs ">
            <IoMenu />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <Text className="text-black  border-b-2 mb-1">
              Menu
            </Text>

            <div className="flex flex-col items-center justify-center gap-1 ">

              <Button
                onClick={() => {
                  console.log(item?.type);
                  directory.Cut(item?.type,() => {
                    console.log(9);
                  },
                    item?.fullPath
                  );
                }}
                variant="outline"
                size="xs"
                className="flex justify-start items-center text-black hover:text-blue-500 hover:bg-neutral-100 text-start w-full "
              >
                <MdOutlineContentCut />
                <p>Cut</p>

              </Button>
              <Button
                onClick={() => {
                  console.log(item?.type);
                  directory.Copy(item?.type);
                }}
                variant="outline"
                size="xs"
                className="flex justify-start items-center text-black hover:text-blue-500 hover:bg-neutral-100 text-start w-full "
              >
                <MdContentCopy />
                <p>Copy</p>

              </Button>
              <Button
                onClick={() => {
                  directory.Rename(item?.type);
                }}
                variant="outline"
                size="xs"
                className="flex justify-start items-center text-black hover:text-blue-500 hover:bg-neutral-100 w-full  "
              >
                <MdEditDocument />
                <p> Rename</p>
              </Button>
              <Button
                onClick={() => {
                  directory.Delete(item?.type);
                }}
                variant="outline"
                size="xs"
                className="flex justify-start items-center  text-black hover:text-red-500 hover:bg-neutral-100 w-full"
              >
                <MdDelete />
                <p>Delete</p>
              </Button>

            </div>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="xs"
                  className="flex justify-start items-center  text-black hover:text-blue-500 hover:bg-neutral-100 w-full"
                >
                  <HiInformationCircle />
                  <p>Details</p>
                </Button>
              </PopoverTrigger>
              <PopoverContent portalled={false}>
                <PopoverArrow />
                <PopoverBody className="text-black">
                  <div className="border-b-2 ">
                    <label
                      className="font-semibold flex flex-row items-center gap-x-1 ">Information <HiInformationCircle
                      size={16} className="text-blue-500" /></label>
                  </div>
                  <ul className="flex flex-col text-xs">
                    <li> Name:{item?.name}</li>
                    <li>Type:{item?.type}</li>
                    <li>Size:{item?.size}</li>
                    <li>Location:{item?.fullPath}</li>
                    <li> Data modify:{item?.lastModified}</li>
                  </ul>
                  <Button
                    onClick={() => {
                      copyJsonToClipboard({
                        name: item?.name,
                        type: item?.type,
                        size: item?.size,
                        location: item?.fullPath,
                        date: item?.lastModified,
                      });
                    }}
                    className="w-fit border mt-1 rounded-md px-1 cursor-pointer hover:text-blue-500">
                    Copy as Json
                  </Button>

                </PopoverBody>
              </PopoverContent>
            </PopoverRoot>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};
export default ContextMenu;
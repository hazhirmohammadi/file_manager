"use client";
import React from "react";
import { Status } from "@/components/ui/status";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { Badge, Button } from "@chakra-ui/react";
import useDirectoryStore from "@/Store/DirectoryStore";
import useTabsStore from "@/Store/TabStore";
//success
const Sidebar = () => {
  const { color } = useDirectoryStore();
  const {setFileAndDir} = useTabsStore();
  return (
    <div className="text-black flex flex-col  w-full p-2">
      <div className="w-full border border-gray-200 rounded-md p-1">
        <div className="flex-row  flex items-center gap-2">
          <div className="font-semibold text-sm flex flex-row items-center gap-2">
            <PiPlugsConnectedFill />
            Connect
          </div>
          <Status
            value={color}
          />
        </div>
      </div>

      <div className="w-full border border-gray-200 rounded-md p-1 mt-2 flex flex-col  ">
        <Badge colorPalette="purple" className="mb-2">New</Badge>
        <div>
          <Button
            onClick={() => {
              setFileAndDir("showDir")
            }}
            className="text-xs border-neutral-200 border px-3 hover:text-blue-500 hover:border-blue-500"> directory</Button>
          <Button
            onClick={() => {
              setFileAndDir("createDir")
            }}
            className="text-xs border-neutral-200 border px-3 mx-1 hover:border-blue-500 hover:text-blue-500"> create directory</Button>
          <Button
            onClick={() => {
              setFileAndDir("createFile")
            }}
            className="text-xs border-neutral-200 border px-3 mx-1 hover:border-blue-500 hover:text-blue-500"> create file</Button>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
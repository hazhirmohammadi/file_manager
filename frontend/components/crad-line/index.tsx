"use client";
import React from "react";
import Directory from "@/components/crad-line/file-and-directors/Directory";
import CreateDirectory from "@/components/crad-line/Create-Directory";
import useTabsStore from "@/Store/TabStore";

const CradLine = () => {
  const { dirStatus } = useTabsStore();
  return (
    <div className="w-full h-full border-2 border-gray-200 rounded-md ">
      {dirStatus === "showDir" ? (<Directory />) : dirStatus === "createDir" ? (<CreateDirectory />) : null}
    </div>
  );
};

export default CradLine;
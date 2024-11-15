"use client";
import React from "react";
import Directory from "@/components/crad-line/directors-details/Directory";
import CreateDirectory from "@/components/crad-line/directors-details/Create-Directory";
import useTabsStore from "@/Store/TabStore";
import CreateFile from "@/components/crad-line/form-details/Create-File";

const CradLine = () => {
  const { dirStatus } = useTabsStore();
  return (
    <div className="w-full h-full border-2 border-gray-200 rounded-md ">
      {dirStatus === "showDir" ? (<Directory />) :
        dirStatus === "createDir" ? (<CreateDirectory />) :
          dirStatus === "createFile" ? (<CreateFile />) : null}
    </div>
  );
};

export default CradLine;
"use client";
import React from "react";
import { GoRelFilePath } from "react-icons/go";
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@/components/ui/breadcrumb";

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { LuChevronDown } from "react-icons/lu";

const Breadcrumb = () => {
  return (
    <div className="flex w-full py-3 border-2 border-gray-200 rounded-md ">
      <GoRelFilePath  className="text-green-500"/>
      <div className="text-black">
        <BreadcrumbRoot separator="/" separatorGap="4" className="">
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          <MenuRoot>
            <MenuTrigger asChild>
              <BreadcrumbLink as="button">
                Components <LuChevronDown />
              </BreadcrumbLink>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="theme" >Theme</MenuItem>
              <MenuItem value="props">Props</MenuItem>
              <MenuItem value="custom">Customization</MenuItem>
            </MenuContent>
          </MenuRoot>
          <BreadcrumbCurrentLink>Props</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
      </div>
    </div>
  );
};

export default Breadcrumb;

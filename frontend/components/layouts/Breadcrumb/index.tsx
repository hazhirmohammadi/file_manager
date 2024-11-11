"use client";
import React from "react";
import { GoRelFilePath } from "react-icons/go";
import { BreadcrumbLink, BreadcrumbRoot } from "@/components/ui/breadcrumb";

// import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
// import { LuChevronDown } from "react-icons/lu";
interface BreadcrumbProps<T> {
  path?: T[];
}
const Breadcrumb = <T extends string>({ path }: BreadcrumbProps<T>) =>{
  return (
    <div className="flex w-full py-3 border-2 border-gray-200 rounded-md ">
      <GoRelFilePath className="text-green-500" />
      <div className="text-black">
        <BreadcrumbRoot separator="/" separatorGap="4" className="">
          {path?.map((link, index) => (
            <BreadcrumbLink key={index} href="#">{link}</BreadcrumbLink>
          ))}
        </BreadcrumbRoot>
      </div>
    </div>
  );
};

export default Breadcrumb;

// <MenuRoot>
//   <MenuTrigger asChild>
//     <BreadcrumbLink as="button">
//       Components <LuChevronDown />
//     </BreadcrumbLink>
//   </MenuTrigger>
//   <MenuContent>
//     <MenuItem value="theme" >Theme</MenuItem>
//     <MenuItem value="props">Props</MenuItem>
//     <MenuItem value="custom">Customization</MenuItem>
//   </MenuContent>
// </MenuRoot>
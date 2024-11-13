"use client"
import React from "react";

import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
        <Header />
        <div className="grid grid-cols-10 ">
          <div className="col-span-2 border-r-2 border-gray-100">
            <Sidebar />
          </div>
          <div className="col-span-8 text-black  ">
            {children}
          </div>
        </div>
    </section>
  );
};

export default MainLayout;
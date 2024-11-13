"use client";
import React from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import CradLine from "@/components/crad-line";
import CommendLine from "@/components/commend-line";
import MainLayout from "@/components/layouts/mainLayout";

const Main = () => {
  const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <>
      <MainLayout>
        <div>
          {/*<WebSocketClient/>*/}
          <div className="  p-2">
            <Breadcrumb path={array} />
          </div>
          <div className="w-full grid grid-cols-2 gap-2 h-[500px] p-2">
            <div>
              <div className="mb-2 w-fit">
                <p className="border-b-2 border-gray-900 ">CRAD line</p>
              </div>
              <CradLine />
            </div>
            <div>
              <div className="mb-2 w-fit ">
                <p className="border-b-2 border-gray-900 ">commend line</p>
              </div>
              <CommendLine />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Main;
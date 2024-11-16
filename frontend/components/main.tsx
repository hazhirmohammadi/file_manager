"use client";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import CradLine from "@/components/crad-line";
import CommendLine from "@/components/commend-line";
import MainLayout from "@/components/layouts/mainLayout";
import { useWSStore } from "@/Store/WsStore";
import useDirectoryStore from "@/Store/DirectoryStore";
import { Toaster, toaster } from "@/components/ui/toaster";


const Main = () => {
  const { setColor,color } = useDirectoryStore();
  const { service } = useWSStore();

  useEffect(() => {
    service.connect(
      () => {
        toaster.create({ description: "Connected socket", duration: 3000, type: "success" });
        setColor("success");
      },
      () => {
        toaster.create({ description: "disconnected 😀", duration: 3000, type: "info" });
        setColor("error");
      },
      () => {
        service.reconnect();
        console.log("ERROR disconnected");
      },
      () => {
        const reconnectStatus = service.reconnect();
        if (reconnectStatus.status === 0) {
          reconnect();
          setColor("success");
        } else if (reconnectStatus?.status === 1) {
          setColor("success");
        } else if (reconnectStatus?.status === 3) {
          setColor("error");
        }
      },
    );
    return () => {
      service.closeConnection();
    };
  }, [service]);


  function reconnect() {
    toaster.create({ description: "disconnected", duration: 3000, type: "loading" });
  }


  return (
    <>
      <MainLayout>
        <div>
          {/*<WebSocketClient/>*/}
          <div className="  p-2">
            <Breadcrumb path={["1"]} />
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
      <Toaster />
    </>
  );
};

export default Main;
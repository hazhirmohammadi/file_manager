"use client";

import Breadcrumb from "@/components/layouts/Breadcrumb";
import CradLine from "@/components/crad-line";
import CommendLine from "@/components/commend-line";


export default function Home() {
  const array= ["1","2","3","4","5","6","7","8","9" ]
  return (
    <>
      <div className="  p-2">
        <Breadcrumb path={array}/>
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
    </>
  );
}

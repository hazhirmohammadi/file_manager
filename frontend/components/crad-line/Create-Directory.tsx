"use client"
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Badge, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const CreateDirectory = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2">

        <div className="w-full text-center border border-blue-500 bg-blue-100 py-3 rounded-md">

          <p className="font-semibold">
            Create Directory
          </p>
        </div>
        <Field orientation="vertical" label="Name Directory">
          <Input placeholder="node" className="w-full border border-blue-500 bg-blue-100 py-3 rounded-md px-2 " />
        </Field>
        <Field orientation="vertical" label="Path Directory ">
          <Input placeholder="/example/newfolder" className="w-full border border-blue-500 bg-blue-100 py-3 rounded-md px-2 " />
        </Field>
        <Field orientation="horizontal" label="Hide email" >
          <Switch />
        </Field>


          <Button  className="mx-auto border-2 rounded-md border-neutral-200 hover:border-green-500 hover:bg-green-100 w-[280px]">Create</Button>
      </div>
    </div>
  );
};

export default CreateDirectory;
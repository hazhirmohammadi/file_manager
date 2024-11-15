"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";

import { toaster, Toaster } from "@/components/ui/toaster";
import { useWSStore } from "@/Store/WsStore";

const CreateDirectory = () => {

  const [message, setMessage] = useState("");
  const { service, sendMessage } = useWSStore();

  useEffect(()=>{
    console.log(17);
    service.connect(
      ()=>{
        toaster.create({ description: "Connected socket", duration: 3000, type: "success" });
      }

    )
    return ()=>{

    }
  },[service])

  const handleSend = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <div className="flex flex-col gap-2 p-2">
        <div className="w-full text-center border border-blue-500 bg-blue-100 py-3 rounded-md">
          <p className="font-semibold">
            Create Directory
          </p>
        </div>
        <InputGroup
          flex="1"
          startElement="name "
          className="border-2 rounded-md border-neutral-200"
        >
          <Input ps="4.75em" pe="0" placeholder="name directory" variant="subtle" />
        </InputGroup>
        <InputGroup
          flex="1"
          startElement="Path"
          className="border-2 rounded-md border-neutral-200"
        >
          <Input
            onChange={(e) => {
              console.log(1);
              setMessage(e.target.value);
            }}
            ps="4.75em" pe="0" placeholder="directory location" variant="subtle" />
        </InputGroup>
        <Field orientation="horizontal" label="Hide email">
          <Switch />
        </Field>

        <Button
          onClick={handleSend}
          className="mx-auto border-2 rounded-md border-neutral-200 hover:border-green-500 hover:bg-green-100 w-[280px]">Create</Button>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateDirectory;



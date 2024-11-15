"use client"
import React from "react";
import { Field } from "@/components/ui/field";
import { createListCollection, Input } from "@chakra-ui/react";

import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select";

const DomainSelect = () => (
  <NativeSelectRoot size="xs" variant="plain" width="50px" me="-1">
    <NativeSelectField defaultValue=".com" fontSize="sm" className="text-black">
      <option value=".txt">.txt</option>
      <option value=".md">.md</option>
      <option value=".yml">.yml</option>
    </NativeSelectField>
  </NativeSelectRoot>
)
const CreateFile = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2">
        <div className="w-full text-center border border-blue-500 bg-blue-100 py-3 rounded-md">
          <p className="font-semibold">
            Create File
          </p>
        </div>
        <InputGroup
          flex="1"
          startElement="name"
          endElement={<DomainSelect />}
          className="border-2 rounded-md border-neutral-200"
        >
          <Input ps="4.75em" pe="0" placeholder="new file"  variant="subtle"/>
        </InputGroup>
        <InputGroup
          flex="1"
          startElement="Path"
          className="border-2 rounded-md border-neutral-200"
        >
          <Input ps="4.75em" pe="0" placeholder="file location" variant="subtle"/>
        </InputGroup>


        <Button
          className="mx-auto border-2 rounded-md border-neutral-200 hover:border-green-500 hover:bg-green-100 w-[280px]">Create</Button>
      </div>
    </div>
  );
};

export default CreateFile;
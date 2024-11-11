"use client";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { HStack, Input, Kbd, Text } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";

const user = {
  id: "1",
  name: "Uohn Nason",
  email: "john.mason@example.com",
  avatar: "https://i.pravatar.cc/ 200?u=iu",
};
const Header = () => {

  return (
    <div className="w-full h-[60px] px-6 flex items-center  border-b-2 border-gray-200 bg-neutral-100">
      <div className="w-full flex items-center justify-between">
        <div>
          <HStack key={user.email} gap="4" className="flex flex-row  w-fit ">
            <Avatar name={user.name} size="lg" src={user.avatar} />
            <div className="text-black">
              <Text>UserName</Text>
            </div>
          </HStack>
        </div>
        <div>
          <HStack gap="10" width="fit" className="">
            <InputGroup
              flex="1"
              startElement={<LuSearch />}
              endElement={<Kbd>⌘K</Kbd>}
            >
              <Input placeholder="Search contacts" />
            </InputGroup>
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default Header;
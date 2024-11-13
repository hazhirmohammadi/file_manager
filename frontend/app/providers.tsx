'use client';
import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider >
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
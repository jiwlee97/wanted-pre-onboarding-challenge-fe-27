import { Decorator } from "@storybook/react";
import React from "react";
import { Toaster } from "../src/shared/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const toastDecorator: Decorator = (Story) => {
  return (
    <>
      {Story()}
      <Toaster />
    </>
  );
};

export const queryDecorator: Decorator = (Story) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
  );
};

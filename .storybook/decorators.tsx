import { Decorator } from "@storybook/react";
import React from "react";
import { Toaster } from "../src/shared/ui";

export const toastDecorator: Decorator = (Story) => {
  return (
    <>
      {Story()}
      <Toaster />
    </>
  );
};

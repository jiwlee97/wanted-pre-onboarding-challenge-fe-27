import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterOutlet,
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { SignUpPage } from "./SignUpPage";
import { AuthPageLayout } from "@/shared/ui";

const meta: Meta<typeof SignUpPage> = {
  component: AuthPageLayout,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: reactRouterOutlet(<SignUpPage />),
    }),
  },
};

export default meta;
type Story = StoryObj<typeof SignUpPage>;

export const Default: Story = {};

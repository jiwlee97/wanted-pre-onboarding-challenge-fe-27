import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterOutlet,
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { LoginPage } from "./LoginPage";
import { AuthPageLayout } from "@/shared/ui";

const meta: Meta<typeof LoginPage> = {
  component: AuthPageLayout,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: reactRouterOutlet(<LoginPage />),
    }),
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

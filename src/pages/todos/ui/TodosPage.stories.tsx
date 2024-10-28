import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterOutlet,
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { TodosPage } from "./TodosPage";
import { DefaultPageLayout } from "@/shared/ui";

type Story = StoryObj<typeof TodosPage>;
const meta: Meta<typeof TodosPage> = {
  component: DefaultPageLayout,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: reactRouterOutlet(<TodosPage />),
    }),
  },
};

export default meta;

export const Default: Story = {};

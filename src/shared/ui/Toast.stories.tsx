import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction } from "./Toast";
import { Button } from "./Button";
import { useToast } from "../lib";

const meta = {
  title: "Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultToast = ({
  args,
}: {
  args: Parameters<ReturnType<typeof useToast>["toast"]>[0];
}) => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: args.variant,
          title: args.title,
          description: args.description,
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
};

export const Default: Story = {
  render: (args) => <DefaultToast args={args} />,
  args: {
    variant: "default",
    title: "Scheduled: Catch up ",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "destructive"],
    },
  },
};

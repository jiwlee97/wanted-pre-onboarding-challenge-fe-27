import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/shared/lib";
import { useEditTodo } from "../api/useEditTodo";
import { useParams } from "react-router-dom";
import { Todo } from "@/entities/todo";

const formSchema = z.object({
  title: z.string().min(1, { message: "필수입력값입니다." }),
  content: z.string().min(1, { message: "필수입력값입니다." }),
});

type Props = Pick<Todo, "title" | "content"> & { closeEditMode: () => void };

export const EditTodoForm = ({
  title: defaultTitle,
  content: defaultContent,
  closeEditMode,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: defaultTitle,
      content: defaultContent,
    },
  });

  const params = useParams();
  const { mutate } = useEditTodo();
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(
      {
        id: params.id ?? "",
        title: values.title,
        content: values.content,
      },
      {
        onError() {
          toast({
            variant: "destructive",
            title: "할 일 수정에 실패했습니다. 다시 시도해주세요.",
          });
        },
        onSuccess: () => {
          toast({
            variant: "success",
            title: "할 일이 수정되었습니다.",
          });
          closeEditMode();
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Title</FormLabel>
                  <FormControl>
                    <Input
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      id="text"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-1">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      id="content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={!form.formState.isValid}>Save</Button>
        </div>
      </form>
    </Form>
  );
};

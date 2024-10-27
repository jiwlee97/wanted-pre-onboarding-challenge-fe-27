import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignUp } from "./useSignUp";
import { isAxiosError } from "axios";
import { useToast } from "@/shared/lib";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "필수입력값입니다." })
    .regex(/^(?=.*@)(?=.*\.).+$/, { message: "이메일 형식으로 입력해주세요." }),
  password: z
    .string()
    .min(1, { message: "필수입력값입니다." })
    .min(8, { message: "8자리 이상이어야합니다." }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useSignUp();
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(
      {
        email: values.email,
        password: values.password,
      },
      {
        onError(error) {
          if (isAxiosError(error) && error.response?.status === 409) {
            console.log(error.response?.data);
            form.setError("email", {
              message:
                error.response?.data.details ?? "이미 존재하는 유저입니다",
            });
          } else {
            toast({
              variant: "destructive",
              title: "회원가입에 실패했습니다. 다시 시도해주세요.",
            });
          }
        },
        onSuccess: () => {
          toast({
            variant: "success",
            title: "회원가입이 완료되었습니다.",
          });
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Email</FormLabel>
                  <FormControl>
                    <Input
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="name@example.com"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  {!form.getFieldState("email").invalid && (
                    <FormDescription>
                      이메일 형태로 입력해주세요.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-1">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Password</FormLabel>
                  <FormControl>
                    <Input
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      id="password"
                      placeholder="********"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>8글자 이상 입력해주세요.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={!form.formState.isValid}>SignUp</Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;

import { Todo, useTodos } from "@/entities/todo";
import { useDeleteTodo } from "@/features/deleteTodo";
import { useToast } from "@/shared/lib";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Icon,
} from "@/shared/ui";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DeleteTodoButton = ({ todoId }: { todoId: Todo["id"] }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate } = useDeleteTodo();

  const deleteTodo = () => {
    mutate(todoId, {
      onError: () => {
        toast({
          variant: "destructive",
          title: "할 일 삭제에 실패했습니다. 다시 시도해주세요.",
        });
      },
      onSuccess: () => {
        toast({
          variant: "success",
          title: "할 일이 삭제되었습니다.",
        });
        navigate("/todos");
      },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="opacity-0 w-3 h-3 p-2 border-none bg-transparent hover:border-none hover:bg-slate-200 group-hover:opacity-100"
        >
          <Icon name="close" size="small" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteTodo}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const Todos = () => {
  const { data } = useTodos();

  const location = useLocation();
  const navigate = useNavigate();

  const navigateToAddTodo = () => {
    navigate("/todos/add-todo");
  };

  return (
    <aside className="-mx-4 lg:w-1/5">
      <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
        <Button onClick={navigateToAddTodo}>Add Todo</Button>
        {data.map((todo) => (
          <div key={todo.id} className="w-full">
            <Link
              to={`/todos/${todo.id}`}
              className={`w-full group inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 justify-start ${
                location.pathname === `/todos/${todo.id}`
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline"
              }`}
            >
              <div className="w-full flex justify-between items-center gap-1">
                {todo.title}
                <DeleteTodoButton todoId={todo.id} />
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
};

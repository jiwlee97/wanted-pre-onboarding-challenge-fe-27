import { useTodos } from "@/entities/todo";
import { Button } from "@/shared/ui";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 justify-start ${
              location.pathname === `/todos/${todo.id}`
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline"
            }`}
          >
            {todo.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

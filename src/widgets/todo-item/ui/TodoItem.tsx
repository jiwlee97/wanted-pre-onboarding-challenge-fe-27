import { useTodoItem } from "@/entities/todo";
import { useParams } from "react-router-dom";

export const TodoItem = () => {
  const params = useParams();

  const { data } = useTodoItem(params.id ?? "");

  return (
    <div>
      <h3 className="text-lg font-medium">{data.title}</h3>
      <p className="text-sm text-muted-foreground">{data.content}</p>
    </div>
  );
};

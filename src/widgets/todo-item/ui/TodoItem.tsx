import { useTodoItem } from "@/entities/todo";
import { EditTodoForm } from "@/features/editTodo";
import { Button } from "@/shared/ui";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const TodoItem = () => {
  const params = useParams();

  const [isEditMode, setIsEditMode] = useState(false);

  const { data } = useTodoItem(params.id ?? "");

  return isEditMode ? (
    <EditTodoForm
      title={data.title}
      content={data.content}
      closeEditMode={() => setIsEditMode(false)}
    />
  ) : (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">{data.title}</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsEditMode((prev) => !prev)}
        >
          Edit
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">{data.content}</p>
    </div>
  );
};
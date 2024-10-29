import { useTodoItem } from "@/entities/todo";
import { EditTodoForm } from "@/features/editTodo";
import { formatDate } from "@/shared/lib";
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
    <div className="h-full flex flex-col">
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
      <p className="flex-1 text-sm text-muted-foreground overflow-y-auto">
        {data.content}
      </p>
      <footer className="flex justify-end gap-3">
        <span className="text-xs text-muted-foreground">
          CreatedAt: {formatDate(data.createdAt)}
        </span>
        <span className="text-xs text-muted-foreground">
          UpdatedAt: {formatDate(data.updatedAt)}
        </span>
      </footer>
    </div>
  );
};

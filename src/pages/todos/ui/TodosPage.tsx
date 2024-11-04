import { useTodos } from "@/entities/todo";
import { AddTodoForm } from "@/features/addTodo";
import { useAddModeStore } from "@/shared/model";

export const TodosPage = () => {
  const { data } = useTodos();
  const addMode = useAddModeStore((state) => state.addMode);

  if (addMode) {
    return <AddTodoForm />;
  }

  return (
    <div className="text-lg h-9 flex items-center font-semibold tracking-tight">
      {data.length === 0
        ? "할 일을 추가해보세요."
        : "할 일을 하나 선택해보세요."}
    </div>
  );
  return;
};

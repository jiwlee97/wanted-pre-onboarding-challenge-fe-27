import { useTodos } from "@/entities/todo";
import { Todos } from "./Todos";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const TodosPage = () => {
  return (
    <div className="h-full space-y-6 p-10 pb-16">
      <div className="h-full flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Todos />
        </Suspense>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const SelectTodo = () => {
  const { data } = useTodos();
  return (
    <div className="text-lg h-9 flex items-center font-semibold tracking-tight">
      {data.length === 0
        ? "할 일을 추가해보세요."
        : "할 일을 하나 선택해보세요."}
    </div>
  );
  return;
};

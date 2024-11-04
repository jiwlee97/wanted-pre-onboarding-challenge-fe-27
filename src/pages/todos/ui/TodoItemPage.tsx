import { Suspense } from "react";
import { TodoItem } from "@/widgets/todo-item";
import { Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const TodoItemPage = () => {
  return (
    <ErrorBoundary fallback={<Navigate to="/todos" />}>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoItem />
      </Suspense>
    </ErrorBoundary>
  );
};

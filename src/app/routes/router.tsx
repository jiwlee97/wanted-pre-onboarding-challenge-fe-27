import { AddTodoForm } from "@/features/addTodo";
import { NotFoundErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { SignUpPage } from "@/pages/sign-up";
import { SelectTodo, TodosPage } from "@/pages/todos";
import { AuthPageLayout, CheckAuth, DefaultPageLayout } from "@/shared/ui";
import { TodoItem } from "@/widgets/todo-item";
import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const router = createBrowserRouter([
  {
    element: <CheckAuth />,
    children: [
      {
        element: <AuthPageLayout />,
        errorElement: <NotFoundErrorPage />,
        children: [
          {
            path: "/sign-up",
            element: <SignUpPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <DefaultPageLayout />,
        errorElement: <NotFoundErrorPage />,
        children: [
          {
            path: "/todos",
            element: <TodosPage />,
            children: [
              {
                path: "",
                element: <SelectTodo />,
              },
              {
                path: "add-todo",
                element: <AddTodoForm />,
              },
              {
                path: ":id",
                element: (
                  <ErrorBoundary fallback={<Navigate to="/todos" />}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <TodoItem />
                    </Suspense>
                  </ErrorBoundary>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

import { NotFoundErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { SignUpPage } from "@/pages/sign-up";
import { TodosPage, TodosPageLayout } from "@/pages/todos";
import { AuthPageLayout, CheckAuth, DefaultPageLayout } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";
import { TodoItemPage } from "@/pages/todos";

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
            element: <TodosPageLayout />,
            children: [
              {
                path: "",
                element: <TodosPage />,
              },
              {
                path: ":id",
                element: <TodoItemPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

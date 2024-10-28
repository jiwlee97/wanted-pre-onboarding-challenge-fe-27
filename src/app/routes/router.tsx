import { NotFoundErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { SignUpPage } from "@/pages/sign-up";
import { AuthPageLayout, CheckAuth } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";

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
    ],
  },
]);

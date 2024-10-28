import { NotFoundErrorPage } from "@/pages/error";
import { SignUpPage } from "@/pages/sign-up";
import { AuthPageLayout } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <AuthPageLayout />,
    errorElement: <NotFoundErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./auth/SignUpPage";
import ErrorPage from "./ErrorPage";
import AuthPageLayout from "./auth/AuthPageLayout";
import { Toaster } from "@/shared/ui";

const router = createBrowserRouter([
  {
    element: <AuthPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

import { Todos } from "@/pages/todos/ui/Todos";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const TodosPageLayout = () => {
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

import { Outlet } from "react-router-dom";

const AuthPageLayout = () => {
  return (
    <div className="overflow-hidden bg-background h-screen w-screen">
      <div className="container flex relative h-full w-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="flex-1 relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            Todo List
          </div>
          <div className="relative z-20 mt-auto">
            <footer className="text-sm">Jiwlee</footer>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;

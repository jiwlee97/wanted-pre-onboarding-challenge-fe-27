import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useToken } from "@/shared/lib";
import { useAddModeStore } from "@/shared/model";

const Header = () => {
  const { removeToken } = useToken();
  const navigate = useNavigate();

  const setAddMode = useAddModeStore((state) => state.setAddMode);

  const onLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <header className="bg-zinc-900 w-full mr-auto ml-auto pr-8 pl-8 flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <Link
        to="/todos"
        className="text-white text-lg font-semibold hover:text-white"
        onClick={() => setAddMode(false)}
      >
        TodoList
      </Link>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <Button variant="secondary" size="sm" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export const DefaultPageLayout = () => {
  return (
    <div className="overflow-hidden bg-background h-screen w-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

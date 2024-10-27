import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Link
        to="/login"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8 text-black"
      >
        Login
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight text-center">
        Create an account
      </h1>
      <div className="grid gap-6">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUpPage;

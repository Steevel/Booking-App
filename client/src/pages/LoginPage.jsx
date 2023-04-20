import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="email@example.com" />
          <input type="password" placeholder="password" />
          <button className="login">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don't have an account yet?&nbsp;
            <Link to="/register" className="text-black underline">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

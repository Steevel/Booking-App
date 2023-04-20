import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="email@example.com" />
          <input type="password" placeholder="password" />
          <button className="login">Login</button>
          <div className="py-2 text-center text-gray-500">
            Already have an account?&nbsp;
            <Link to="/login" className="text-black underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

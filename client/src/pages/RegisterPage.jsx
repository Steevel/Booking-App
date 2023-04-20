import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/register", { name, email, password });
      alert("Registeration successful. Now you can login");
    } catch (error) {
      alert("Registeration failed. Please try again");
    }
  };

  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login">Register</button>
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

import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login successful");
      setRedirect(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-around mt-4 grow">
      <div className="mb-64">
        <h1 className="mb-4 text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
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

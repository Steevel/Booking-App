import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async () => {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  };

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }

  function linkClasses(type = null) {
    let classes = "px-6 py-2 ";
    if (type === subpage || (subpage === undefined && type === "profile")) {
      classes += "rounded-full text-white bg-primary";
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <nav className="flex justify-center w-full gap-2 mt-8 mb-8">
        <Link className={linkClasses("profile")} to="/account/">
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to="/account/bookings">
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to="/account/places">
          My Accommodation
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="max-w-lg mx-auto text-center">
          Logged in as {user?.name} ({user?.email})<br />
          <button onClick={logout} className="max-w-sm mt-2 primary">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;

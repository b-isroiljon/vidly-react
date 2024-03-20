import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Vidly
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-link nav-item" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-link nav-item" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link nav-item" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <>
              <NavLink className="nav-link nav-item" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link nav-item" to="/register">
                Registr
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="nav-link nav-item" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link nav-item" to="/logout">
                Logout
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
